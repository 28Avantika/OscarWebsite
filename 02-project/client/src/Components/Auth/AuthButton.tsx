// client/src/components/Auth/AuthButton.tsx
import { useState } from 'react';
import { type User, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthModal from './AuthModal';

type AuthButtonProps = {
  user: User | null;
};

export default function AuthButton({ user }: AuthButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Failed to logout:', err);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="text-l font-medium hover:text-shadow-[0_0_8px_#5bb2c6] font-['Roboto'] flex items-center gap-1"
            title="Logout"
          >
            <img 
            src="/images/userIcon.png" 
            alt="Login" 
            className="w-8 h-8 rounded-full hover:bg-white"
            />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-l font-medium hover:text-shadow-[0_0_8px_#5bb2c6] font-['Roboto'] sm:align-items: center flex items-center gap-1"
          title="Login"
        >
        <img 
        src="/images/userIcon.png" 
        alt=""
        className="w-8 h-8 rounded-full hover:bg-white" />     
        </button>
      )}

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}