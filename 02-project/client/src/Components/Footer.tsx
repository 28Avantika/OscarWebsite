import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const FooterSec: React.FC = () => {
  // Contact handlers
  const handlePhoneClick = () => {
    window.location.href = "tel:+919762837188";
  };

  const navigate = useNavigate();

  const handleContactClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      {/* ScrollToTop will trigger on route change */}
      <ScrollToTop />

      <footer className="bg-black border-t border-gray-400  text-white font-roboto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <h2 className="fontStyle text-3xl font-bold text-[#d9dc32] tracking-tight">
                OSCAR<br />
                <div className="inline italic"> CAFE & GAME ZONE</div>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your one-stop spot to chill, sip, and play. We offer the perfect blend of
                delicious food, refreshing drinks, and exciting gaming experiences.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className=" fontStyle text-lg font-bold uppercase tracking-wider ">
                Quick Links
              </h3>
              <nav className="space-y-2 items-center justify-center">
                <Nav.Link
                  as={Link}
                  to="/insights"
                  className="block text-gray-400 hover:text-yellow-200 transition duration-300 text-left w-full"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/menu"
                  className="block text-gray-400 hover:text-yellow-200 transition duration-300 text-left w-full"
                >
                  Menu
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/games"
                  className="block text-gray-400 hover:text-yellow-200 transition duration-300 text-left w-full"
                >
                  Gaming
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/gallery"
                  className="block text-gray-400 hover:text-yellow-200 transition duration-300 text-left w-full"
                >
                  Gallery
                </Nav.Link> */}
                <Nav.Link
                  onClick={handleContactClick}
                  eventKey="contact"
                  className={`${location.hash === "#contact-section" ? "active-nav-link" : ""}`}
                >
                Contact
                </Nav.Link>
              </nav>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h3 className=" fontStyle text-lg font-bold uppercase tracking-wider text-[#d9dc32]">
                Contact Us
              </h3>
              <address className="not-italic hover:text-yellow-200 text-gray-400 text-sm leading-relaxed">
                Oscar Food Park, Laxmi Chowk,<br />
                Near Yash Wines, Opp. to Sairat Biryani,<br />
                Phase 1, Hinjewadi, Pune - 411057
              </address>
              <div className="space-y-1">
                <button
                  onClick={handlePhoneClick}
                  className="block text-gray-200 hover:text-yellow-200 transition duration-300 text-left"
                >
                  +91 9762837188
                </button>
              </div>
            </div>
          </div>

          <div className="fontStyle border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Oscar Cafe & Game Zone. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Designed with ❤️ for gamers and food lovers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSec;
