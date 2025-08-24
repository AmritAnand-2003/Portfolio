import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsCalendarCheck } from "react-icons/bs";

function Education() {
    const educationData = [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Malaviya National Institute of Technology (NIT) Jaipur",
            location: "Jaipur, India",
            duration: "2020 - 2024",
            description: "Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Software Engineering, Operating Systems, Machine Learning, Web Development",
            gpa: "CGPA: 7.52/10"
        },
        {
            degree: "Senior Secondary (12th Grade)",
            institution: "Shivam Residential Public School, Nalanda (CBSE)",
            location: "Nalanda, India",
            duration: "2018 - 2020",
            description: "Science Stream with Mathematics, Physics, Chemistry, and Computer Science. Strong foundation in analytical thinking and problem-solving",
            gpa: "Percentage: 87.4%"
        },
        {
            degree: "Secondary School Certificate (10th Grade)",
            institution: "Shivam Residential Public School, Nalanda (CBSE)",
            location: "Nalanda, India",
            duration: "2016 - 2018",
            description: "All subjects with excellence in Mathematics and Science. Developed strong fundamentals in logical reasoning",
            gpa: "Percentage: 92%"
        }
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={12}>
                <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
                    <strong className="purple">Education</strong>
                </h1>

                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <BsCalendarCheck className="timeline-icon" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-card">
                                    <div className="timeline-header">
                                        <h3 className="timeline-title">{edu.degree}</h3>
                                        <span className="timeline-duration">{edu.duration}</span>
                                    </div>
                                    <h4 className="timeline-institution">{edu.institution}</h4>
                                    <p className="timeline-location">{edu.location}</p>
                                    <p className="timeline-description">{edu.description}</p>
                                    <p className="timeline-gpa">{edu.gpa}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    );
}

export default Education;
