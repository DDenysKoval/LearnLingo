import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "./firebase.ts"

export const doCreateUserWithEmailAndPassword = async(email:string, password:string) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const googleProvider = new GoogleAuthProvider();

export const doSignInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  // result.user
  return result;
}

export const doSignOut = () => {
  return auth.signOut()
}