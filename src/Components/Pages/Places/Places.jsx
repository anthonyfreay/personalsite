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
        { alt: "Coney Island Rollercoaster", src: "places/RX706719-color.jpg" },
        { alt: "Charlseton", src: "places/A7406615-scapes.jpg" },

        { alt: "Queens", src: "places/A7202338-scapes.jpg" },
        { alt: "Galapagos Summer", src: "places/A7401731-Enhanced-NR-color.jpg" },
        { alt: "Multnomah Falls", src: "places/A7204120-scapes.jpg" },
        { alt: "San Francisco Summer", src: "places/A7205351-color.jpg" },

        { alt: "Catskills Lake", src: "places/A7206286-scapes.jpg" },
        { alt: "Ice Rink", src: "places/A7202369-scapes.jpg" },
        { alt: "Paradise", src: "places/A7407416-scapes.jpg" },
        { alt: "Columbus Circle on a Rainy Weekday", src: "places/DSC09254-scapes.jpg" },

        { alt: "Pigeon Guillemot on Oregon Coast", src: "places/A7204896-scapes.jpg" },
        { alt: "City Stacks", src: "places/A7202361-scapes.jpg" },
        { alt: "Aruba Sun", src: "places/A7407216-scapes.jpg" },
        { alt: "JETski", src: "places/A7407477-scapes.jpg" },

        { alt: "Retirement Home", src: "places/A7204568-HDR-scapes.jpg" },
        { alt: "San Francisco street sign", src: "places/A7205014-color.jpg" },
        { alt: "Teleferico Quito", src: "places/RX703340-scapes.jpg" },
        { alt: "Sitting in the Sun", src: "places/A7407441-scapes.jpg" },

        { alt: "Muir Woods", src: "places/A7205161-color.jpg" },
        { alt: "San Francisco Sunset", src: "places/A7205308-color.jpg" },
        { alt: "Kids in Galapagos", src: "places/A7401603-scapes.jpg" },
        { alt: "Pretty Oregon Coast line", src: "places/A7204601-HDR-scapes.jpg" },


        { alt: "Kids playing in the Sand", src: "places/A7407388-scapes.jpg" },
        { alt: "Sea Lions on the Oregon Coast", src: "places/A7204910-scapes.jpg" },
        { alt: "Garret Mountain Basketball Court", src: "places/A7209983-Edit-scapes.jpg" },
        { alt: "Volcano in Ecuador", src: "places/A7402155-HDR-scapes.jpg" },

        { alt: "Simon Bolivar Park", src: "places/RX702078-scapes.jpg" },
        { alt: "Venice Beach", src: "places/A7405346-color.jpg" },
        { alt: "Eclipse", src: "places/RX706102-scapes.jpg" },
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
