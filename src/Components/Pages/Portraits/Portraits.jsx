import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import PortraitsStyle from "./Portraits.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Portraits = () => {
    const imageData = [
        { alt: "Em in Williamsburg", src: "portraits/DSC01179-Edit-portrait.jpg" },
        { alt: "Kal looking over a fire escape", src: "portraits/DSC06349-portrait.jpg" },
        { alt: "Dajee at Untermyer Gardens", src: "portraits/A7205925-portrait.jpg" },
        { alt: "Natalie Freay celebrating her enagement", src: "portraits/A7404306-portrait.jpg" },
        { alt: "Dajee in Grand Central", src: "portraits/A7207181-portrait.jpg" },
        { alt: "Arize in Studio", src: "portraits/A7201581-Edit-portrait.jpg" },
        { alt: "Dajee at the MET Cloisters", src: "portraits/A7205508-HDR-Edit-portrait.jpg" },
        { alt: "Camille in Studio", src: "portraits/A7201742-Edit-portrait.jpg" },
        { alt: "Em in Bryant Park", src: "portraits/DSC00436-Edit-portrait.jpg" },
        { alt: "Richard in his favorite green shirt", src: "portraits/A7204813-Edit-portrait.jpg" },
        { alt: "Jenn in an alley", src: "portraits/A7209214-Edit-portrait.jpg" },
        { alt: "Natalie & Hannah shoulder on shoulder", src: "portraits/DSC02343-Edit-portrait.jpg" },
        // EVENTS
        // { alt: "Theresa Larre celebrating her birthday", src: "portraits/A7207607-portrait.jpg" },
        // { alt: "RENAME", src: "portraits/A7401037-portrait.jpg" },
        // { alt: "RENAME", src: "portraits/A7401217-portrait.jpg" },
        // { alt: "RENAME", src: "portraits/RX701171-portrait.jpg" },
        // { alt: "RENAME", src: "portraits/A7401031-portrait.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={PortraitsStyle.container}>
            <PageHeader title="Portraits | Anthony Freay" />
            <Navbar className={PortraitsStyle.navBar} />
            <div className={PortraitsStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PortraitsStyle.footer} activePage={"portraits"} />
        </div>
    );
};

export default Portraits;
