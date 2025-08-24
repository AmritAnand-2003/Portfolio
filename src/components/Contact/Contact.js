import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
return (
    <Container fluid className="contact-section">
        <Particle />
        <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12}>
                    <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
                        Get In <strong className="purple">Touch</strong>
                    </h1>
                    <p style={{ color: "white", textAlign: "center", fontSize: "1.2em", paddingBottom: "30px" }}>
                        Feel free to reach out if you want to collaborate, have any questions, want to hire me, get mentorship, or just want to connect!
                    </p>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {/* Contact Form */}
                <Col md={8} lg={6}>
                    <ContactForm />
                </Col>
                
                {/* Contact Information */}
                <Col md={4} lg={4} style={{ paddingTop: "30px" }}>
                    <ContactInfo />
                </Col>
            </Row>
        </Container>
    </Container>
);
}

export default Contact;
