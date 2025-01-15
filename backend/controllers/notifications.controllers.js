import messaging from "../utils/firebase-admin.js"; // Import Firebase messaging instance

// Array to store FCM tokens (in production this should be stored in a database)
const tokens = [];

// Save FCM Token
export const saveToken = async (req, res) => {
  const { token } = req.body;
  
  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  if (!tokens.includes(token)) {
    tokens.push(token);
    console.log("Token saved:", token);
  }

  res.status(200).json({ success: true, message: "Token saved successfully" });
};

// Send notification to devices
export const sendNotification = async (req, res) => {
  console.log("Request body:", req.body);  // Log the entire request body to see what is received
  
  const { tokens, notification } = req.body;

  // Log the notification object separately
  console.log("Notification object:", notification); // Check if it is populated

  const { title, body } = notification;

  // Ensure tokens are provided and are an array
  if (!tokens || !Array.isArray(tokens) || tokens.length === 0) {
    return res.status(400).send({ error: "Please provide at least one token" });
  }

  // Ensure title and body are provided
  if (!title || !body) {
    return res.status(400).send({ error: "Title and body are required" });
  }

  const message = {
    notification: {
      title: title,
      body: body,
      
    },
    tokens: tokens
  };

  try {
    const response = await messaging.sendMulticast(message);
    return res.status(200).send({
      message: "Notification sent successfully",
      response: response,
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return res.status(500).send({
      error: "Failed to send notification",
      details: error.message,
    });
  }
};
