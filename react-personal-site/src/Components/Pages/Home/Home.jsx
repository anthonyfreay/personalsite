import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavbar from '../../Util/Navbar/HomeNavbar'
import HomeStyle from './Home.module.css';
import Footer from '../../Util/Footer/Footer';


const Home = () => {
    return (
        <div className={HomeStyle.main}>
            <div className={HomeStyle.overlay}>
                <HomeNavbar className={HomeStyle.homeNavBar} />
                <div className={HomeStyle.content}>
                    <h1 className={HomeStyle.brandLogo}><Link to="/">Anthony Freay</Link></h1>
                    <Link to="/work" className={HomeStyle.enterButtonText}><button className={HomeStyle.enterButton}>
                        Enter</button></Link>
                    <Footer className={HomeStyle.footer} />
                </div>
            </div>
        </div>
    );
};

export default Home;