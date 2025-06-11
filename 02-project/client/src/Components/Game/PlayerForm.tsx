// import { useState } from "react";

// const PlayerForm = ({ bookingData, setBookingData, onBack, onNext }: any) => {
//   const [name, setName] = useState(bookingData.players[0] || "");
//   const [phone, setPhone] = useState(bookingData.phone);
//   const [extraPlayers, setExtraPlayers] = useState<string[]>([]);

//   const maxPlayers = bookingData.game === "Snooker" ? 4 : bookingData.game === "8 BALL POOL" ? 2 : 2;
//   const rate = bookingData.game === "Snooker" ? 200 : 100;

//   const handleSubmit = () => {
//     const players = [name, ...extraPlayers.filter(Boolean)].slice(0, maxPlayers);
//     const total = rate * players.length;
//     setBookingData({ ...bookingData, players, phone, total });
//     onNext();
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">Player Info</h2>
//       <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
//       <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />
//       {[...Array(maxPlayers - 1)].map((_, i) => (
//         <input
//           key={i}
//           placeholder={`Player ${i + 2}`}
//           value={extraPlayers[i] || ""}
//           onChange={(e) => {
//             const newPlayers = [...extraPlayers];
//             newPlayers[i] = e.target.value;
//             setExtraPlayers(newPlayers);
//           }}
//           className="input"
//         />
//       ))}
//       <div className="flex justify-between mt-4">
//         <button onClick={onBack} className="text-sm text-gray-500">Back</button>
//         <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">Next</button>
//       </div>
//     </div>
//   );
// };

// export default PlayerForm;