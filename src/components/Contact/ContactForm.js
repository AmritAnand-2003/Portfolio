import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../constants"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Amrit Anand", // Your name
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      
      setAlertType("success");
      setAlertMessage("Thank you for your message! I'll get back to you soon.");
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setAlertType("danger");
      setAlertMessage("Failed to send message. Please try again or contact me directly at amritanandkumar9@gmail.com");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 8000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form-title">
        Send Me a <strong className="purple">Message</strong>
      </h2>
      
      {showAlert && (
        <Alert variant={alertType} className="contact-alert">
          {alertMessage}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit} className="contact-form-container">
        <Form.Group className="mb-3">
          <Form.Label className="contact-label">Name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
            placeholder="Your full name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-label">Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
            placeholder="amritanandkumar9@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="contact-label">Subject *</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="contact-input"
            placeholder="What's this about?"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="contact-label">Message *</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-input contact-textarea"
            placeholder="Tell me about your project, question, or just say hello!"
          />
        </Form.Group>

        <Button type="submit" className="contact-submit-btn" disabled={isLoading}>
          <AiOutlineSend style={{ marginRight: "8px" }} />
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
