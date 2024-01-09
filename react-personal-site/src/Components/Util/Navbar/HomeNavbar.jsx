import { Navbar, Nav } from "react-bootstrap";
import NavStyle from "./Navbar.module.css"

function HomeNavbar() {
    return (
        <Navbar expand={true} className={NavStyle.homeNavbar}>
            < Navbar.Toggle aria-controls="basic-navbar-nav" className={NavStyle.homeNavbarToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/work" className={NavStyle.homeNavItem}>Resume</Nav.Link>
                    <Nav.Link href="/store" className={NavStyle.homeNavItem}>LinkedIn</Nav.Link>
                    <Nav.Link href="/contact" className={NavStyle.homeNavItem}>GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}
export default HomeNavbar;