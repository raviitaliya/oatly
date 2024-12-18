import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // You can use any SMTP service like Mailgun, SendGrid, etc.
    port: 587, // Or 465 for secure SSL connection
    secure: false, // Use SSL if port 465 is used
    auth: {
      user: process.env.EMAIL_USER,  // Your email address
      pass: process.env.EMAIL_PASS,  // Your email password
    },
  });
  
  export const sender = {
    email: process.env.EMAIL_USER,  // Email from which emails will be sent
    name: "Oatly",
  };
  
  export { transporter };