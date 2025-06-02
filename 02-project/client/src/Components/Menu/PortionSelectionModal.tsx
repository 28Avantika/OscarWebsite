// src/Components/Menu/PortionSelectionModal.tsx
interface PortionSelectionModalProps {
  isOpen: boolean;
  itemName: string;
  fullPrice: string;
  halfPrice: string;
  onSelect: (portion: 'half' | 'full') => void;
  onClose: () => void;
}

export default function PortionSelectionModal({
  isOpen,
  itemName,
  fullPrice,
  halfPrice,
  onSelect,
  onClose
}: PortionSelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 m-3 flex items-center justify-center z-50">
      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '0.5rem',
          padding: '1rem',
          boxShadow: 'rgba(235, 177, 41, 0.84) 2.4px 2.4px 3.2px',
          }}
        className="bg-black rounded-lg p-6 max-w-sm w-full">
        <h4 className="mb-4 m-3">{itemName}</h4>

        <div className="space-y-3">
          <button
            onClick={() => onSelect('half')}
            className="w-full py-2 px-4 text-yellow-200  flex hover:border-l hover:border-orange-200 justify-between"
          >
            <h6 className="">Half </h6>
            <h6 className="font-medium">₹{halfPrice}</h6>
          </button>

          <button
            onClick={() => onSelect('full')}
            className="w-full py-2 px-4 flex text-yellow-200 hover:border-l hover:border-orange-200 justify-between"
          >
            <h6>Full </h6>
            <h6 className="font-medium">₹{fullPrice}</h6>
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 font-bold  bg-red-900 rounded hover:bg-red-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}