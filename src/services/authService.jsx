import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(`signup failed ${error.message}`);
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(userCredential, "apiUserDetail");
    return user;
  } catch (error) {
    console.log(`signin failed ${error.message}`);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return "Sign out successfully";
  } catch (error) {
    console.log(error, "failed to signout");
    throw error;
  }
};
