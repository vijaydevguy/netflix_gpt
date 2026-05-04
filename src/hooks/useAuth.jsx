import { useState } from "react";
import { signUpUser } from "../services/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState(null);

  const signup = async (email, password) => {
    try {
      setLoading(true);
      const userDetail = await signUpUser(email, password);
      setUser(userDetail);
      setErr(null);
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        setErr("This email is already registered.");
      } else if (errorCode === "auth/weak-password") {
        setErr("Password should be at least 6 characters.");
      } else {
        setErr(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { signup, user, loading, err };
};
