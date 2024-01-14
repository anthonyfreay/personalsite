import React from 'react';
import Navbar from '../../Util/Navbar/Navbar';
import Footer from '../../Util/Footer/Footer';
import ContactForm from '../../Util/ContactForm/ContactForm';
import ContactStyle from './ContactStyle.module.css';

const Contact = () => {
    return (
        <div className={ContactStyle.container}>
            <Navbar activePage={'contact'} />
            <div className={ContactStyle.mainContent}>
                <div className={ContactStyle.bioContainer}>
                    <div className={ContactStyle.bioImage}>
                        <img src="/me/anthonyfreay-bw.jpg" alt="Anthony Freay" className={ContactStyle.profileImage} />
                    </div>
                    <div className={ContactStyle.bioDescription}>
                        <p className={ContactStyle.intro}>
                            Anthony Freay (he/they) is a software developer, photographer, and designer based out of New
                            York, NY.
                        </p>

                        <p className={ContactStyle.location}>
                            Anthony is currently booking. For professional inquiries, please reach out using the form below or via email directly.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
