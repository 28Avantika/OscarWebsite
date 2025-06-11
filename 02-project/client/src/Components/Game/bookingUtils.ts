// // bookingUtils.ts
// import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../.././firebase";

// export async function isSlotAlreadyBooked(game: string, date: string, time: string) {
//   const q = query(
//     collection(db, "bookings"),
//     where("game", "==", game),
//     where("date", "==", date),
//     where("time", "==", time)
//   );
//   const snapshot = await getDocs(q);
//   return !snapshot.empty;
// }

// export async function saveBookingToFirestore(bookingData: any) {
//   const alreadyBooked = await isSlotAlreadyBooked(bookingData.game, bookingData.date, bookingData.time);
//   if (alreadyBooked) return { success: false, reason: "Slot already booked." };

//   try {
//     await addDoc(collection(db, "bookings"), {
//       ...bookingData,
//       timestamp: serverTimestamp()
//     });
//     return { success: true };
//   } catch (err) {
//     console.error("Error saving booking:", err);
//     return { success: false, reason: "Firestore error." };
//   }
// }
