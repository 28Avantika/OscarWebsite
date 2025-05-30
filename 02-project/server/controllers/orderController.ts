// server/src/controllers/orderController.ts
import { adminDb } from "../firebaseAdmin";

export const createOrder = async (userId: string, orderData: any) => {
  const orderRef = adminDb.collection(`users/${userId}/orders`).doc();
  await orderRef.set({
    ...orderData,
    status: "pending",
    createdAt: new Date().toISOString()
  });
  return orderRef.id;
};

export const getDailyOrders = async (date: string) => {
  const snapshot = await adminDb.collection(`dailyOrders/${date}/orders`).get();
  return snapshot.docs.map(doc => doc.data());
};