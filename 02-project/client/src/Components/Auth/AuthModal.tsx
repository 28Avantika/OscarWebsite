import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialAuthType?: 'login' | 'signup' | 'forgot';
};

export default function AuthModal({ isOpen, onClose, initialAuthType = 'login' }: AuthModalProps) {
  const [authType, setAuthType] = useState<'login' | 'signup' | 'forgot'>(initialAuthType);
  const [emailForLinking, setEmailForLinking] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) setAuthType(initialAuthType);
  }, [isOpen, initialAuthType]);

  if (!isOpen) return null;

  const titles = {
    login: 'Login',
    signup: 'Sign Up',
    forgot: 'Reset Password'
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg m-6 p-4 w-full max-w-md border-b border-t border-l border-r border-yellow-200 Overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <p className="text-center text-yellow-200 text-2xl font-bold">{titles[authType]}</p>
          <button
            onClick={onClose}
            className="text-yellow-200 hover:font-bold text-xl"
          >
            ✕
          </button>
        </div>

        {authType === 'login' ? (
          <LoginForm 
            onSwitchToSignup={() => setAuthType('signup')}
            onForgotPassword={() => setAuthType('forgot')}
            onSuccessLogin={onClose}
            emailForLinking={emailForLinking}
            setEmailForLinking={setEmailForLinking}
          />
        ) : authType === 'signup' ? (
          <SignupForm 
            onSwitchToLogin={() => setAuthType('login')}
            onSuccessSignup={onClose}
          />
        ) : (
          <ForgotPasswordForm 
            onSwitchToLogin={() => setAuthType('login')}
            onSuccess={onClose}
          />
        )}
      </div>
    </div>
  );
}