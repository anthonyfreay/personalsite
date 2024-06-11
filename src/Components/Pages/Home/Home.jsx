import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavbar from '../../Util/Navbar/HomeNavbar'
import HomeStyle from './Home.module.css';
import Icons from '../../Util/Icons/Icons';


const Home = () => {
    return (
        <div className={HomeStyle.main}>
            <div className={HomeStyle.overlay}>
                <HomeNavbar className={HomeStyle.homeNavBar} />
                <div className={HomeStyle.content}>
                    <h1 className={HomeStyle.brandLogo}><Link to="/">Anthony Freay</Link></h1>
                    <Link to="/work" className={HomeStyle.enterButtonText}><button className={HomeStyle.enterButton}>
                        Enter</button></Link>
                    <Icons className={HomeStyle.icons} />
                </div>
            </div>
        </div>
    );
};

export default Home;