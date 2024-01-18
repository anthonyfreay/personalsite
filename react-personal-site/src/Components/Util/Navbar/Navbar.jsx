import { Navbar, Nav } from "react-bootstrap";
import NavStyle from "./Navbar.module.css";

function NavBar({ activePage }) {
    return (
        <Navbar expand="lg" className={NavStyle.navbar}>
            <Navbar.Brand href="/" className={NavStyle.navBrand}>Anthony Freay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${NavStyle.navContainer} ml-auto`}>
                    <Nav.Link
                        href="/work"
                        className={`${NavStyle.navItem} ${activePage === 'work' ? NavStyle.activeNavLink : ''}`}
                    >
                        Work
                    </Nav.Link>
                    <a
                        href="https://anthonyfreay.darkroom.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.navItem}
                    >
                        Prints
                    </a>
                    <Nav.Link
                        href="/contact"
                        className={`${NavStyle.navItem} ${activePage === 'contact' ? NavStyle.activeNavLink : ''}`}
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
