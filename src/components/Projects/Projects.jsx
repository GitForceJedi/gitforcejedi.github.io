import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import ticTacToe from '../../Assets/Projects/tic-tac-toe.png';
import customHooks from '../../Assets/Projects/business-hooks.png';
import shoppingCart from '../../Assets/Projects/shopping-cart.png';
import businessApp from '../../Assets/Projects/business-app.png';
import pokemonGenerator from '../../Assets/Projects/pokemon-generator.png';
import javaRps from '../../Assets/Projects/java-r-p-s.png';
import stateSearch from '../../Assets/Projects/state-search-large.png';
import binarySearchTree from '../../Assets/Projects/binarysearchtree.png';
import dealershipReview from '../../Assets/Projects/dealership-review.png';
import movieDb from '../../Assets/Projects/moviedb.png';
import tanitiTravel from '../../Assets/Projects/taniti-home.png';
import sunrayVacations from '../../Assets/Projects/sunray-vacations.png';
import TypeProjectTitle from './TypeProjectTitle';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <TypeProjectTitle />
        <br />
        <p style={{ color: 'white', textAlign: 'justify' }}>
          This section contains some of my projects that are currently deployed
          online. The projects are housed in repositories on GitHub and set up
          for <span className="maincolor">CI/CD</span> to{' '}
          <span className="maincolor">KenWillCode.com</span> via{' '}
          <span className="maincolor">GitHub Actions</span> and{' '}
          <span className="maincolor">GitHub Pages</span>. Other projects are
          deployed on <span className="maincolor">Render</span> via{' '}
          <span className="maincolor">Github</span> and{' '}
          <span className="maincolor">Docker</span>. Please feel free to visit
          their respective GitHub links to see how everything is configured. I
          have many other projects that are backend/API focused and do not have
          a front end, these can be located within my{' '}
          <a
            href="https://github.com/GitForceJedi"
            style={{ color: 'orangered' }}
          >
            GitHub Account
          </a>
          .
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={sunrayVacations}
              isBlog={false}
              title="Sunray Vacations - (Android, Java, SQL, JUnit, Espresso)"
              description={[
                'The Sunray Vacations application is a mobile platform designed to streamline vacation planning and excursion management for travelers. It enables users to register securely, log in with hashed credentials, create itineraries, attach excursions, and set notifications for trip start and end dates.',

                'Deployment is provided through two portals. A dedicated project page on Itch.io serves as the discovery portal for APK downloads, versioned releases, and project presentation. Appetize.io offers a live browser-based emulator that allows users to interact with the app directly, change device or API level on the fly, and access a project-specific page for testing and demonstration.',

                'The app is built in Java 17 using Android Studio Meerkat with AGP 8.1+, and leverages the Room Persistence Library (v2.4.3) for local data storage. The interface is implemented with XML layouts using components like RecyclerView, ConstraintLayout, and SearchView for responsive, user-friendly navigation.',

                'Testing includes unit tests with JUnit 4, DAO verification with Robolectric and room-testing, and UI automation with Espresso and UIAutomator. Automated HTML reports provide visibility into pass/fail results, while version control and CI/CD practices ensure traceability and maintainable development.',

                'Core features are built on a relational data model where Users, Vacations, and Excursions are represented as Room entities with foreign key associations to enforce one-to-many relationships. Authentication and authorization are implemented with salted and hashed password storage, ensuring secure user isolation at the database level. Each Vacation entity is tied to a specific User, with linked Excursions maintaining referential integrity through foreign keys. Scheduled notifications are implemented via Android’s AlarmManager and WorkManager APIs, enabling device-level alerts for vacation start and end dates. Vacation search / filtering functionality. Data can be exported through repository-layer logic into TXT and CSV report formats, written to device storage using scoped storage APIs, and shared through Android’s native file-sharing intents for external consumption.',
              ]}
              ghLink="https://github.com/GitForceJedi/sunray-vacations.git"
              demoLink="https://appetize.io/app/b_b2vs6r7p6irgu3jesbytqo4hnu?device=pixel7&osVersion=14.0&toolbar=true"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={tanitiTravel}
              isBlog={false}
              title="Taniti Travel - (React, Vite, Node.js., HMTL, CSS)"
              description={[
                'The Taniti Travel website is a fully responsive informational platform designed to promote tourism to the fictional island of Taniti. The site highlights the island’s lodging, dining, entertainment, transportation, and cultural offerings through a clean, image-rich interface. Users can navigate seamlessly between pages showcasing curated content, activity cards, and call-to-action buttons that encourage deeper exploration and engagement.',

                'Each page was carefully designed with UX best practices, using reusable layout components such as Hero banners, CardGrids, TextBlocks, and custom layouts to deliver a consistent and accessible experience. Pages feature fully detailed content including images, descriptive text, and contextual CTAs such as “Explore Beaches” and “Find Pubs.” The Contact form is accessible globally through both navigation and popup windows for user inquiries.',

                'Built with React 18 and Vite for lightning-fast development and optimized builds, the project uses modular SCSS for styling alongside Bootstrap utility classes to ensure mobile-friendly layouts. Navigation is handled by React Router DOM.',
              ]}
              ghLink="https://github.com/GitForceJedi/taniti-travel.git"
              demoLink="https://kenwillcode.com/taniti-travel/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={movieDb}
              isBlog={false}
              title="My Movie DB - Full Stack App (React, Vite, Node.js, TypeScript, Express, PostgreSQL)"
              description={[
                'The Movie DB application is a full-stack web platform that enables users to explore a dynamic catalog of movies and reviews. Visitors can filter and browse content based on genre, rating, reviewer type, and more — while developers can transparently observe the SQL queries powering the app. This interface bridges the gap between frontend interaction and backend database execution, offering real-time visibility into how web apps communicate with relational data via SQL.',

                'Dynamic filters from the frontend are passed to the backend as query parameters, where they are parsed into secure, parameterized SQL queries. These queries, along with their values, are returned in the API response and displayed on the website, for insight into how user actions affect database behavior.',

                'Built using React 18 with TypeScript for the frontend and Node.js + Express with TypeScript for the backend, the application uses PostgreSQL as the primary relational database. Supabase serves as the cloud-hosted database platform, while Tailwind CSS provides a utility-first styling system for a clean, modern interface. The codebase is modular, featuring custom React hooks and service layers to manage API logic and state cleanly.',

                'Deployment is split across platforms: the frontend is hosted on GitHub Pages and linked to a custom domain (kenwillcode.com/movie-db-frontend), while the backend API is deployed on Render. Environment variables such as the API base URL and CORS origins are managed per deployment target to ensure proper frontend-backend communication in both local and production environments.',

                '*This project demonstrates how modern frontend tools, cloud-hosted relational databases, and secure backend APIs can be combined to deliver a transparent, educational, and scalable movie exploration and review platform.*',
                'The GitHub link below leads to the Frontend portion, for the Backend visit https://github.com/GitForceJedi/movie-db-backend.git',
              ]}
              ghLink="https://github.com/GitForceJedi/movie-db-frontend.git"
              demoLink="https://kenwillcode.com/movie-db-frontend/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
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
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={dealershipReview}
              isBlog={false}
              title="Dealership Reviews - Full Stack App with AI Sentiment Analysis"
              description={[
                'The Car Reviews application is a full-stack web platform that allows users to browse dealerships, submit car reviews, and engage with automotive data. It features a secure authentication system, ensuring that only logged-in users can post reviews, while unauthenticated users have read-only access. The application is designed to provide a seamless user experience for car enthusiasts and potential buyers.',

                'Built using Django for both the frontend and backend, the project also incorporates a Node.js API to retrieve dealership data and a Python-based API to manage and process user reviews. PostgreSQL serves as the primary relational database, storing structured dealership and user data, while IBM Cloudant (NoSQL) handles document-based storage, ensuring efficient and scalable data management.',

                'The deployment process utilizes Docker for containerization, allowing each component of the application—Django, Node.js, and Python APIs—to run as independent services in a microservices architecture. The entire system is deployed on Render, where the PostgreSQL database is hosted as a managed service, ensuring scalability and reliability.',

                'To maintain security and performance, authentication is enforced via Django’s built-in user management system, preventing unauthorized review submissions. The frontend integrates dynamically with the APIs, providing an interactive interface for users to explore dealerships and submit their experiences.',

                '*This project demonstrates the power of combining relational and NoSQL databases, microservices, and cloud deployment to deliver a robust, scalable, and user-friendly car review platform.*',
                'Note: This project uses AI via IBM Watson for Sentiment Analysis of reviews. The reviews are analyzed for sentiment and an image is attached to the review based on the sentiment calculated.',
              ]}
              ghLink="https://github.com/GitForceJedi/dealership-reviews.git"
              demoLink="https://django-app-latest-8iu2.onrender.com/djangoapp/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={customHooks}
              isBlog={false}
              title="React Custom Hooks - Business Logic"
              description=" This project is meant to showcase the power of custom React Hooks, in the scope of Business Profit and Margin. It is built in React and uses 3 custom hooks that work in conjunction with one another. The hooks are triggered when their corresponding input is adjusted. 
              Additional elements within the page adjust accordingly to the results returned by the hooks.
              Try adjusting both the Purchase Price (which influences the discount applied) and the Business Cost (which influences the profit margin)."
              ghLink="https://github.com/GitForceJedi/business-hooks-react.git"
              demoLink="https://www.kenwillcode.com/business-hooks-react/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
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
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
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
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={javaRps}
              isBlog={false}
              title="Java - Rock, Paper, Scissors"
              description={[
                'The Rock-Paper-Scissors Terminal App is a Java-based game that allows users to play against an AI opponent in a command-line interface. The game tracks the player’s history, records statistics, and provides a seamless terminal experience. Built using Java (JDK 17) and managed with Gradle, the project is packaged into a JAR file and containerized using Docker for easy deployment.',
                'To make the game accessible via a web browser while maintaining its terminal-based interaction, the project integrates ttyd, a WebSocket-based terminal emulator that enables browser-based access.',
                'For deployment, the application is hosted on Render, where the Dockerized environment runs continuously, allowing users to interact with the terminal remotely. The deployment process includes building the JAR file locally, wrapping it in a Docker container, and pushing it to Render for hosting. To make the application available through a custom domain, a CNAME record was added in Namecheap, mapping rock-paper-scissors.KenWillCode.com to the Render service.',
                'This project leverages a combination of Java, Docker, WebSockets, and cloud deployment to bring a traditional terminal-based game online. By utilizing ttyd, users can play the game as if they were in a local terminal, but directly from their web browser.',
                '*Unit Test cases included utilizing JUnit and Gradle.',
              ]}
              ghLink="https://github.com/GitForceJedi/java-rock-paper-scissors.git"
              demoLink="https://rock-paper-scissors.kenwillcode.com"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={binarySearchTree}
              isBlog={false}
              title="Java - Binary Search Tree"
              description={[
                'The Binary Search Tree Program is a Java-based command-line application that allows users to create, manipulate, and traverse a binary search tree interactively. Users can insert and delete nodes, perform in-order, pre-order, post-order, and reverse-order traversals, and view the tree structure directly from a terminal interface. This program is designed to demonstrate tree-based data structures while offering an intuitive and efficient user experience.',

                'Built with Java and managed with Gradle, the project is packaged into a JAR file and containerized using Docker for streamlined deployment. The application integrates ttyd, a WebSocket-based terminal emulator, enabling users to interact with the program through a web browser while maintaining a terminal-like experience.',

                'For deployment, the application is hosted on Render, where the Dockerized environment ensures continuous availability. The deployment process involves automatically building the JAR file within the Docker container, pushing the latest version to Render, and exposing the application through a web-based terminal. Additionally, auto-deploy is enabled, ensuring that every push to the repository triggers a new build and deployment without manual intervention.',

                'This project effectively combines Java, Docker, WebSockets, and cloud deployment technologies to bring a traditionally terminal-based application to the web. By leveraging ttyd, users can interact with the Binary Search Tree program in a browser just as they would in a local terminal, ensuring accessibility and ease of use across different devices.',

                '*Unit test cases are included using JUnit and Gradle for robust testing and validation of binary search tree operations.*',
              ]}
              ghLink="https://github.com/GitForceJedi/java-binary-search-tree.git"
              demoLink="https://java-binary-search-tree.onrender.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={stateSearch}
              isBlog={false}
              title="Java - State Search"
              description={[
                'The State Search Program is a Java-based command-line application that allows users to search for U.S. state names using the Boyer-Moore string search algorithm. The program provides an interactive terminal interface where users can input a search pattern, and the system efficiently locates matching states. It is designed to demonstrate the efficiency of search algorithms while offering a simple, intuitive user experience.',

                'Built with Java and managed with Maven, the project is packaged into a JAR file and containerized using Docker for seamless deployment. The application integrates ttyd, a WebSocket-based terminal emulator, allowing users to interact with the program directly from a web browser while maintaining a terminal-like experience.',

                'For deployment, the application is hosted on Render, where the Dockerized environment ensures continuous availability. The deployment process involves automatically building the JAR file within the Docker container, pushing the latest version to Render, and exposing the application through a web-based terminal. Additionally, GitHub Actions is configured to automate the deployment pipeline, ensuring that every push to the repository triggers a new build and deployment.',

                'This project effectively combines Java, Docker, WebSockets, and cloud deployment technologies to bring a traditional command-line tool to the web. By leveraging ttyd, users can access the search functionality as if they were using a local terminal, but entirely from their browser.',

                '*Unit test cases are included using JUnit and Maven for robust testing and validation of the search functionality.*',
              ]}
              ghLink="https://github.com/GitForceJedi/java-boyer-moore-state-search.git"
              demoLink="https://boyer-moore-search.kenwillcode.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
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
