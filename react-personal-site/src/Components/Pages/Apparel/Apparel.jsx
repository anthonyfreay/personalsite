import React from 'react'
import Navbar from '../../Util/Navbar/Navbar'
import ApparelStyle from "./Apparel.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Apparel = () => {
    const imageData = [
        { alt: "Inspired by Brent Faiyaz", src: "apparel/lost-kids_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Frank Ocean", src: "apparel/TEARS_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by brent ii", src: "apparel/EMILY_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Good Days", src: "apparel/WAR-IN-My-MIND_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Sweet Life", src: "apparel/SWEET-LIFE_TSHIRT_MOCKUP.jpg" },
        { alt: "Inspired by Fun Girl", src: "apparel/FUN-GIRL_TSHIRT_MOCKUP.jpg" }
    ];

    return (
        <div className={ApparelStyle.container}>
            <Navbar className={ApparelStyle.navBar} />
            <div className={ApparelStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={ApparelStyle.footer} activePage={"apparel"} />
        </div>
    );
};

export default Apparel;
