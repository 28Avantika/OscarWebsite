import React from "react";
import Modal from "react-bootstrap/esm/Modal";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  game: string | null;
};

const BookingModal: React.FC<Props> = ({ isOpen, closeModal, game }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bg-[#111] border border-purple-600 text-white p-6 rounded-xl w-96 mx-auto mt-24"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">Book {game}</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 mb-4 rounded text-black"
      />
      <input
        type="datetime-local"
        className="w-full p-2 mb-4 rounded text-black"
      />
      <button
        onClick={closeModal}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800 transition-all"
      >
        Confirm Booking
      </button>
    </Modal>
  );
};

export default BookingModal;
