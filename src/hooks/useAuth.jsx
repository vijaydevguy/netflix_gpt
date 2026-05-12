import { useState } from "react";
import {
  signUpUser,
  signInUser,
  logoutUser,
  updateUserProfile,
} from "../services/authService";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState(null);

  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      setErr(null);
      const userDetail = await signUpUser(email, password);
      await updateUserProfile(userDetail, name);
      setUser(userDetail);
      setErr(null);
      toast.success("Signed up successfully");
      return userDetail;
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        setErr("This email is already registered.");
      } else if (errorCode === "auth/weak-password") {
        setErr("Password should be at least 6 characters.");
      } else {
        setErr(error.message);
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signin = async (email, password) => {
    try {
      setLoading(true);
      setErr(null);
      const userDetail = await signInUser(email, password);
      setUser(userDetail);
      setErr(null);
      toast.success("Signed in successfully");
      return userDetail;
    } catch (error) {
      if (error.code == "auth/invalid-credential") {
        setErr("User not found or invalid credentials");
      } else {
        setErr(error.message);
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      toast.error("Logout successfully");
    } catch (error) {
      setErr(error.message);
    }
  };

  const clearError = () => setErr(null);

  return { signup, signin, logout, user, loading, err, clearError };
};
