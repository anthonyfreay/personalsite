import React from 'react'
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar'
import CarsStyle from "./Cars.module.css"
// import ImageGallery from '../../Util/ImageGallery/ImageGallery';
import MasonryImageGallery from '../../Util/MasonryImageGallery/MasonryImageGallery';
import Footer from '../../Util/Footer/Footer'


const Cars = () => {
    const imageData = [
        { alt: "", src: "cars/A7200461-color.jpg" },
        { alt: "", src: "cars/A7200465-color.jpg" },
        { alt: "", src: "cars/DSC04341-bw.jpg" },
        { alt: "", src: "cars/A7406721-bw.jpg" },
        { alt: "", src: "cars/A7405676-color.jpg" },
        { alt: "", src: "cars/A7200477-color.jpg" },
        { alt: "", src: "cars/A7405672-bw.jpg" },
        { alt: "", src: "cars/A7200475-color.jpg" },
        { alt: "", src: "cars/A7200462-color.jpg" },
        { alt: "", src: "cars/A7406726-bw.jpg" },
        { alt: "", src: "cars/A7200488-color.jpg" },
        { alt: "", src: "cars/A7406734-color.jpg" },
        { alt: "", src: "cars/A7406716-bw.jpg" },
        { alt: "", src: "cars/A7406778-color.jpg" },
        { alt: "", src: "cars/A7206342-color.jpg" },
        { alt: "", src: "cars/A7406717-bw.jpg" },
        { alt: "", src: "cars/A7406517-Enhanced-NR-color.jpg" },
        { alt: "", src: "cars/A7204618-color.jpg" },
        { alt: "", src: "cars/A7209958-color.jpg" },

    ].map(image => ({
        ...image,
        hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
    }));

    return (
        <div className={CarsStyle.container}>
            <PageHeader title="Cars | Anthony Freay" />
            <Navbar className={CarsStyle.navBar} />
            <div className={CarsStyle.mainContent}>
                <MasonryImageGallery images={imageData} />
            </div>
            <Footer className={CarsStyle.footer} activePage={"cars"} />
        </div>
    );
};

export default Cars;
