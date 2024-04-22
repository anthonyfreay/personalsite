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
            { "alt": "", "src": "events/A7401031-color.jpg" },
            { "alt": "", "src": "events/A7206542-color.jpg" },
            { "alt": "", "src": "events/A7207607-color.jpg" },
            { "alt": "Shots", "src": "events/A7400993-color.jpg" },
            { "alt": "", "src": "events/A7207942-color.jpg" },
            { "alt": "", "src": "events/A7407621-color.jpg" },
            { "alt": "", "src": "events/A7206559-color.jpg" },
            { "alt": "", "src": "events/A7400937-color.jpg" },
            { "alt": "", "src": "events/A7208033-color.jpg" },
            { "alt": "", "src": "events/A7207884-color.jpg" },

            { "alt": "Cake", "src": "events/A7206529-color.jpg" },
            { "alt": "", "src": "events/A7208096-color.jpg" },
            { "alt": "", "src": "events/A7207973-color.jpg" },
            { "alt": "", "src": "events/A7407559-color.jpg" },

            { "alt": "", "src": "events/A7207913-color.jpg" },
            { "alt": "", "src": "events/A7400919-color.jpg" },
            { "alt": "Jill and Kendall", "src": "events/A7401130-color.jpg" },
            { "alt": "", "src": "events/A7206906-color.jpg" },
            { "alt": "Aperol Spritz", "src": "events/A7207907-color.jpg" },

            { "alt": "Mom, Cita, and Tio", "src": "events/A7206591-color.jpg" },
            { "alt": "Maddie Miller Bday Cake", "src": "events/A7407589-color.jpg" },
            { "alt": "", "src": "events/A7207983-color.jpg" },
            { "alt": "DJ Bolivar", "src": "events/A7206551-color.jpg" },

            { "alt": "", "src": "events/A7206528-color.jpg" },
            { "alt": "", "src": "events/A7400916-color.jpg" },
            { "alt": "", "src": "events/A7401049-color.jpg" },
            { "alt": "Cita", "src": "events/A7206564-color.jpg" },
            { "alt": "Abuela and Candeladia", "src": "events/A7206966-color.jpg" },

            { "alt": "", "src": "events/A7407714-color.jpg" },
            { "alt": "", "src": "events/A7401037-color.jpg" },
            { "alt": "", "src": "events/A7207859-color.jpg" },

            { "alt": "", "src": "events/A7400918-color.jpg" },
            { "alt": "", "src": "events/A7208176-color.jpg" },
            { "alt": "All The Way Down", "src": "events/A7207740-color.jpg" },
            { "alt": "", "src": "events/A7207716-color.jpg" },

            { "alt": "", "src": "events/A7207820-color.jpg" },
            { "alt": "", "src": "events/A7206535-color.jpg" },

            { "alt": "", "src": "events/A7206546-color.jpg" },
            { "alt": "", "src": "events/A7206604-Enhanced-NR-color.jpg" },
            { "alt": "", "src": "events/A7400963-color.jpg" },
            { "alt": "", "src": "events/A7401014-color.jpg" },
            { "alt": "", "src": "events/A7206574-color.jpg" },

            // Hannah's Grad Party
            { "alt": "", "src": "events/A7402521-color.jpg" },
            { "alt": "", "src": "events/A7402648-color.jpg" },
            { "alt": "", "src": "events/A7402526-color.jpg" },
            { "alt": "", "src": "events/A7402701-color.jpg" },
            { "alt": "", "src": "events/A7402659-color.jpg" },
            { "alt": "", "src": "events/A7402535-color.jpg" },
            { "alt": "", "src": "events/A7402541-color.jpg" },
            { "alt": "", "src": "events/A7402743-color.jpg" },


        ].map(image => ({
            ...image,
            hdSrc: image.src.replace(/(\.\w+)$/, '-hd$1') // Append '-hd' before the file extension
        }));

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