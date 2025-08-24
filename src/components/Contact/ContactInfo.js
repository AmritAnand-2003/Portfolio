import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function ContactInfo() {
    return (
        <div className="contact-info">
            <h2 className="contact-info-title">
                Let's <strong className="purple">Connect</strong>
            </h2>

            <p className="contact-info-description">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>

            <div className="contact-info-items">
                <div className="contact-info-item">
                    <div className="contact-info-icon icon-hover" title="Email">
                        <AiOutlineMail />
                    </div>
                    <div className="contact-info-content">
                        <h4>Email</h4>
                        <p>amritanandkumar9@gmail.com</p>
                    </div>
                </div>

                <div className="contact-info-item">
                    <div className="contact-info-icon icon-hover" title="Location">
                        <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info-content">
                        <h4>Location</h4>
                        <p>Delhi, India</p>
                    </div>
                </div>
            </div>

            <div className="contact-social">
                <h4 className="contact-social-title">Follow Me</h4>
                <div className="contact-social-links">
                    <a
                        href="https://github.com/AmritAnand-2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link icon-hover"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amrit-anand-2003/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link icon-hover"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>

            <div className="contact-cta">
                <h4>Why Work With Me?</h4>
                <ul className="contact-cta-list">
                    <li>2+ years of experience in cloud infrastructure</li>
                    <li>Proven track record at Expedia Group & E2E Cloud</li>
                    <li>Expertise in backend development & system optimization</li>
                    <li>NIT graduate with strong technical foundation</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactInfo;
