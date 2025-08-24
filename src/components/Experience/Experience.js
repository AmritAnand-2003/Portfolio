import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
              My <strong className="purple">Journey </strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", fontSize: "1.2em", paddingBottom: "30px" }}>
              Here's a timeline of my professional experience and educational background.
            </p>
          </Col>
        </Row>

        {/* Work Experience Section */}
        <WorkExperience />

        {/* Education Section */}
        <Education />
      </Container>
    </Container>
  );
}

export default Experience;
