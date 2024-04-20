import React, { useEffect, useState } from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import EventsStyle from "./EventsStyle.module.css"
import MasonryImageGallery from '../../Util/MasonryImageGallery/MasonryImageGallery';
import Footer from '../../Util/Footer/Footer'

const Events = () => {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        const data = [
            { alt: "wide", src: "cars/A7405672-bw.jpg" },
            { alt: "", src: "cars/A7200477-color.jpg" },
            { alt: "wide", src: "cars/A7406517-Enhanced-NR-color.jpg" },
            { alt: "", src: "cars/A7200461-color.jpg" },
            { alt: "", src: "cars/A7406717-bw.jpg" },
            { alt: "", src: "cars/A7406716-bw.jpg" },
            { alt: "", src: "cars/A7200475-color.jpg" },
            { alt: "wide", src: "cars/A7405672-bw.jpg" },
            { alt: "", src: "cars/A7200477-color.jpg" },
            { alt: "wide", src: "cars/A7406517-Enhanced-NR-color.jpg" },
            { alt: "", src: "cars/A7200461-color.jpg" },
            { alt: "", src: "cars/A7406717-bw.jpg" },
            { alt: "", src: "cars/A7406716-bw.jpg" },
            { alt: "", src: "cars/A7200475-color.jpg" },
            { alt: "wide", src: "cars/A7405672-bw.jpg" },
            { alt: "", src: "cars/A7200477-color.jpg" },
            { alt: "wide", src: "cars/A7406517-Enhanced-NR-color.jpg" },
            { alt: "", src: "cars/A7200461-color.jpg" },
            { alt: "", src: "cars/A7406717-bw.jpg" },
            { alt: "", src: "cars/A7406716-bw.jpg" },
            { alt: "", src: "cars/A7200475-color.jpg" },
        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
        }));

        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }

        setImageData(data);
    }, []);

    return (
        <div className={EventsStyle.container}>
            <PageHeader title="Events | Anthony Freay" />
            <Navbar className={EventsStyle.navBar} />
            <div className={EventsStyle.mainContent}>
                <MasonryImageGallery images={imageData} />
            </div>
            <Footer className={EventsStyle.footer} activePage={"events"} />
        </div>
    );
};

export default Events;