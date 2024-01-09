import React from 'react'
import Navbar from '../../Util/Navbar/Navbar'
import LiveStyle from "./Live.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Live = () => {
    const imageData = [
        { alt: "Tyler, the Creator", src: "/live/DSC05584-music.jpg" },
        { alt: "Anik Khan", src: "/live/A7206554-music.jpg" },
        { alt: "Daniel Caesar", src: "/live/DSC02184-music.jpg" },
        { alt: "bulow", src: "/live/DSC06457-music.jpg" },
        { alt: "Lauv", src: "/live/DSC06611-music.jpg" },
        { alt: "bulow band", src: "/live/DSC06469-music.jpg" },
        { alt: "Lauv", src: "/live/DSC06849-Edit-music.jpg" },
        { alt: "Tai Verdes", src: "/live/RX708483-music.jpg" },
        { alt: "WowGr8", src: "/live/RX703010-music.jpg" },
        { alt: "Jaden Smith", src: "/live/DSC04170-music.jpg" },
        { alt: "New Politics", src: "/live/DSC02629-music.jpg" },
        { alt: "Mick Jenkins", src: "/live/RX702246-music.jpg" },
        { alt: "Jack Harlow", src: "/live/DSC08431-Edit-music.jpg" },
        { alt: "Olu", src: "/live/RX702447-music.jpg" },
        { alt: "Alexander23", src: "/live/A7207787-music.jpg" },
        { alt: "X Lovers", src: "/live/A7207540-music.jpg" },
        { alt: "Chelsea Cutler", src: "/live/A7208496-music.jpg" },
        { alt: "Sango", src: "/live/A7206805-music.jpg" },
        { alt: "Olu", src: "/live/RX703590-music.jpg" },
        { alt: "Nicki Minaj", src: "/live/RX709090-music.jpg" }
    ];


    return (
        <div className={LiveStyle.container}>
            <Navbar className={LiveStyle.navBar} />
            <div className={LiveStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={LiveStyle.footer} />
        </div>
    );
};

export default Live;
