import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import ReactGA from 'react-ga4';
import NavStyle from "./Navbar.module.css"

function HomeNavbar() {
    const trackResumeClick = () => {
        ReactGA.event({
            category: "Resume",
            action: "click",
            label: "Resume Download"
        });
        console.log("Resume click tracked");
    };

    return (
        <Navbar expand={true} className={NavStyle.homeNavbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={NavStyle.homeNavbarToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <a
                        href="/resume-anthony_freay-f2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}
                        onClick={trackResumeClick}>
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anthonyfreay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/anthonyfreay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NavStyle.homeNavItem}>
                        GitHub
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default HomeNavbar;
