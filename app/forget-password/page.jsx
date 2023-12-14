'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ForgotPassword = () => {
  const router = useRouter();
  const { data: session } = useSession();
 
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    // Send a request to your server to handle the password reset logic
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      router.push("/");
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
