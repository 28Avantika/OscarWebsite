import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import AuthButton from "./Auth/AuthButton";
import { useAuth } from "../context/AuthContext";
import "../index.css";

function NavBarComp() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current route location

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { user } = useAuth();

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

    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <Navbar
            expand="lg"
            className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
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
                        <Nav.Link as={Link} to="/" className="text-lg italic text-white p-0 m-0 leading-none">
                            CAFE & GAME ZONE
                        </Nav.Link>
                    </div>
                </Nav>

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
                        <Nav.Link 
                            as={Link} 
                            to="/insights" 
                            className={`neon-link ${isActive("/insights") ? "active-nav-link" : ""}`}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/menu" 
                            className={`neon-link ${isActive("/menu") ? "active-nav-link" : ""}`}
                        >
                            Menu
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/games" 
                            className={`neon-link ${isActive("/games") ? "active-nav-link" : ""}`}
                        >
                            Gaming
                        </Nav.Link>
                        <Nav.Link
                            onClick={handleContactClick}
                            className={`neon-link ${location.hash === "#contact-section" ? "active-nav-link" : ""}`}
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