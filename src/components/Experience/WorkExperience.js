import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsBriefcase } from "react-icons/bs";

function WorkExperience() {
  const workData = [
    {
      position: "Software Development Engineer 1 (SDE1)",
      company: "E2E Cloud",
      location: "India",
      duration: "July 2024 - Present",
      type: "Full-time",
      description: [
        "Engineered the backend for cloud marketplace (similar to AWS Marketplace), increasing vendor onboarding to publish custom images and enabling customers to deploy pre-configured apps",
        "Integrated the Chennai region support into cloud infrastructure by revamping backend codebase",
        "Built an automated event monitoring system using Zabbix to track CPU, memory, and disk usage on 25000+ VMs, with real-time alerts for threshold breaches to improve system reliability",
        "Reduced latency by 40% for VPC deletion API requests by implementing asynchronous task execution using Celery",
        "Developed a dashboard to list all services of customer integrating Region and IAM data for streamlined access"
      ],
      technologies: ["Python", "Celery", "Zabbix", "Cloud Computing", "Microservices", "VPC", "IAM", "Backend Development", "API Development", "Dashboard Development", "Git"]
    },
    {
      position: "Software Development Engineer Intern",
      company: "E2E Cloud",
      location: "India",
      duration: "Jan 2024 - June 2024",
      type: "Internship",
      description: [
        "Developed and maintained cloud infrastructure solutions and services",
        "Worked on scalable distributed systems and microservices architecture",
        "Collaborated with cross-functional teams to deliver robust cloud solutions",
        "Implemented best practices in software development and code optimization",
        "Contributed to product development and feature enhancement initiatives"
      ],
      technologies: ["Cloud Computing", "Microservices", "Python", "JavaScript", "Docker", "Kubernetes", "AWS", "Git"]
    },
    {
      position: "Software Development Engineer Intern",
      company: "Expedia Group",
      location: "India",
      duration: "May 2023 - July 2023",
      type: "Internship",
      description: [
        "Migrated invoice email functionality in VRBO's Online Booking Integration Endpoint (OLBIE), handling over 100,000 monthly transactions, from the legacy service to cp-file-service, a centralized API platform used across Expedia Group",
        "Ensured seamless communication to property managers during the migration process",
        "Designed the migration as a feature flag, resulting in a 35% decrease in latency and significantly improving system performance",
        "Gained experience with enterprise-level software development practices and large-scale system migrations",
        "Collaborated with cross-functional teams on critical booking platform infrastructure"
      ],
      technologies: ["Java", "Spring Boot", "VRBO", "OLBIE", "Feature Flags", "API Migration", "Enterprise Systems", "Performance Optimization", "Git"]
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12}>
        <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
          Work <strong className="purple">Experience</strong>
        </h1>
        
        <div className="timeline">
          {workData.map((work, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <BsBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{work.position}</h3>
                    <span className="timeline-duration">{work.duration}</span>
                  </div>
                  <h4 className="timeline-company">{work.company}</h4>
                  <p className="timeline-location">{work.location} • {work.type}</p>
                  
                  <ul className="timeline-description-list">
                    {work.description.map((desc, descIndex) => (
                      <li key={descIndex} className="timeline-description-item">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="timeline-technologies">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {work.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default WorkExperience;
