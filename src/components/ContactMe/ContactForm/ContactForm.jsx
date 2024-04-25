import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input type='text' name='firstname' placeholder='First Name' style={{ marginRight: '5px', width:"500px" }} />
                    <input type='text' name='lastname' placeholder='Last Name' style={{ marginLeft: '5px' }} />
                </div>
                <input type='text' name='email' placeholder='Email' style={{ marginBottom: '10px' }} />
                <textarea type='text' name='message' placeholder='Message' rows='3' style={{ marginBottom: '10px' }}></textarea>
                <button style={{ alignSelf: 'flex-end' }}>SEND</button>
            </form>


        </div>
    )
}
export default ContactForm;
