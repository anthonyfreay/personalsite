import React from 'react';
import FooterStyles from './Footer.module.css';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';

function Footer({ activePage }) {
    return (
        <div className={`${FooterStyles.footer} ${FooterStyles.container}`} id={FooterStyles.footer}>
            <div className={FooterStyles.pageSection}>
                <Link to="/live" className={`${FooterStyles.pages} ${activePage === 'live' ? FooterStyles.active : ''}`}>live</Link>
                <Link to="/portraits" className={`${FooterStyles.pages} ${activePage === 'portraits' ? FooterStyles.active : ''}`}>portraits</Link>
                <Link to="/bw" className={`${FooterStyles.pages} ${activePage === 'bw' ? FooterStyles.active : ''}`}>b&w</Link>
                <Link to="/posters" className={`${FooterStyles.pages} ${activePage === 'posters' ? FooterStyles.active : ''}`}>posters</Link>
                <Link to="/apparel" className={`${FooterStyles.pages} ${activePage === 'apparel' ? FooterStyles.active : ''}`}>apparel</Link>
                <Link to="/contact" className={`${FooterStyles.pages} ${activePage === 'contact' ? FooterStyles.active : ''}`}>contact</Link>
            </div>
            <Icons className={FooterStyles.icons} iconSize={30} />
            <p className={FooterStyles.copyright}>copyright © all rights reserved.</p>
        </div>
    );
}

export default Footer;
