import { Navbar, Nav } from "react-bootstrap";
import NavStyle from "./Navbar.module.css";

function NavBar({ activePage }) {
    return (
        <Navbar expand="lg" className={NavStyle.navbar}>
            <Navbar.Brand href="/">Anthony Freay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${NavStyle.navContainer} ml-auto`}>
                    <Nav.Link
                        href="/work"
                        className={`${NavStyle.navItem} ${activePage === 'work' ? NavStyle.activeNavLink : ''}`}
                    >
                        work
                    </Nav.Link>
                    <Nav.Link
                        href="https://anthonyfreay.darkroom.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${NavStyle.navItem} ${activePage === 'store' ? NavStyle.activeNavLink : ''}`}
                    >
                        store
                    </Nav.Link>
                    <Nav.Link
                        href="/contact"
                        className={`${NavStyle.navItem} ${activePage === 'contact' ? NavStyle.activeNavLink : ''}`}
                    >
                        contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
