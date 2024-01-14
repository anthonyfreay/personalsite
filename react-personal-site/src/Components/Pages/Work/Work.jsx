import React from 'react';
import Navbar from '../../Util/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Util/Footer/Footer';
import WorkStyle from "./Work.module.css";

const categories = [
    { path: '/live', image: "covers/live_cover.jpg", label: 'live' },
    { path: '/bw', image: "covers/bw_cover.jpg", label: 'b&w' },
    { path: '/portraits', image: "covers/portrait_cover.jpg", label: 'portraits' },
    { path: '/posters', image: "covers/poster_cover.jpg", label: 'posters' },
    { path: '/apparel', image: "covers/apparel_cover.jpg", label: 'apparel' }
];

const CategoryLink = ({ path, image, label }) => (
    <Link to={path} className={WorkStyle.coverImage}>
        <figure>
            <img alt={label} src={image} className={WorkStyle.coverImage} />
            <figcaption>{label}</figcaption>
        </figure>
    </Link>
);

const Work = () => {
    return (
        <div className={WorkStyle.container}>
            <Navbar className={WorkStyle.navBar} activePage="work" />
            <div className={WorkStyle.mainContent}>
                {categories.map((category) => (
                    <CategoryLink key={category.label} {...category} />
                ))}
            </div>
            <Footer className={WorkStyle.footer} />
        </div>
    );
};

export default Work;
