import React from 'react';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Util/Footer/Footer';
import WorkStyle from "./Work.module.css";

const categories = [
    { path: '/live', image: "covers/live_cover.jpg", label: 'Live' },
    { path: '/bw', image: "covers/bw_cover.jpg", label: 'B & W' },
    { path: '/portraits', image: "covers/portrait_cover.jpg", label: 'Portraits' },
    { path: '/posters', image: "covers/poster_cover.jpg", label: 'Posters' },
    { path: '/apparel', image: "covers/apparel_cover.jpg", label: 'Apparel' }
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
            <PageHeader title="Work | Anthony Freay" />
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
