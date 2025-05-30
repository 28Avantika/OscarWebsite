// client/src/components/Auth/SignupForm.tsx
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,signInWithGoogle  } from '../../firebase';

type SignupFormProps = {
  onSwitchToLogin: () => void;
};

export default function SignupForm({ onSwitchToLogin }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Signup successful - the auth state listener will handle the redirect
    } catch (err) {
      setError('Failed to create account. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

   const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError('');

    try {
      await signInWithGoogle();
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
      console.error(err);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="text-sm space-y-4">
      {error && (
         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
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

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <p className="px-2 text-white-500">Or sign up with email</p>
        </div>
      </div>
      

      <div>
        <label htmlFor="email" className="block text-m font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-m font-medium text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          required
          minLength={6}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-m font-medium text-white">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder='Re-type password'
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          required
          minLength={6}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#d9dc32] hover:bg-amber-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>
      </div>

      <div className="text-center text-sm">
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-white-600 hover:text-amber-400"
        >
          Already have an account? Login
        </button>
      </div>
    </form>
  );
}