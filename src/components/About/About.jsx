import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutbody from "./AboutBody";
import aboutImage from "../../Assets/about.png";
import TypeAbout from "./TypeAbout";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            {/*<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="maincolor">ABOUT ME</strong>
            </h1>*/}
            <TypeAbout />
            <img src={aboutImage} alt="about" className="img-fluid about-icons" />
            <Aboutbody />
            {/*<br />
            <br />
            {/*<TypeQuote />*/}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;