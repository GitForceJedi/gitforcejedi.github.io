import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ticTacToe from "../../Assets/Projects/tic-tac-toe.png";
import shoppingCart from "../../Assets/Projects/shopping-cart.png";
import businessApp from "../../Assets/Projects/business-app.png";
import pokemonGenerator from "../../Assets/Projects/pokemon-generator.png";
import javaRps from "../../Assets/Projects/java-r-p-s.png";
import TypeProjectTitle from "./TypeProjectTitle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <TypeProjectTitle />
        <br />
        <p style={{ color: "white" }}>
        This section contains some of my projects that are currently deployed online. 
        The projects are housed in repositories on GitHub and set up for <span className="maincolor">CI/CD</span> to <span className="maincolor">KenWillCode.com</span> via <span className="maincolor">GitHub Actions</span> and <span className="maincolor">GitHub Pages</span>. 
        Please feel free to visit their respective GitHub links to see how everything is configured.
        I have many other projects that are backend/API focused and do not have a front end, these can be located within my <a href="https://github.com/GitForceJedi" style={{color: "orangered"}}>GitHub Account</a>.        
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={ticTacToe}
              isBlog={false}
              title="React Tic-Tac-Toe"
              description="This is a React.js project that allows two players to interact with each other in a game of Tic-Tac-Toe. When the player is prompted (X/O) they will be able to choose their move on the board. The game will continue in this fashion until a Winner is determineed or the game ends in a tie. Once finished the game can be reset for the next round.
              The project is meant to showcase the capabilities of React and the use of State to manage the game board."
              ghLink="https://github.com/GitForceJedi/react-tic-tac-toe.git"
              demoLink="https://www.kenwillcode.com/react-tic-tac-toe/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={businessApp}
              isBlog={false}
              title="Business Budget App"
              description="This is a Business Budget App built with React. It allows for the allocation of budget into different areas of business.
              The app contains graphical displays (Bar, Pie) of the data and uses state to dynamically update all sections. There are options to set the total budget amount, increment/decrement budget by a set amount,
               manually input a custom amount and add/subtract it from budget, and more. The app will only allow allocation up to the set budget amount."
              ghLink="https://github.com/GitForceJedi/business-budget-app.git"
              demoLink="https://www.kenwillcode.com/business-budget-app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={shoppingCart}
              isBlog={false}
              title="Shopping Cart App"
              description="This is a Shopping Cart App build with React.js and Redux. Containing features like Add to Cart, Remove from Cart, Increment / Decrement Quantity, Calculate Total Price, and Checkout.
              The Checkout section contains a Payment portion complete with input validation. The project is meant to showcase how React and the use of State can be used to manage online shopping and payments."
              ghLink="https://github.com/GitForceJedi/shopping-cart-app.git"
              demoLink="https://www.kenwillcode.com/shopping-cart-app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={pokemonGenerator}
              isBlog={false}
              title="Pokemon Generator - Chrome Extension"
              description="This is a Chrome Extension meant to show interaction with an API. It allows for the generation of a random Pokemon, individual Pokemon lookup by number, random team generation, and manual team generation.
              The extension communicates with the Pokemon API to load and showcases the Pokemon's name, id, image, and shiny image. This extension is available for installation on Chrome. There is also a web demo available below.
              This project is ho"
              ghLink="https://github.com/GitForceJedi/pokemon-extension.git"
              demoLink="https://wwww.kenwillcode.com/pokemon-extension/index.html"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={javaRps}
              isBlog={false}
              title="Java - Rock, Paper, Scissors"
              description={["The Rock-Paper-Scissors Terminal App is a Java-based game that allows users to play against an AI opponent in a command-line interface. The game tracks the player’s history, records statistics, and provides a seamless terminal experience. Built using Java (JDK 17) and managed with Gradle, the project is packaged into a JAR file and containerized using Docker for easy deployment.",
              "To make the game accessible via a web browser while maintaining its terminal-based interaction, the project integrates ttyd, a WebSocket-based terminal emulator that enables browser-based access.",
              "For deployment, the application is hosted on Render, where the Dockerized environment runs continuously, allowing users to interact with the terminal remotely. The deployment process includes building the JAR file locally, wrapping it in a Docker container, and pushing it to Render for hosting. To make the application available through a custom domain, a CNAME record was added in Namecheap, mapping rock-paper-scissors.KenWillCode.com to the Render service.", 
              "This project leverages a combination of Java, Docker, WebSockets, and cloud deployment to bring a traditional terminal-based game online. By utilizing ttyd, users can play the game as if they were in a local terminal, but directly from their web browser."]}
              ghLink="https://github.com/GitForceJedi/java-rock-paper-scissors.git"
              demoLink="https://rock-paper-scissors.kenwillcode.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
