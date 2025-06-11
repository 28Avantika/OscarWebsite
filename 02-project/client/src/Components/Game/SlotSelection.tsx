// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const SlotSelection = ({ bookingData, setBookingData, onNext }: any) => {
//   const timeSlots = ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"];
  
//   // Date handling
//   const today = new Date();
//   const maxDate = new Date();
//   maxDate.setDate(today.getDate() + 3); // 3 days from today
  
//   const [selectedDate, setSelectedDate] = useState<Date | null>(today);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);

//   const handleDateChange = (date: Date | null) => {
//     setSelectedDate(date);
//     setSelectedTime(null); // Reset time when date changes
//     setBookingData({ ...bookingData, date: date, time: null });
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//     setBookingData({ ...bookingData, time });
//   };

//   const handleNext = () => {
//     if (!selectedDate || !selectedTime) {
//       alert("Please select both date and time");
//       return;
//     }
//     onNext();
//   };

//   // Filter out past times for today
//   const getAvailableSlots = () => {
//     if (!selectedDate || selectedDate.toDateString() !== today.toDateString()) {
//       return timeSlots;
//     }
    
//     const currentHour = today.getHours();
//     const currentMinute = today.getMinutes();
    
//     return timeSlots.filter(slot => {
//       const [time, period] = slot.split(' ');
//       const [hours, minutes] = time.split(':').map(Number);
//       const slotHour = period === 'PM' && hours !== 12 ? hours + 12 : hours;
      
//       return (
//         slotHour > currentHour || 
//         (slotHour === currentHour && minutes > currentMinute)
//       );
//     });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Select Date and Time</h2>
      
//       {/* Date Picker */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-2">Select Date</label>
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           minDate={today}
//           maxDate={maxDate}
//           className="border p-2 rounded w-full"
//           dateFormat="MMMM d, yyyy"
//           placeholderText="Select a date"
//         />
//       </div>
      
//       {/* Time Slots */}
//       {selectedDate && (
//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-2">Available Time Slots</label>
//           <div className="grid grid-cols-2 gap-2">
//             {getAvailableSlots().map((slot) => (
//               <button
//                 key={slot}
//                 className={`p-3 border rounded-md transition-colors ${
//                   selectedTime === slot
//                     ? "bg-blue-500 text-white"
//                     : "bg-white hover:bg-gray-100"
//                 }`}
//                 onClick={() => handleTimeSelect(slot)}
//               >
//                 {slot}
//               </button>
//             ))}
//           </div>
//           {getAvailableSlots().length === 0 && (
//             <p className="text-gray-500 mt-2">No available slots for this date</p>
//           )}
//         </div>
//       )}
      
//       <button
//         onClick={handleNext}
//         className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default SlotSelection;
