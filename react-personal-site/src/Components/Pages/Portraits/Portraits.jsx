import React from 'react'
import Navbar from '../../Util/Navbar/Navbar'
import PortraitsStyle from "./Portraits.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Portraits = () => {
    const imageData = [
        { alt: "Em in Williamsburg", src: "portraits/DSC01179-Edit-portrait.jpg" },
        { alt: "Kal looking over a fire escape", src: "portraits/DSC06349-portrait.jpg" },
        { alt: "Dajee in Grand Central", src: "portraits/A7207181-portrait.jpg" },
        { alt: "Arize in Studio", src: "portraits/A7201581-Edit-portrait.jpg" },
        { alt: "Richard in his favorite green shirt", src: "portraits/A7204813-Edit-portrait.jpg" },
        { alt: "Jenn in an alley", src: "portraits/A7209214-Edit-portrait.jpg" },
        { alt: "Natalie & Hannah shoulder on shoulder", src: "portraits/DSC02343-Edit-portrait.jpg" },
        { alt: "Em in Bryant Park", src: "portraits/DSC00436-Edit-portrait.jpg" },
        { alt: "Ben over the Gorge in New Mexico", src: "portraits/DSC07716-Edit-portrait.jpg" },
        { alt: "Dajee at Untermyer Gardens", src: "portraits/A7205925-portrait.jpg" },
        { alt: "Beth on a morning walk", src: "portraits/A7204948-Edit-portrait.jpg" },
        { alt: "Camille in Studio", src: "portraits/A7201742-Edit-portrait.jpg" }
    ];

    return (
        <div className={PortraitsStyle.container}>
            <Navbar className={PortraitsStyle.navBar} />
            <div className={PortraitsStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PortraitsStyle.footer} activePage={"portraits"} />
        </div>
    );
};

export default Portraits;
