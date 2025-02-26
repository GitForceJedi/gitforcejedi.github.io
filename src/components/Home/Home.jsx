import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/KenCircle.jpg";
import myImg from "../../Assets/mean_dev_about.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import TypeOnce from "./TypeOnce";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt
              glareEnable={true} //  Enables shine effect
              glareMaxOpacity={0.45} //  Shine intensity
              glarePosition="all" //  Makes glare appear on all sides
              glareBorderRadius="50%" //  Forces circular glare
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05} //  Slight zoom effect
              style={{
                width: "400px", //  Ensure same size as image
                height: "400px",
                borderRadius: "50%", //  Ensures circular shape
                overflow: "hidden", //  Prevents shine from bleeding outside
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid circular-profile-image"
                style={{
                  width: "100%", //  Image fills container
                  height: "100%",
                  borderRadius: "50%", //  Ensures circular shape
                }}
              />
            </Tilt>
            </Col>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <TypeOnce />
              </h1>
              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
              <ul className="d-flex justify-content">
                <li className="social-icons">
                  <a href="https://github.com/gitforcejedi" 
                      style={{ color: "white" }} 
                      target="_blank" 
                      rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/ken-crawford/" 
                      style={{ color: "white" }} 
                      target="_blank" 
                      rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>          
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
              <span className="maincolor"> QUICK INTRO </span></h1>
              {/* <TypeBody /> */}
              <p className="home-about-body">
                I am a Full Stack Developer specializing in <b className="maincolor">Frontend development, Backend development, API development,</b> and the full <b className="maincolor">Software Development Life Cycle</b>.  
                <br />
                <br />Some of the languages and technologies I use the most include
                  <b className="maincolor"> Javascript, TypeScript, Python, Node.js, React.js, Express, SQL, PostgreSQL, and more</b>.
                <br />
                <br />
                I am passionate about building &nbsp;
                <b className="maincolor">Websites, Software Solutions, </b> and
                exploring{" "}
                <b className="maincolor">
                  new languages, frameworks, and technologies
                </b>
                .
              </p>
            </Col>
            <Col md={4} className="myAvtar">
            <Tilt
              glareEnable={true} //  Enables shine effect
              glareMaxOpacity={0.45} //  Shine intensity
              glarePosition="all" //  Makes glare appear on all sides
              glareBorderRadius="50%" //  Ensures circular glare
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05} //  Slight zoom effect
              style={{
                width: "400px", //  Ensure same size as image
                height: "400px",
                borderRadius: "50%", //  Ensures circular shape
                overflow: "visible", //  Allows border to render properly
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-70px", /* ✅ Moves the image up */
              }}
            >
              <img
                src={myImg}
                className="img-fluid circular-image"
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%", //  Ensures the image remains circular
                  border: "4px solid orangered", //  Correct circular border
                  objectFit: "cover", //  Prevents stretching
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", //  Adds slight shadow
                }}
              />
            </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;