import { useState, useRef, useEffect } from 'react';
import { type User, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthModal from './AuthModal';

type AuthButtonProps = {
  user: User | null;
};

export default function AuthButton({ user }: AuthButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup' | 'forgot'>('login');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowLogoutModal(false);
    } catch (err) {
      console.error('Failed to logout:', err);
      alert('Logout failed. Please try again.');
    }
  };

  const openAuthModal = (type: 'login' | 'signup' | 'forgot') => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {user ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2"
            title="User Menu"
          >
            <img
              src={user.photoURL || "/images/userIcon.png"}
              alt="User"
              className="w-8 h-8 rounded-full object-cover hover:ring-2 ring-white"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/userIcon.png";
              }}
            />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-black border border-amber-500 rounded-lg z-50 text-white animate-fade-in">
              <div className="px-4 py-2 text-sm border-b border-amber-500 text-center font-semibold">
                {user.displayName || user.email?.split('@')[0]}
              </div>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  setShowLogoutModal(true);
                }}
                className="block w-full text-left px-4 py-2 text-center hover:bg-amber-500 hover:text-black transition duration-200 text-sm"
              > 
                Logout
              </button>
            </div>
          )}

          {/* Logout Confirmation Modal */}
          {showLogoutModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="bg-black border-b border-t border-l border-r  border-amber-500 text-white rounded-xl p-6 w-80 shadow-2xl text-center">
                <img 
                  src="/images/alert.png" 
                  alt="Confirm Logout" 
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h4 className="text-m font-semibold mb-4">Are you sure you want to logout?</h4>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => openAuthModal('login')}
          className="text-l font-medium font-['Roboto'] flex items-center gap-1"
          title="Login"
        >
          <img
            src="/images/userIcon.png"
            alt="Login"
            className="w-8 h-8 rounded-full hover:bg-white"
          />
        </button>
      )}

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAuthType={authType}
      />
    </>
  );
}
