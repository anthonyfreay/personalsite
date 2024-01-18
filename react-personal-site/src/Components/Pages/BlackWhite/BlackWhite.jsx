import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import BlackWhiteStyle from "./BlackWhite.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const BlackWhite = () => {
    const imageData = [
        { alt: "Tyler, the Creator", src: "bw/DSC05585-bw.jpg" },
        { alt: "Daniel Caesar", src: "bw/DSC01930-bw.jpg" },
        { alt: "Alone in the parking lot", src: "bw/A7208874-bw.jpg" },
        { alt: "Exhausted", src: "bw/DSC01524-bw.jpg" },
        { alt: "NYC", src: "bw/DSC07973-bw.jpg" },
        { alt: "J Balvin", src: "bw/RX709059-Edit-bw.jpg" },
        { alt: "Chelsea Cutler", src: "bw/A7208259-Edit-bw.jpg" },
        { alt: "Jack Harlow", src: "bw/DSC08655-bw.jpg" },
        { alt: "10th Ave", src: "bw/DSC01358-bw.jpg" },
        { alt: "Over-looked", src: "bw/DSC01515-bw.jpg" },
        { alt: "Saron Crenshaw", src: "bw/A7207520-bw.jpg" },
        { alt: "Defund the Police", src: "bw/DSC02466-bw.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={BlackWhiteStyle.container}>
            <PageHeader title="Black & White | Anthony Freay" />
            <Navbar className={BlackWhiteStyle.navBar} />
            <div className={BlackWhiteStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={BlackWhiteStyle.footer} activePage={"bw"} />
        </div>
    );
};

export default BlackWhite;
