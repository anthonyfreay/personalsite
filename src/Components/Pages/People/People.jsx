import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import PeopleStyle from "./People.module.css"
import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import Footer from '../../Util/Footer/Footer'


const People = () => {
    const imageData = [
        { alt: "Em in Williamsburg", src: "people/DSC01179-Edit-portrait.jpg" },
        { alt: "Kal looking over a fire escape", src: "people/DSC06349-portrait.jpg" },
        { alt: "Natalie Freay celebrating her enagement", src: "people/A7404306-portrait.jpg" },
        { alt: "Dajee at Untermyer Gardens", src: "people/A7205925-portrait.jpg" },
        { alt: "Dajee in Grand Central", src: "people/A7207181-portrait.jpg" },
        { alt: "Arize in Studio", src: "people/A7201581-Edit-portrait.jpg" },
        { alt: "Dajee at the MET Cloisters", src: "people/A7205508-HDR-Edit-portrait.jpg" },
        { alt: "Camille in Studio", src: "people/A7201742-Edit-portrait.jpg" },
        { alt: "Richard in his favorite green shirt", src: "people/A7204813-Edit-portrait.jpg" },
        { alt: "Em in Bryant Park", src: "people/DSC00436-Edit-portrait.jpg" },
        { alt: "Jenn in an alley", src: "people/A7209214-Edit-portrait.jpg" },
        { alt: "Michael", src: "people/A7404298-portrait.jpg" },
        { alt: "Ben over Rio Grande", src: "people/DSC07716-Edit-portrait.jpg" },
        { alt: "Natalie at Liberty State Park", src: "people/A7200334-portrait.jpg" }
    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={PeopleStyle.container}>
            <PageHeader title="People | Anthony Freay" />
            <Navbar className={PeopleStyle.navBar} />
            <div className={PeopleStyle.mainContent}>
                <ImageGallery images={imageData} />
            </div>
            <Footer className={PeopleStyle.footer} activePage={"people"} />
        </div>
    );
};

export default People;
