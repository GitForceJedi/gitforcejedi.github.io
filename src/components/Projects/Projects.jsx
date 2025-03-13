import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ticTacToe from "../../Assets/Projects/tic-tac-toe.png";
import shoppingCart from "../../Assets/Projects/shopping-cart.png";
import businessApp from "../../Assets/Projects/business-app.png";
import pokemonGenerator from "../../Assets/Projects/pokemon-generator.png";
import javaRps from "../../Assets/Projects/java-r-p-s.png";
import stateSearch from "../../Assets/Projects/state-search-large.png";
import binarySearchTree from "../../Assets/Projects/binarysearchtree.png";
import TypeProjectTitle from "./TypeProjectTitle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <TypeProjectTitle />
        <br />
        <p style={{ color: "white", textAlign: "justify" }}>
        This section contains some of my projects that are currently deployed online. 
        The projects are housed in repositories on GitHub and set up for <span className="maincolor">CI/CD</span> to <span className="maincolor">KenWillCode.com</span> via <span className="maincolor">GitHub Actions</span> and <span className="maincolor">GitHub Pages</span>. 
        Other projects are deployed on <span className="maincolor">Render</span> via <span className="maincolor">Github</span> and <span className="maincolor">Docker</span>.
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
              imgPath={javaRps}
              isBlog={false}
              title="Java - Rock, Paper, Scissors"
              description={["The Rock-Paper-Scissors Terminal App is a Java-based game that allows users to play against an AI opponent in a command-line interface. The game tracks the player’s history, records statistics, and provides a seamless terminal experience. Built using Java (JDK 17) and managed with Gradle, the project is packaged into a JAR file and containerized using Docker for easy deployment.",
              "To make the game accessible via a web browser while maintaining its terminal-based interaction, the project integrates ttyd, a WebSocket-based terminal emulator that enables browser-based access.",
              "For deployment, the application is hosted on Render, where the Dockerized environment runs continuously, allowing users to interact with the terminal remotely. The deployment process includes building the JAR file locally, wrapping it in a Docker container, and pushing it to Render for hosting. To make the application available through a custom domain, a CNAME record was added in Namecheap, mapping rock-paper-scissors.KenWillCode.com to the Render service.", 
              "This project leverages a combination of Java, Docker, WebSockets, and cloud deployment to bring a traditional terminal-based game online. By utilizing ttyd, users can play the game as if they were in a local terminal, but directly from their web browser.",
              "*Unit Test cases included utilizing JUnit and Gradle."]}
              ghLink="https://github.com/GitForceJedi/java-rock-paper-scissors.git"
              demoLink="https://rock-paper-scissors.kenwillcode.com"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={binarySearchTree}
              isBlog={false}
              title="Java - Binary Search Tree"
              description={[
                "The Binary Search Tree Program is a Java-based command-line application that allows users to create, manipulate, and traverse a binary search tree interactively. Users can insert and delete nodes, perform in-order, pre-order, post-order, and reverse-order traversals, and view the tree structure directly from a terminal interface. This program is designed to demonstrate tree-based data structures while offering an intuitive and efficient user experience.",
                
                "Built with Java (JDK 11) and managed with Gradle, the project is packaged into a JAR file and containerized using Docker for streamlined deployment. The application integrates ttyd, a WebSocket-based terminal emulator, enabling users to interact with the program through a web browser while maintaining a terminal-like experience.",
                
                "For deployment, the application is hosted on Render, where the Dockerized environment ensures continuous availability. The deployment process involves automatically building the JAR file within the Docker container, pushing the latest version to Render, and exposing the application through a web-based terminal. Additionally, auto-deploy is enabled, ensuring that every push to the repository triggers a new build and deployment without manual intervention.",
                
                "This project effectively combines Java, Docker, WebSockets, and cloud deployment technologies to bring a traditionally terminal-based application to the web. By leveraging ttyd, users can interact with the Binary Search Tree program in a browser just as they would in a local terminal, ensuring accessibility and ease of use across different devices.",
                
                "*Unit test cases are included using JUnit and Gradle for robust testing and validation of binary search tree operations.*"
            ]}
              ghLink="https://github.com/GitForceJedi/java-binary-search-tree.git"
              demoLink="https://java-binary-search-tree.onrender.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={stateSearch}
              isBlog={false}
              title="Java - State Search"
              description={[
                "The State Search Program is a Java-based command-line application that allows users to search for U.S. state names using the Boyer-Moore string search algorithm. The program provides an interactive terminal interface where users can input a search pattern, and the system efficiently locates matching states. It is designed to demonstrate the efficiency of search algorithms while offering a simple, intuitive user experience.",
                
                "Built with Java (JDK 11) and managed with Maven, the project is packaged into a JAR file and containerized using Docker for seamless deployment. The application integrates ttyd, a WebSocket-based terminal emulator, allowing users to interact with the program directly from a web browser while maintaining a terminal-like experience.",
                
                "For deployment, the application is hosted on Render, where the Dockerized environment ensures continuous availability. The deployment process involves automatically building the JAR file within the Docker container, pushing the latest version to Render, and exposing the application through a web-based terminal. Additionally, GitHub Actions is configured to automate the deployment pipeline, ensuring that every push to the repository triggers a new build and deployment.",
                
                "This project effectively combines Java, Docker, WebSockets, and cloud deployment technologies to bring a traditional command-line tool to the web. By leveraging ttyd, users can access the search functionality as if they were using a local terminal, but entirely from their browser.",
                
                "*Unit test cases are included using JUnit and Maven for robust testing and validation of the search functionality.*"
              ]}
              ghLink="https://github.com/GitForceJedi/java-boyer-moore-state-search.git"
              demoLink="https://boyer-moore-search.kenwillcode.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={pokemonGenerator}
              isBlog={false}
              title="Pokemon Generator - Chrome Extension"
              description="This is a Chrome Extension meant to show interaction with an API (the PokeMon API available online). It allows for the generation of a random Pokemon, individual Pokemon lookup by number, random team generation, and manual team generation.
              The extension communicates with the Pokemon API to load and showcases the Pokemon's name, id, image, and shiny image. It is meant to showcase how one can interact with an API, receive a response with data, and display that date via front end.
              This extension is available for installation on Chrome. There is also a web demo available below."
              ghLink="https://github.com/GitForceJedi/pokemon-extension.git"
              demoLink="https://www.kenwillcode.com/pokemon-extension/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
