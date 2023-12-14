// pages/api/auth/forgot-password.js
import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Verify if the email exists in your database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      // Generate a reset token and store it in the database
      const resetToken = generateResetToken();
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          resetToken,
          resetTokenExpires: new Date(new Date().getTime() + 60 * 60 * 1000), // Token expires in 1 hour
        },
      });

      // Send an email with the reset link
      const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${resetToken}`;
      sendResetEmail(email, resetLink);

      res.status(200).json({ message: "Password reset email sent." });
    } else {
      res.status(400).json({ error: "Email not found." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}

async function sendResetEmail(email, resetLink) {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: false, // set to true if your server requires SSL/TLS
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Password Reset",
      text: `Click the following link to reset your password: ${resetLink}`,
      html: `<p>Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw new Error("Error sending password reset email");
    }
  }
