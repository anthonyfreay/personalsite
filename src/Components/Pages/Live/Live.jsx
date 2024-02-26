import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import LiveStyle from "./Live.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Live = () => {
    const imageData = [
        { alt: "Tyler, the Creator", src: "/live/DSC05584-music.jpg" },
        { alt: "Anik Khan", src: "/live/A7206554-music.jpg" },
        { alt: "Daniel Caesar", src: "/live/DSC02184-music.jpg" },
        { alt: "Alexa Porat", src: "/live/A7400207-Edit-music.jpg" },
        { alt: "Cautious Clay", src: "/live/RX704864-music.jpg" },
        { alt: "J Balvin", src: "/live/RX709066-Edit-music.jpg" },
        { alt: "Lizzie McAlpine", src: "/live/RX704131-music.jpg" },
        { alt: "Gracie Abrams", src: "/live/RX701806-music.jpg" },
        { alt: "Gracie Abrams", src: "/live/RX701741-Enhanced-NR-music.jpg" },
        // { alt: "Lauv", src: "/live/DSC06849-Edit-music.jpg" },
        { alt: "Tiffany Day", src: "/live/A7400474-music.jpg" },
        { alt: "Tai Verdes", src: "/live/RX708483-music.jpg" },
        { alt: "Cautious Clay", src: "/live/RX704917-music.jpg" },
        { alt: "Alexa Porat", src: "/live/A7400244-music.jpg" },
        { alt: "WowGr8", src: "/live/RX703010-Enhanced-NR-Edit-music.jpg" },
        // { alt: "Lizie McAlpine", src: "/live/RX704049-Enhanced-NR-Edit-music.jpg" },
        { alt: "Jaden Smith", src: "/live/DSC04170-music.jpg" },
        { alt: "New Politics", src: "/live/DSC02629-music.jpg" },
        { alt: "Gracie Abrams", src: "/live/RX704104-Edit-2-music.jpg" },
        { alt: "Jack Harlow", src: "/live/DSC08431-Edit-music.jpg" },
        { alt: "Olu", src: "/live/RX702447-music.jpg" },
        { alt: "Alexander23", src: "/live/A7207787-music.jpg" },
        { alt: "X Lovers", src: "/live/A7207540-music.jpg" },
        { alt: "Chelsea Cutler", src: "/live/A7208496-music.jpg" },
        { alt: "Sango", src: "/live/A7206805-music.jpg" },
        { alt: "Lizzie McAlpine", src: "/live/RX704229-Enhanced-NR-Edit-music.jpg" },
        { alt: "Lauv", src: "/live/DSC06611-music.jpg" },
        { alt: "Olu", src: "/live/RX703590-music.jpg" },
        { alt: "Nicki Minaj", src: "/live/RX709090-music.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));


    return (
        <div className={LiveStyle.container}>
            <PageHeader title="Live | Anthony Freay" />
            <Navbar className={LiveStyle.navBar} />
            <div className={LiveStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={LiveStyle.footer} activePage={"live"} />
        </div>
    );
};

export default Live;
