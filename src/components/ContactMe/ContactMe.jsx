import React from 'react'
import './ContactMe.css';
import img10 from './img10.svg'
import img11 from './img11.svg'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
    return (
        <section id="Cont" className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1}}>
                   <a> <ContactInfoCard
                    icon={img11}
                    text="prakhar.pratham2022@vitstudent.ac.in"
                    /></a>
                    <a href="https://github.com/Prakharx24"><ContactInfoCard
                    icon={img10}
                    text="My Github"
                    style={{ color: 'yellow' }}
                    /></a>
                </div>
            <div style={{ flex: 1}}>
                <ContactForm />
            </div>                      
            </div>
        </section>
    );
};
export default ContactMe;