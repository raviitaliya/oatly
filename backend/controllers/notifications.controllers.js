import messaging from "../utils/firebase-admin.js"; // Import Firebase messaging instance

// In-memory array to store FCM tokens (Use a database in production)
const tokens = [];

// Save FCM Token
export const saveToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  if (!tokens.includes(token)) {
    tokens.push(token);
    // console.log("Token saved:", token);
  } 

  res.status(200).json({ success: true, message: "Token saved successfully"});
};

// Send Notification to Devices
export const sendNotification = async (req, res) => {
  console.log("Request body:", req.body);

  const { tokens: requestTokens, notification } = req.body;

  if (
    !requestTokens ||
    !Array.isArray(requestTokens) ||
    requestTokens.length === 0
  ) {
    return res.status(400).send({ error: "Please provide at least one token" });
  }

  if (!notification || !notification.title || !notification.body) {
    return res
      .status(400)
      .send({ error: "Title and body are required in the notification" });
  }

  const message = {
    notification: {
      title: notification.title,
      body: notification.body,
    },
    tokens: requestTokens, 
  };

  console.log("Prepared Message:", message);

  try {
    const response = await messaging.sendEachForMulticast(message);
    return res.status(200).send({
      message: "Notification sent successfully",
      response,
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return res.status(500).send({
      error: "Failed to send notification",
      details: error.message,
    });
  }
};
