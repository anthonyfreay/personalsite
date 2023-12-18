import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="/">Anthony Freay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav-items">
                    <Nav.Link href="/work" className="nav-item">Work</Nav.Link>
                    <Nav.Link href="/store" className="nav-item">Store</Nav.Link>
                    <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;