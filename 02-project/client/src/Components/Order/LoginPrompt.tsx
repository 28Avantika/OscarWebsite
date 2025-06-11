import React from 'react';
interface LoginPromptProps {
    open: boolean;
    onClose: () => void;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Overlay with slight amber tint */}
            <div
                className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal container with custom glow */}
            <div className="flex min-h-screen items-center justify-center p-4 text-center">
                <div
                    className="relative transform overflow-hidden rounded-lg bg-black text-left transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    style={{
                        boxShadow: '0 0 20px #fbbf24aa',
                        border: '1px solid rgba(251, 191, 36, 0.3)'
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-2 top-2 rounded-full p-1 text-amber-400 hover:bg-amber-400/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    {/* Modal content */}
                    <div className="px-6 py-8">
                        <div className="text-center">
                            {/* Glowing amber icon */}
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100/10 ring-2 ring-amber-400/50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-amber-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Title with amber accent */}
                            <h3 className="mt-4 text-2xl font-bold text-amber-400">
                                Login Required
                            </h3>

                            {/* Description */}
                            <div className="mt-4">
                                <p className="text-gray-300">
                                    You need to be logged in to complete your purchase. Sign in to continue.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LoginPrompt;