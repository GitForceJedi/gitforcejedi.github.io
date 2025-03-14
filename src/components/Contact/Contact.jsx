import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TypeContact from "./TypeContact";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (opens email client)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Format the email subject and body
    const mailtoLink = `mailto:your-email@example.com?subject=Contact%20Form%20Submission%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <Container fluid className="contact-section">
    <Container>
    <div className="contact-container">
      <TypeContact />
      <br />
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label maincolor">
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="contact-input"
          />
        </label>
        <br />
        <label className="contact-label maincolor">
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="contact-input"
          />
        </label>
        <br />
        <label className="contact-label maincolor">
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
            className="contact-textarea"
          />
        </label>
        <br />
        <button type="submit" className="contact-submit-btn">
          Send Message
        </button>
      </form>
    </div>
    </Container>
    </Container>
  );
};

export default Contact;
