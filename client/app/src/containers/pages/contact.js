import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import './style.css'

const Contact = () => {
    return (
        <div className="contact"> <br/>
            <span className="icon"> <b> CONTACT </b> </span> <br /> <br />
            <span className="icon-txt"><b>Contact Us </b> </span> <br />
            <span className="text">
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita
            at voluptas atque vitae autem. <br /> <br /></span>
            <div className="mail-contact-msg">
                <div className="mail-contact">
                <div className="mail">
                    <AiOutlineMail size={30} /> <br /> <span className="mail-txt"> <b> Email Us </b> <br /> contact@gmail.com</span>
                </div>
                <br />
                <div className="mail">
                    <FiPhoneCall size={30} /> <br /> <span className="mail-txt"> <b> Call Us </b> <br /> +91-987654321 </span>
                </div>
                <div className="message">
                    <input className="msg-holder" type="text" placeholder="Your Name" />
                    <input className="msg-holder" type="email" placeholder="Your Email " /> <br /> 
                    <input className="msg-holder-s" type="text" placeholder="Subject"/> <br/>
                    <input className="msg-holder-m" type="text" placeholder="Message"/> <br/> <br/> 
                    <button className="send-button"> Send Message </button>
                </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Contact;
