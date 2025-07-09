import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cli from "../../Assets/Projects/image.png";
import shorten from "../../Assets/Projects/url-shortener.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leetcode from "../../Assets/Projects/leetcode.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetcode}
              isBlog={false}
              title="Code Recipe"
              description="An online judge platform hosting coding problems and challenges. The platform provides the infrastructure to manage and execute the DSA coding problems, ensuring fair and impartial evaluation."
              ghLink="https://github.com/AmritAnand-2003/CodeRecipe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorten}
              isBlog={false}
              title="URL Shortener"
              description="A simple and efficient URL shortener web application built with Django. It allows users to shorten long URLs, assign custom short URLs, track usage statistics, and manage expiration times. The app also includes a scheduled job to automatically delete expired URLs."
              ghLink="https://github.com/AmritAnand-2003/URL-Shortener"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Test Portal"
              description="This is an online MCQ based test portal. It is a web application that allows users to take tests and quizzes online."
              ghLink="https://github.com/AmritAnand-2003/TEST-Portal"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cli}
              isBlog={false}
              title="COINDEX-CLI"
              description="A Command Line Interface Tool to track cryptocurrency prices."
              ghLink="https://github.com/AmritAnand-2003/COINDEX-CLI"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
