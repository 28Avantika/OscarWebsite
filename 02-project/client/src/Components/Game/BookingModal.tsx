// BookingModal.tsx
import { useState } from "react";
import SlotSelection from "./SlotSelection";
import PlayerForm from "./PlayerForm";
import BookingSummary from "./BookingSummary";
import { saveBookingToFirestore } from "./bookingUtils";

const BookingModal = ({ isOpen, closeModal, game }: any) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    game: game || "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    players: [""],
    phone: "",
    total: 0,
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleConfirm = async () => {
    const result = await saveBookingToFirestore(bookingData);
    if (!result.success) return alert(result.reason);

    const msg = `🎮 Booking Details\nGame: ${bookingData.game}\nDate: ${bookingData.date}\nTime Slot: ${bookingData.time}\nPlayers:\n${bookingData.players.map((p, i) => `${i + 1}. ${p}`).join("\n")}\nTotal: ₹${bookingData.total}`;
    window.location.href = `https://wa.me/9226547545?text=${encodeURIComponent(msg)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-lg">
        {step === 1 && (
          <SlotSelection 
          bookingData={bookingData} 
          setBookingData={setBookingData} 
          onNext={handleNext} />
        )}
        {step === 2 && (
          <PlayerForm 
          bookingData={bookingData} 
          setBookingData={setBookingData} 
          onBack={handleBack} 
          onNext={handleNext} />
        )}
        {step === 3 && (
          <BookingSummary 
          bookingData={bookingData} 
          onBack={handleBack} 
          onConfirm={handleConfirm} />
        )}
        <button 
        className="mt-4 text-sm text-red-500" 
        onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
