import { transporter, sender } from "./nodemailer.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTamplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const mailOptions = {
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    };

    // Log mail options to ensure data is correct
    // console.log("Sending email with options:", mailOptions);

    const response = await transporter.sendMail(mailOptions);
    // console.log("Email sent successfully:", response);
  } catch (error) {
    // More detailed logging of error
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const mailOptions = {
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Welcome to the Oatly",
      html: `<div style="font-family: sans-serif;">
	<p style="font-size:22px;">Welcome, ${name}!</p>
	<p style="font-size:22px;">We're glad to have you onboard!</p>
	<div >
		<img
			src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/36_Welcome%20Email%20Templates.jpg?width=595&height=400&name=36_Welcome%20Email%20Templates.jpg"
			style="height: 250px;"
			alt=""
		/>
	</div>
</div>

`,
    };

    const response = await transporter.sendMail(mailOptions);
    // console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.log("Error sending welcome email:", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const mailOptions = {
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    };

    const response = await transporter.sendMail(mailOptions);
    // console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset email:", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessfullEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const mailOptions = {
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    };

    const response = await transporter.sendMail(mailOptions);
    // console.log("Password reset successful email sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset success email:", error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
