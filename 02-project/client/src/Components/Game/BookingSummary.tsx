// const BookingSummary = ({ bookingData, onBack, onConfirm }: any) => (
//   <div>
//     <h2 className="text-xl font-bold mb-2">Confirm Your Booking</h2>
//     <p><strong>Game:</strong> {bookingData.game}</p>
//     <p><strong>Date:</strong> {bookingData.date}</p>
//     <p><strong>Time:</strong> {bookingData.time}</p>
//     <p><strong>Players:</strong></p>
//     <ul className="list-disc ml-5">
//       {bookingData.players.map((p: string, i: number) => (
//         <li key={i}>{p}</li>
//       ))}
//     </ul>
//     <p><strong>Total: ₹</strong> {bookingData.total}</p>
//     <div className="flex justify-between mt-4">
//       <button onClick={onBack} className="text-sm text-gray-500">Back</button>
//       <button onClick={onConfirm} className="bg-green-600 text-white px-4 py-2 rounded">Proceed to Pay</button>
//     </div>
//   </div>
// );

// export default BookingSummary;