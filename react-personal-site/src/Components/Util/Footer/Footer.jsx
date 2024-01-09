import React from 'react';
import FooterStyles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Icons from '../Icons/Icons';


function Footer() {
    return (
        <div className={`${FooterStyles.footer} ${FooterStyles.container}`} id={FooterStyles.footer}>
            <div className={FooterStyles.pageSection}>
                <Link to="/live" className={FooterStyles.pages} >live</Link>
                <Link to="/portraits" className={FooterStyles.pages}>portraits</Link>
                <Link to="/bw" className={FooterStyles.pages} >b&w</Link>
                <Link to="/posters" className={FooterStyles.pages}>posters</Link>
                <Link to="/apparel" className={FooterStyles.pages}>apparel</Link>
                <Link to="/contact" className={FooterStyles.pages}>contact</Link>
            </div>
            <Icons className={FooterStyles.icons} iconSize={30} />
            <p className={FooterStyles.copyright}>copyright © all rights reserved.</p>
        </div >
    );
}

export default Footer;
