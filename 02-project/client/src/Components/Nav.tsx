import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import AuthButton from "./Auth/AuthButton";
import { useAuth } from "../context/AuthContext";
import "../index.css";
function NavBarComp() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { user } = useAuth();

    return (
        <Navbar
            expand="lg"
            className={` custom-navbar ${scrolled ? "scrolled" : ""}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="/">
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
                        <Nav.Link href="/" className="text-6xl font-extrabold text-white neon-link p-0 m-0 leading-none">
                            OSCAR
                        </Nav.Link>
                        <Nav.Link href="/" className="text-lg italic text-white neon-link p-0 m-0 leading-none">
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
                        
                        <Nav.Link
                            onClick={() => {
                                const section = document.getElementById("about-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="neon-link"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                const section = document.getElementById("zone-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="neon-link"
                        >
                        Menu
                        </Nav.Link><Nav.Link
                            onClick={() => {
                                const section = document.getElementById("zone-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="neon-link"
                        >
                        Games
                        </Nav.Link>
                        <Nav.Link href="/games" className="neon-link">Gaming</Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                const section = document.getElementById("gallary-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="neon-link"
                        >
                            Gallary
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => {
                                const section = document.getElementById("contact-section");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
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