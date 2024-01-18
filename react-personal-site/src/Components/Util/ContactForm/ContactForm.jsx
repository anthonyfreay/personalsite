import React, { useRef, useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactFormStyle from './ContactForm.module.css';

const ContactForm = () => {
    const [formKey, setFormKey] = useState(Date.now());
    const [showThankYou, setShowThankYou] = useState(false);
    const [state, handleSubmit] = useForm("xdowepna");
    const formRef = useRef();

    useEffect(() => {
        if (state.succeeded) {
            setShowThankYou(true);
            formRef.current.reset();
            setFormKey(Date.now());
        }
    }, [state.succeeded]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
    };

    return (
        <form key={formKey} ref={formRef} className={ContactFormStyle.contactForm} onSubmit={handleOnSubmit}>
            <input className={ContactFormStyle.name} id="fname" type="text" name="fname" placeholder="First Name*" required />
            <ValidationError field="fname" prefix="First Name" errors={state.errors} />

            <input className={ContactFormStyle.name} id="lname" type="text" name="lname" placeholder="Last Name*" required />
            <ValidationError field="lname" prefix="Last Name" errors={state.errors} />

            <input className={ContactFormStyle.email} type="email" name="_replyto" placeholder="Email*" required />
            <ValidationError field="_replyto" prefix="Email" errors={state.errors} />

            <input className={ContactFormStyle.subject} type="text" name="_subject" placeholder="Subject*" required />
            <ValidationError field="_subject" prefix="Subject" errors={state.errors} />

            <textarea className={ContactFormStyle.body} name="message" placeholder="Scope of Work*" required></textarea>
            <ValidationError field="message" prefix="Message" errors={state.errors} />

            <label htmlFor="check" className={ContactFormStyle.terms}>
                Terms of Service*
                <span className={ContactFormStyle.terms}>
                    I understand this form is for professional inquiries only.
                </span>
            </label>

            <select className={ContactFormStyle.terms} name="check" required>
                <option value="">Select</option>
                <option value="Yes">Yes, I understand</option>
            </select>

            <button type="submit" className={ContactFormStyle.submit} disabled={state.submitting}>Submit</button>

            {showThankYou && (
                <p className={`${ContactFormStyle.thankYouMessage} ${showThankYou ? ContactFormStyle['thankYouMessage-active'] : ''}`}>
                    Thanks for reaching out! <br />Please refresh to send a new message.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
