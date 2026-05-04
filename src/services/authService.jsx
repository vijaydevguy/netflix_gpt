import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const signUpUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    console.log(`signup failed ${error.message}`);
    throw error;
  }
};
