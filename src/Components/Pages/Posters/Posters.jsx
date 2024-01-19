import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import PostersStyle from "./Posters.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Posters = () => {
    const imageData = [
        { alt: "Poster inspired by Good Guy – Frank Ocean", src: "posters/like-you-look-mockup.jpg" },
        { alt: "Poster inspired by Off the Table – Ariana Grande, The Weeknd", src: "posters/off-the-table-mockup.jpg" },
        { alt: "Poster inspired by the HTBH Tour – Chelsea Cutler", src: "posters/htbh-poster.jpg" },
        { alt: "Poster inspired by Pears – Weston Estate", src: "posters/pears-mockup.jpg" },
        { alt: "Poster inspired by Down Bad slang", src: "posters/down-bad-mockup.jpg" },
        { alt: "Poster inspired by the Patagonia Outerwear", src: "posters/patagonia-mockup.jpg" },
        { alt: "Poster inspired by the My Future - Billie Eilish", src: "posters/my-future-mockup.jpg" },
        { alt: "Poster inspired by Good Days – SZA", src: "posters/GOOD-DAYS-mockup.jpg" },
        { alt: "Poster inspired by Adidas Samba", src: "posters/samba-mockup.jpg" },
        { alt: "Poster inspired by Waves of Blue - Majid Jordan", src: "posters/wob-mockup.jpg" },
        { alt: "Poster inspired by Motive – Arian Grande, Doja Cat", src: "posters/motive-mockup.jpg" },
        { alt: "Poster inspired by political decisions made by men on women's autonomy", src: "posters/menSTFU-mockup.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));


    return (
        <div className={PostersStyle.container}>
            <PageHeader title="Posters | Anthony Freay" />
            <Navbar className={PostersStyle.navBar} />
            <div className={PostersStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PostersStyle.footer} activePage={"posters"} />
        </div>
    );
};

export default Posters;
