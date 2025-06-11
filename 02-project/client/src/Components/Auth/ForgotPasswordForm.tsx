import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

type ForgotPasswordFormProps = {
  onSwitchToLogin: () => void;
  onSuccess: () => void;
};

export default function ForgotPasswordForm({ onSwitchToLogin, onSuccess }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address (e.g., user@example.com)');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent. Please check your inbox (and spam folder).');
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No user found with this email address');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format');
          break;
        case 'auth/too-many-requests':
          setError('Too many requests. Please try again later.');
          break;
        default:
          setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-sm space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {success}
        </div>
      )}

      <p className="text-white">Enter your email address and we'll send you a link to reset your password.</p>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email (e.g., user@example.com)"
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          title="Please enter a valid email address (e.g., user@example.com)"
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full font-bold py-2 px-4 bg-blue-900 rounded focus:outline-none hover:bg-blue-800 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </div>

      <div className="text-center text-sm text-white">
        Remember your password?{' '}
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