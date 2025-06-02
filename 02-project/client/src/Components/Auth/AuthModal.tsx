// client/src/components/Auth/AuthModal.tsx
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg border-2 border-yellow-200 m-6 p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-l">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <button
            onClick={onClose}
            className="text-yellow-400 hover:text-yellow-200"
          >
            ✕
          </button>
        </div>

        {isLogin ? (
          <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}