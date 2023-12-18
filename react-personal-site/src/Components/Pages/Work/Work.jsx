import React from 'react'
import Navbar from '../../Util/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Util/Footer/Footer'
import WorkStyle from "./Work.module.css"

const Work = () => {
    return (
        <div>
            <Navbar />
            <h1>WORK LANDING PAGE</h1>
            <button className='enter-button'><Link to="/live">Live</Link></button>
            <button className='enter-button'><Link to="/portraits">Portraits</Link></button>
            <button className='enter-button'><Link to="/posters">Posters</Link></button>
            <button className='enter-button'><Link to="/apparel">Apparel</Link></button>
            <button className='enter-button'><Link to="/bw">Black n White</Link></button>
            <Footer className={WorkStyle.footer} />
        </div>
    );
};

export default Work;