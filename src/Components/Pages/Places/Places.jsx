import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import PlacesStyle from "./Places.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const Places = () => {
    const imageData = [
        { alt: "Beams", src: "places/A7202190-scapes.jpg" },
        { alt: "Tree", src: "places/A7406558-scapes.jpg" },
        { alt: "Eclipse", src: "places/RX706102-scapes.jpg" },
        // { alt: "", src: "places/A7407228-scapes.jpg" },
        { alt: "Queens", src: "places/A7202338-scapes.jpg" },
        // { alt: "", src: "places/A7407286-scapes.jpg" },
        { alt: "City Stacks", src: "places/A7202361-scapes.jpg" },
        // { alt: "", src: "places/A7407357-scapes.jpg" },
        { alt: "Ice Rink", src: "places/A7202369-scapes.jpg" },
        { alt: "Kids playing", src: "places/A7407388-scapes.jpg" },
        // { alt: "", src: "places/A7405233-scapes.jpg" },
        { alt: "Paradise", src: "places/A7407416-scapes.jpg" },
        // { alt: "", src: "places/A7407417-scapes.jpg" },
        // { alt: "", src: "places/A7406556-Edit-scapes.jpg" },
        // { alt: "", src: "places/A7407432-scapes.jpg" },
        { alt: "Sitting in the Sun", src: "places/A7407441-scapes.jpg" },
        // { alt: "", src: "places/A7406572-scapes.jpg" },
        { alt: "Charlseton", src: "places/A7406615-scapes.jpg" },
        // { alt: "", src: "places/A7407519-scapes.jpg" },
        { alt: "JETski", src: "places/A7407477-scapes.jpg" },
        { alt: "Aruba Sun", src: "places/A7407216-scapes.jpg" },
        // { alt: "", src: "places/A7407224-scapes.jpg" }
        { alt: "Me n You", src: "places/A7406508-scapes.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={PlacesStyle.container}>
            <PageHeader title="Places | Anthony Freay" />
            <Navbar className={PlacesStyle.navBar} />
            <div className={PlacesStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PlacesStyle.footer} activePage={"places"} />
        </div>
    );
};

export default Places;
