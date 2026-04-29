import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export async function createUserProfile(user, displayName) {
  const profile = {
    email: user.email,
    displayName: displayName || user.displayName || "Player",
    gameCardUnlocked: true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(doc(db, "users", user.uid), profile, { merge: true });
  return profile;
}

export async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? snapshot.data() : null;
}