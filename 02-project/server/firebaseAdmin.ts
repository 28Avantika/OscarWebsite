// server/src/firebaseAdmin.ts
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { ServiceAccount } from "firebase-admin/app";

initializeApp({
  credential: cert(serviceAccount)
});

export const adminDb = getFirestore();