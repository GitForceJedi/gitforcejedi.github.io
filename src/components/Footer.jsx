import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        {/* Empty Column for Spacing */}
        <Col md="4"></Col>

        {/* Centered Copyright */}
        <Col md="4" className="footer-copywright text-center" >
          <h3>© {year}</h3>
        </Col>

        {/* Social Media Icons - Aligned Right */}
        <Col md="4" className="footer-body text-end">
          <ul className="footer-icons d-flex justify-content-end">
            <li className="social-icons">
              <a href="https://github.com/gitforcejedi" 
                 style={{ color: "orangered" }} 
                 target="_blank" 
                 rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/ken-crawford/" 
                 style={{ color: "orangered" }} 
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
