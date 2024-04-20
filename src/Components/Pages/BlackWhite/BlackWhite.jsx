import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import BlackWhiteStyle from "./BlackWhite.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const BlackWhite = () => {
    const imageData = [
        { alt: "Tyler, the Creator", src: "bw/DSC05585-bw.jpg" },
        { alt: "City from on High", src: "bw/A7202360-bw.jpg" },
        { alt: "Exhausted", src: "bw/DSC01524-bw.jpg" },
        { alt: "Chrysler Building", src: "bw/A7202339-bw.jpg" },
        { alt: "Goldlink", src: "bw/DSC02678-bw.jpg" },
        { alt: "10th Ave", src: "bw/DSC01358-bw.jpg" },
        { alt: "Empire State Building", src: "bw/A7202347-bw.jpg" },
        { alt: "Defund the Police", src: "bw/DSC02466-bw.jpg" },
        { alt: "Daniel Caesar", src: "bw/DSC01930-bw.jpg" },
        { alt: "Biking", src: "bw/A7406794-bw.jpg" },
        { alt: "Gently Trash in NYC", src: "bw/A7406787-bw.jpg" },
        { alt: "Jack Harlow", src: "bw/DSC08655-bw.jpg" },
        { alt: "Save the kids", src: "bw/DSC07973-bw.jpg" },
        { alt: "J Balvin", src: "bw/RX709059-Edit-bw.jpg" },
        { alt: "Over-looked", src: "bw/DSC01515-bw.jpg" },
        { alt: "Saron Crenshaw", src: "bw/A7207520-bw.jpg" },
        { alt: "Arize in Brooklyn", src: "bw/A7201582-Edit-portrait.jpg" },
        { alt: "Chelsea Cutler", src: "bw/A7208259-Edit-bw.jpg" },
        { alt: "Ice in my Veins", src: "bw/DSC02743-bw.jpg" },
        { alt: "Taxi Driver", src: "bw/DSC08988-bw.jpg" },
        { alt: "Harbour along Oregon Coast", src: "bw/A7204510-bw.jpg" },
        { alt: "Scary reflection in a window of an Oregon house", src: "bw/A7204635-bw.jpg" },
        { alt: "Skating sideways", src: "bw/A7405342-bw.jpg" },
        { alt: "Crash landing", src: "bw/A7405350-bw.jpg" },
        { alt: "Mexico City Square", src: "bw/A7406217-bw.jpg" },
        { alt: "Family on a Motorcycle", src: "bw/RX702300-bw.jpg" },
        { alt: "Alone in the parking lot", src: "bw/A7208874-bw.jpg" }
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
