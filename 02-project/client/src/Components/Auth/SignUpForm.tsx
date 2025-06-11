import { useState } from 'react';
import { signUpWithEmail, signInWithGoogle, auth } from '../../firebase';

type SignupFormProps = {
  onSwitchToLogin: () => void;
  onSuccessSignup: () => void;
};

export default function SignupForm({ onSwitchToLogin, onSuccessSignup }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Form submitted");

    e.preventDefault();

    //Validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address (e.g., user@example.com)');
      return;
    }

    if (phone && !validatePhone(phone)) {
      setError('Phone number must be 10 digits (e.g., 1234567890)');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await signUpWithEmail(email, password, name, phone);
      onSuccessSignup();
    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Email already in use. Please login instead.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Use at least 6 characters.');
          break;
        case 'auth/operation-not-allowed':
          setError('Email/password accounts are not enabled');
          break;
        default:
          setError('Failed to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError('');

    try {
      await signInWithGoogle();
      setError('');
      onSuccessSignup();


    } catch (err: any) {
      if (auth.currentUser) {
        return;
      }
      if (err.code) {
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            setError('This email is already registered with a different method.');
            break;
          case 'auth/popup-closed-by-user':
            setError('Sign in was cancelled');
            break;
          default:
            if (!auth.currentUser) setError('Failed to sign in with Google. Please try again.');

        }
      }

    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-sm space-y-4">
      {error?.trim() && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}


      <div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="w-full flex items-center justify-center gap-2 bg-green-800 rounded py-2 px-4 text-sm text-white focus:outline-none hover:bg-green-700 transition-colors"
        >
          {isGoogleLoading ? (
            'Signing up...'
          ) : (
            <>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Sign up with Google
            </>
          )}
        </button>
      </div>

      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-black text-white relative z-10">Or sign up with email</span>
        <div className="absolute top-1/2 left-0 right-0 border-t border-yellow-200 -z-0"></div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email *
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email (e.g., user@example.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          title="Please enter a valid email address (e.g., user@example.com)"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter 10-digit number (e.g., 1234567890)"
          value={phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
            setPhone(value);
          }}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          pattern="\d{10}"
          title="Please enter a 10-digit phone number (e.g., 1234567890)"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">
          Password *
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          minLength={6}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
          Confirm Password *
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Re-type your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          minLength={6}
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full font-bold py-2 px-4 bg-blue-900 rounded focus:outline-none hover:bg-blue-800 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>
      </div>

      <div className="text-center text-sm text-white">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-yellow-200 hover:underline"
        >
          Login
        </button>
      </div>
    </form>
  );
}