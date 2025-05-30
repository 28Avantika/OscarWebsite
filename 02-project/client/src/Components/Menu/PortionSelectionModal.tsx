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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-xl mb-4">{itemName}</h3>
        
        <div className="space-y-3">
          <button
            onClick={() => onSelect('half')}
            className="w-full py-2 px-4 border border-amber-500 text-amber-600 rounded-md hover:bg-amber-50 flex justify-between"
          >
            <h6>Half </h6>
            <h6 className="font-medium">₹{halfPrice}</h6>
          </button>
          
          <button
            onClick={() => onSelect('full')}
            className="w-full py-2 px-4 border border-amber-500 text-amber-600 rounded-md hover:bg-amber-50 flex justify-between"
          >
            <h6>Full </h6>
            <h6 className="font-medium">₹{fullPrice}</h6>
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}