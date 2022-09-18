import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export function ContactUs() {
    const [buttonText, setButtonText] = useState('Send');

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        setButtonText("Sending...");
        emailjs.sendForm('service_9a8ca9o', 'template_risk1dy', e.target, 'mAcww5AkB8gtz7fZO')
            .then((result) => {
                setButtonText("Success");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                setButtonText("Failed");
            });
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form className="contact-form" onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="from_name" placeholder="Name"/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="from_email" placeholder="Email Address"/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" name="contact_number" placeholder="Phone No.(Opt)"/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="subject" placeholder="Subject"/>
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="Message"></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}