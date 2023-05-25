import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

export const Contact = () => {
    const mail = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_odw6nce", "template_ed43sjp", mail.current, "CD8A4dcJTq_IVhyI1").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        alert("Email Sent!");
        e.target.reset();
    };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy!</h3>
                    <p className="contact__description">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">161141denzel@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />
                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">+63 928 0004 689</h4>
                            </div>
                        </div>
                    </div>
                    <div className="contact__socials">
                        <a href="https://www.facebook.com/denzelnapili.animo/" target="_blank" rel="noopener, noreferrer" className="contact__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/coinci_denz/" target="_blank" rel="noopener, noreferrer" className="contact__social-link">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/channel/UCGPJkuKkHIE9O2aS1-_rx-A" target="_blank" rel="noopener, noreferrer" className="contact__social-link">
                            <FaYoutube />
                        </a>
                        <a href="https://github.com/CoinciDenz" target="_blank" rel="noopener, noreferrer" className="contact__social-link">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <form ref={mail} onSubmit={sendEmail} className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder="Your Name" className="form__control" name="user_name" />
                        </div>
                        <div className="form__input-div">
                            <input type="email" placeholder="Your Email" className="form__control" name="user_email" />
                        </div>
                        <div className="form__input-div">
                            <input type="text" placeholder="Your Subject" className="form__control" name="subject" />
                        </div>
                    </div>
                    <div className="form__input-div">
                        <textarea placeholder="Your Message" className="form__control textarea" name="message"></textarea>
                    </div>
                    <button className="button" type="submit">
                        Send Message{" "}
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
