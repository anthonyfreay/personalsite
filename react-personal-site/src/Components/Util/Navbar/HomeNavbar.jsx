import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"

function HomeNavbar() {
    return (
        <Navbar expand={true} className="home-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="home-navbar-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/work" className="home-nav-item">Resume</Nav.Link>
                    <Nav.Link href="/store" className="home-nav-item">LinkedIn</Nav.Link>
                    <Nav.Link href="/contact" className="home-nav-item">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default HomeNavbar;