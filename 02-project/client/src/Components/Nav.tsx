import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added Link and useNavigate
import AuthButton from "./Auth/AuthButton";
import { useAuth } from "../context/AuthContext";
import "../index.css";

function NavBarComp() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // For programmatic navigation

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { user } = useAuth();

    const handleContactClick = () => {
        // Navigate to home first if not already there
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById("contact-section");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Small delay to allow page transition
        } else {
            const section = document.getElementById("contact-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <Navbar
            expand="lg"
            className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/"> {/* Changed href to as={Link} to="/" */}
                    <img
                        src="/images/OgLogo.png"
                        width="60"
                        height="70"
                        className="d-inline-block align-top"
                        alt="OSCAR Logo"
                    />
                </Navbar.Brand>

                <Nav className="ms-auto d-none d-lg-flex">
                    <div className="flex flex-col items-center text-center leading-tight">
                        <Nav.Link as={Link} to="/" className="text-6xl font-extrabold text-white neon-link p-0 m-0 leading-none">
                            OSCAR
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" className="text-lg italic text-white neon-link p-0 m-0 leading-none">
                            Cafe &amp; Game Zone
                        </Nav.Link>
                    </div>
                </Nav>

                {/* Custom toggler button */}
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    className="border-0 p-1"
                >
                    <img
                        src="/images/toggle.png"
                        alt="Menu"
                        className="h-8 w-10"
                    />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav" className="">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/insights" className="neon-link">About</Nav.Link>
                        <Nav.Link as={Link} to="/menu" className="neon-link">Menu</Nav.Link>
                        {/* <Nav.Link as={Link} to="/games" className="neon-link">Gaming</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/gallery" className="neon-link">Gallery</Nav.Link> */}
                        <Nav.Link
                            onClick={handleContactClick}
                            className="neon-link"
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link className="neon-link">
                            <AuthButton user={user} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;