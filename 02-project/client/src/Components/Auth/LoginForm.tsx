import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle, EmailAuthProvider, linkWithCredential } from '../../firebase';
import { auth } from "../.././firebase";
type LoginFormProps = {
  onSwitchToSignup: () => void;
  onForgotPassword: () => void;
  onSuccessLogin: () => void;
  emailForLinking: string | null;
  setEmailForLinking: (email: string | null) => void;
};

export default function LoginForm({
  onSwitchToSignup,
  onForgotPassword,
  onSuccessLogin,
  emailForLinking,
  setEmailForLinking
}: LoginFormProps) {
  const [email, setEmail] = useState(emailForLinking || '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      onSuccessLogin();
    } catch (err: any) {
      if (auth.currentUser) {
        return;
      }
      if (err.code) {
        switch (err.code) {
          case 'auth/invalid-email':
            setError('Invalid email address format');
            break;
          case 'auth/user-disabled':
            setError('Account disabled. Please contact support.');
            break;
          case 'auth/user-not-found':
            setError('No account found with this email');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password. Please try again.');
            break;
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Account temporarily locked. Try again later or reset your password.');
            break;
          case 'auth/account-exists-with-different-credential':
            setEmailForLinking(err.customData?.email || email);
            setError('This email is already registered with Google. Please login with your password to link accounts.');
            break;
          default:
            if (!auth.currentUser) setError('Failed to login. Please try again.');
        }
      }

    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError('');

    try {
      if (emailForLinking) {
        // Handle account linking
        const credential = EmailAuthProvider.credential(emailForLinking, password);
        await linkWithCredential(auth.currentUser!, credential);
        setEmailForLinking(null);
        setError('');
        onSuccessLogin();
      } else {
        await signInWithGoogle();
        setError('');
        onSuccessLogin();
      }
    } catch (err: any) {
      if (auth.currentUser) {
        return;
      }
      if (err.code) {
        switch (err.code) {
          case 'auth/credential-already-in-use':
            setError('This account is already linked to another user.');
            break;
          case 'auth/email-already-in-use':
            setError('This email is already registered with a different method.');
            break;
          default:
            setError('Failed to sign in with Google. Please try again.');
        }
      }

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
          className="w-full flex items-center bg-green-800 justify-center gap-2 text-white rounded-md shadow-sm py-2 px-4 focus:outline-none hover:bg-green-700 transition-colors"
        >
          {isGoogleLoading ? 'Signing in...' : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              {emailForLinking ? 'Link Google Account' : 'Sign in with Google'}
            </>
          )}
        </button>
      </div>

      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-black text-white relative z-10">Or continue with</span>
        <div className="absolute top-1/2 left-0 right-0 border-t border-yellow-200 -z-0"></div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder='Enter Email (e.g., user@example.com)'
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          title="Please enter a valid email address (e.g., user@example.com)"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input
          type="password"
          id="password"
          placeholder='Enter password (min 6 characters)'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full bg-black text-white border border-yellow-200 rounded p-2 focus:outline-none focus:ring-1 focus:ring-yellow-200"
          required
          minLength={6}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-yellow-200 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full font-bold py-2 px-4 bg-blue-900 rounded focus:outline-none hover:bg-blue-800 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      <div className="text-center text-sm text-white">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-yellow-200 hover:underline"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}