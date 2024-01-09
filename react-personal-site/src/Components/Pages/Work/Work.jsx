import React from 'react'
import Navbar from '../../Util/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Util/Footer/Footer'
import WorkStyle from "./Work.module.css"
import liveCoverImage from './live_cover.jpg';
import portraitCoverImage from './portrait_cover.jpg';
import posterCoverImage from './poster_cover.jpg';
import apparelCoverImage from './apparel_cover.jpg';
import bwCoverImage from './bw_cover.jpg';

const Work = () => {
    return (
        <div className={WorkStyle.container}>
            <Navbar className={WorkStyle.navBar} activePage="work" />
            <div className={WorkStyle.mainContent}>
                <Link to="/live" className={WorkStyle.coverImage}>
                    <figure>
                        <img alt="" src={liveCoverImage} width="40%" height="" className={WorkStyle.liveCoverImage} />
                        <figcaption>live</figcaption>
                    </figure>
                </Link>
                <Link to="/portraits" className={WorkStyle.coverImage}>
                    <figure>
                        <img alt="" src={portraitCoverImage} width="40%" height="" className={WorkStyle.portraitCoverImage} />
                        <figcaption>portraits</figcaption>
                    </figure>
                </Link>
                <Link to="/bw" className={WorkStyle.coverImage}>
                    <figure>
                        <img alt="" src={bwCoverImage} width="40%" height="" className={WorkStyle.bwCoverImage} />
                        <figcaption>b&w</figcaption>
                    </figure>
                </Link>
                <Link to="/posters" className={WorkStyle.coverImage}>
                    <figure>
                        <img alt="" src={posterCoverImage} width="40%" height="" className={WorkStyle.posterCoverImage} />
                        <figcaption>posters</figcaption>
                    </figure>
                </Link>
                <Link to="/apparel" className={WorkStyle.coverImage}>
                    <figure>
                        <img alt="" src={apparelCoverImage} width="40%" height="" className={WorkStyle.apparelCoverImage} />
                        <figcaption>apparel</figcaption>
                    </figure>
                </Link>
            </div >
            <Footer className={WorkStyle.footer} />
        </div >
    );
};

export default Work;