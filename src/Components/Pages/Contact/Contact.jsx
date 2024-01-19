import React from 'react';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar';
import Footer from '../../Util/Footer/Footer';
import ContactForm from '../../Util/ContactForm/ContactForm';
import ContactStyle from './ContactStyle.module.css';

const Contact = () => {
    return (
        <div className={ContactStyle.container}>
            <PageHeader title="Contact | Anthony Freay" />
            <Navbar activePage={'contact'} />
            <div className={ContactStyle.mainContent}>
                <div className={ContactStyle.bioContainer}>
                    <div className={ContactStyle.bioImage}>
                        <img src="/me/anthonyfreay-bw.jpg" alt="Anthony Freay" className={ContactStyle.profileImage} />
                    </div>
                    <div className={ContactStyle.bioDescription}>
                        <p className={ContactStyle.intro}>
                            <b>Anthony Freay</b> (he/they) is a <b>New York-based</b> multifaceted Creative, specializing in: <br /><b>software engineering, photo, and design.</b>
                        </p>

                        <p className={ContactStyle.ethos}>Anthony's work ethos focuses on collaboration and attention to detail to create authentic and clean imagery.</p>

                        <p className={ContactStyle.location}>
                            Anthony is currently booking. For professional inquiries, please use the form below or reach out directly via email.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer activePage={"contact"} />
        </div>
    );
};

export default Contact;
