import React from "react";

const FooterSec: React.FC = () => {
  // Navigation handler
  const handleNavigation = (path: string) => {
    window.location.pathname = path; // This will navigate to the new path
  };

  // Contact handlers
  const handlePhoneClick = () => {
    window.location.href = "tel:+919762837188";
  };

  return (
    <footer className="bg-black text-white font-roboto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#d9dc32] tracking-tight">
              OSCAR<br />CAFE & GAME ZONE
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your one-stop spot to chill, sip, and play. We offer the perfect blend of 
              delicious food, refreshing drinks, and exciting gaming experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#d9dc32]">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <button 
                onClick={() => handleNavigation('/insights')}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left w-full"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/menu')}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left w-full"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavigation('/games')}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left w-full"
              >
                Gaming
              </button>
              <button 
                onClick={() => handleNavigation('/gallery')}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left w-full"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left w-full"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#d9dc32]">
              Contact Us
            </h3>
            <address className="not-italic text-gray-200 text-sm leading-relaxed">
              Oscar Food Park, Laxmi Chowk,<br />
              Near Yash Wines, Opp. to Sairat Biryani,<br />
              Phase 1, Hinjewadi, Pune - 411057
            </address>
            <div className="space-y-1">
              <button 
                onClick={handlePhoneClick}
                className="block text-gray-400 hover:text-[#d9dc32] transition duration-300 text-left"
              >
                +91 9762837188
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oscar Cafe & Game Zone. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Designed with ❤️ for gamers and food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;