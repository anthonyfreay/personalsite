import React from 'react';
import { FaRegEnvelope, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className="container footer" id="footer">
            <div className="icons">
                <a href="mailto:anthonyfreay@gmail.com" aria-label="Email" className='icon'>
                    <FaRegEnvelope size={35} />
                </a>
                <a href="https://www.instagram.com/anthonyfreay" aria-label="Visit Instagram Profile" className='icon'>
                    <FaInstagram size={35} />
                </a>
                <a href="https://www.pinterest.com/anthonybfreay" aria-label="View Pinterest Board" className='icon'>
                    <FaPinterest size={35} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
