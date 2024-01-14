import { Navbar, Nav } from "react-bootstrap";
import NavStyle from "./Navbar.module.css"

function HomeNavbar() {
    return (
        <Navbar expand={true} className={NavStyle.homeNavbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={NavStyle.homeNavbarToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}>
                        Resume
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.linkedin.com/in/anthonyfreay"
                        className={NavStyle.homeNavItem}>
                        LinkedIn
                    </Nav.Link>
                    <Nav.Link
                        href="https://github.com/anthonyfreay"
                        className={NavStyle.homeNavItem}>
                        GitHub
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default HomeNavbar;
