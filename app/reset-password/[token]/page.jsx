// pages/reset-password/[token].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const ResetPassword = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { token } = router.query;
  const [password, setPassword] = useState("");
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    // Add logic to verify the validity of the reset token
    // For example, send a request to your server to check if the token is valid
    const checkTokenValidity = async () => {
      const response = await fetch(`/api/auth/validate-reset-token?token=${token}`);
      const data = await response.json();

      if (data.valid) {
        setTokenValid(true);
      } else {
        // Redirect to an error page or handle invalid token
        router.push("/error");
      }
    };

    if (token) {
      checkTokenValidity();
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (!tokenValid) {
      // Token is not valid, handle error (e.g., redirect to an error page)
      return;
    }

    // Add logic to reset the password
    // For example, send a request to your server with the new password and the reset token
    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        password,
      }),
    });

    if (response.ok) {
      // Password reset successfully, you may want to redirect to the login page
      router.push("/login");
    } else {
      // Handle error (e.g., display an error message to the user)
      console.error("Error resetting password");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {tokenValid ? (
        <>
          <p>Enter your new password.</p>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      ) : (
        <p>Invalid or expired reset token. Please try again.</p>
      )}
    </div>
  );
};

export default ResetPassword;
