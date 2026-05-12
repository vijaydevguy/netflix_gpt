import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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

export const updateUserProfile = async (user, name, photoUrl) => {
  try {
    // const res = await updateProfile(auth.currentUser, {
    const res = await updateProfile(user, {
      displayName: name,
      photoURL:
        "https://i.pinimg.com/736x/49/0e/00/490e00bfd16e9e4cc83a0d8b36ac1bce.jpg",
    });
    return "Profile Updated Successfully";
  } catch (error) {
    throw error;
  }
};
