import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"

function NavigationBar() {
    return (
        <Navbar expand="lg" classname="navbar">
            <Navbar.Brand href="#home">Anthony Freay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto nav-items" >
                    <Nav.Link href="#work" className="nav-items">work</Nav.Link>
                    <Nav.Link href="#about" className="nav-items">store</Nav.Link>
                    <Nav.Link href="#contact" className="nav-items">contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;