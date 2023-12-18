import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavbar from '../../Util/Navbar/HomeNavbar'
import "./Home.css"
import Footer from '../../Util/Footer/Footer';


const Home = () => {
    return (
        <div className='main'>
            <div className="overlay">
                <HomeNavbar className="home-nav-bar" />
                <div className="content">
                    <h1 className='brand-logo'><Link to="/">Anthony Freay</Link></h1>
                    <Link to="/work" className='enter-button-text'><button className='enter-button'>
                        Enter</button></Link>
                    <Footer className="footer" />
                </div>
            </div>
        </div>
    );
};

export default Home;