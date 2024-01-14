import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactFormStyle from './ContactForm.module.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdowepna");

    return (
        <form className={ContactFormStyle.contactForm} onSubmit={handleSubmit}>
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

            {state.succeeded && (
                <p className={`${ContactFormStyle.thankYouMessage} ${state.succeeded ? ContactFormStyle['thankYouMessage-active'] : ''}`}>
                    Thanks for your message!
                </p>
            )}
        </form>
    );
};

export default ContactForm;
