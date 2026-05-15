# ONLINE QUIZ PLATFORM WITH AUTOMATED TESTING & CI/CD PIPELINE

**A Project Report**
Submitted in partial fulfillment of the requirements for the degree of 
**Master of Computer Applications (MCA)**

---

## DECLARATION
I hereby declare that this project report entitled **"Online Quiz Platform with Automated Testing & CI/CD Pipeline"** is a genuine work done by me under the guidance of my project guide. The work presented in this report has not been submitted earlier for the award of any degree or diploma.

**(Student Name / Signature)**  
**USN / Roll Number:** 

---

## ACKNOWLEDGEMENT
I would like to express my sincere gratitude to everyone who supported me throughout this project. I am thankful to my project guide for their invaluable advice and continuous encouragement. I also extend my gratitude to the Head of the Department and the institution for providing the necessary facilities. Finally, I thank my family and friends for their constant support.

---

## ABSTRACT
The evolution of online education has necessitated the development of robust, scalable, and intuitive platforms for assessment. This project, "Online Quiz Platform," is a comprehensive full-stack web application engineered to facilitate seamless quiz creation, participation, and automated evaluation. Designed with modern software engineering practices, the platform provides users with category-based quizzes, varying difficulty levels, and real-time leaderboard analytics without the friction of mandatory registration for basic attempts.

Beyond the application layer, this project heavily emphasizes modern DevOps methodologies to ensure enterprise-grade reliability. The architecture utilizes Docker for containerizing both the frontend (React.js/Vite) and backend (Node.js/Express) services, ensuring environment consistency. A rigorous CI/CD pipeline is implemented via GitHub Actions to automate testing (using Jest and Supertest) and deployment. The production environment is hosted on an AWS EC2 instance, utilizing Nginx as a reverse proxy to route traffic efficiently. The result is a highly available, thoroughly tested (80%+ coverage), and automated system that serves as a blueprint for modern SaaS (Software as a Service) architectures.

---

## TABLE OF CONTENTS
1. [Chapter 1: Introduction](#chapter-1-introduction)
2. [Chapter 2: Literature Review & Technology Stack](#chapter-2-literature-review)
3. [Chapter 3: System Requirements Specification (SRS)](#chapter-3-srs)
4. [Chapter 4: System Design and Architecture](#chapter-4-system-design)
5. [Chapter 5: Implementation & DevOps Pipeline](#chapter-5-implementation)
6. [Chapter 6: System Testing](#chapter-6-testing)
7. [Chapter 7: Results and Screenshots](#chapter-7-results)
8. [Chapter 8: Conclusion and Future Scope](#chapter-8-conclusion)
9. [References](#references)

---

<a name="chapter-1-introduction"></a>
## CHAPTER 1: INTRODUCTION

### 1.1 Background
In the digital era, educational institutions and corporate training programs rely heavily on digital assessments. Traditional paper-based quizzes are time-consuming to evaluate and prone to human error. Online quiz platforms solve this by offering instantaneous evaluation, secure data storage, and analytics. However, many existing platforms suffer from poor scalability, lack of automated deployment pipelines, and tightly coupled architectures. 

### 1.2 Problem Statement
Existing lightweight quiz systems often lack robust automated testing and scalable cloud deployment strategies, making them difficult to maintain as user traffic grows. There is a need for a modern, containerized quiz platform that not only delivers a seamless user experience but also integrates automated CI/CD pipelines to ensure code quality and zero-downtime deployments.

### 1.3 Objectives
- To develop a responsive, dynamic web interface for users to take quizzes based on categories and difficulty levels.
- To implement a scalable backend API using Node.js and MongoDB for real-time result calculation and leaderboard tracking.
- To containerize the entire application stack using Docker and Docker Compose for environment parity across development, testing, and production.
- To establish a Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions.
- To deploy the application securely to an AWS EC2 instance.

### 1.4 Proposed System
The proposed system is a microservices-inspired monolithic application divided into a React frontend and an Express backend. It eliminates the manual overhead of software delivery by automatically running unit tests on every GitHub push and securely deploying the updated Docker images to an AWS cloud server if the tests pass.

---

<a name="chapter-2-literature-review"></a>
## CHAPTER 2: LITERATURE REVIEW & TECHNOLOGY STACK

### 2.1 Literature Survey
A study of existing platforms like Kahoot!, Quizlet, and Google Forms reveals that while they offer excellent user interfaces, building a custom platform allows for deeper integration of automated DevOps workflows. Modern software development lifecycle (SDLC) models, particularly Agile and DevOps, emphasize the necessity of CI/CD. Research shows that integrating Docker with GitHub Actions reduces deployment failures by isolating dependencies.

### 2.2 Technology Stack

#### 2.2.1 Frontend: React.js (with Vite)
React.js is a component-based JavaScript library for building user interfaces. Vite is used as the build tool to significantly improve development server start times and bundling speeds compared to Create React App. Tailwind CSS is utilized for utility-first styling, ensuring a responsive and modern design, while Framer Motion handles UI animations.

#### 2.2.2 Backend: Node.js & Express.js
Node.js provides an asynchronous, event-driven JavaScript runtime environment. Express.js is a minimal and flexible web application framework that provides a robust set of features for web and mobile APIs. It handles routing, middleware integration, and HTTP request processing.

#### 2.2.3 Database: MongoDB
MongoDB is a NoSQL, document-oriented database. It stores data in JSON-like documents, which aligns perfectly with the JavaScript-based frontend and backend (the MERN stack). It allows for flexible schema design, which is ideal for storing dynamic quiz questions and varied user data.

#### 2.2.4 DevOps: Docker & AWS
- **Docker:** Used to package the application and its dependencies into standardized units (containers) for software development. 
- **GitHub Actions:** Provides the automation engine for the CI/CD pipeline.
- **AWS EC2:** Elastic Compute Cloud provides scalable computing capacity in the AWS cloud.
- **Nginx:** Acts as a reverse proxy server to direct HTTP traffic to the appropriate Docker containers.

---

<a name="chapter-3-srs"></a>
## CHAPTER 3: SYSTEM REQUIREMENTS SPECIFICATION (SRS)

### 3.1 Hardware Requirements
**Development Environment:**
- Processor: Intel Core i5 / AMD Ryzen 5 or higher
- RAM: 8 GB (16 GB recommended for running Docker)
- Storage: 256 GB SSD

**Production Server (AWS EC2 t2.micro/t3.micro):**
- Processor: 1-2 vCPU
- RAM: 1 GiB
- Storage: 8 GiB EBS Volume

### 3.2 Software Requirements
- Operating System: Windows / Linux / macOS (Local), Ubuntu 22.04 LTS / 24.04 LTS (Server)
- Runtime: Node.js v20.x
- Database: MongoDB 6.0+
- Containerization: Docker Engine, Docker Compose
- Version Control: Git

### 3.3 Functional Requirements
1. **User Module:** Users can view available quizzes, select categories, choose difficulty levels, and submit answers.
2. **Evaluation Module:** The system instantly evaluates submitted answers against the database and returns a score.
3. **Leaderboard Module:** Tracks high scores and displays top performers.
4. **Admin Module (Future Scope):** Management of questions, categories, and viewing analytics.

### 3.4 Non-Functional Requirements
1. **Scalability:** The Dockerized architecture allows for horizontal scaling by deploying multiple container instances.
2. **Availability:** AWS deployment ensures high uptime.
3. **Security:** Use of Helmet.js, CORS, and environment variables (.env) to secure backend endpoints. Nginx handles secure traffic routing.
4. **Maintainability:** Modular code structure and 80% automated test coverage ensure easy future modifications.

---

<a name="chapter-4-system-design"></a>
## CHAPTER 4: SYSTEM DESIGN AND ARCHITECTURE

### 4.1 System Architecture

*[PLACEHOLDER FOR WORKFLOW DIAGRAM: Insert a Block Diagram showing the Client Browser connecting to AWS EC2 (Nginx), which routes to the Frontend Container and Backend Container, with the Backend connecting to the MongoDB Container.]*

**Workflow Description:**
1. The user accesses the platform via the AWS EC2 Public IP.
2. The request hits the Nginx Reverse Proxy.
3. Nginx serves the static React files from the Frontend Container.
4. API calls (`/api/...`) made by the React app are proxied to the Node.js Backend Container.
5. The Backend performs CRUD operations on the MongoDB Container.

### 4.2 Data Flow Diagram (DFD)

#### Level 0 DFD
*[PLACEHOLDER FOR DFD LEVEL 0: Show 'User' interacting with 'Online Quiz System', inputting 'Quiz Answers' and receiving 'Score & Leaderboard'.]*

#### Level 1 DFD
*[PLACEHOLDER FOR DFD LEVEL 1: Break down the system into 'Authentication/Session', 'Quiz Engine', 'Scoring System', and 'Database Management'.]*

### 4.3 Use Case Diagram
*[PLACEHOLDER FOR USE CASE DIAGRAM: Actors (User, Admin). Use cases: Browse Quizzes, Attempt Quiz, View Result, View Leaderboard.]*

### 4.4 Entity-Relationship (ER) Diagram
*[PLACEHOLDER FOR ER DIAGRAM: Entities include User, Quiz, Question, Category, LeaderboardEntry.]*
- **Quiz** (1) to **Question** (N)
- **User** (1) to **LeaderboardEntry** (N)

---

<a name="chapter-5-implementation"></a>
## CHAPTER 5: IMPLEMENTATION & DEVOPS PIPELINE

### 5.1 Frontend Implementation
The frontend is initialized using Vite for optimized bundling. The architecture follows a component-based structure. Global state management is handled using React Context/Hooks. Tailwind CSS is used extensively to create a glassmorphism effect and dark-mode compatible UI.

### 5.2 Backend Implementation
Express.js routes are defined modularly. Mongoose is used as the ODM (Object Data Modeling) library to interact with MongoDB. 
Key APIs include:
- `GET /api/quizzes`: Fetches list of quizzes.
- `POST /api/evaluate`: Receives user answers, compares with database, and calculates the score securely on the server to prevent cheating.

### 5.3 Docker Containerization
The project utilizes a multi-container Docker Compose setup.
- **Frontend Dockerfile:** Uses a multi-stage build. Stage 1 uses `node:20-alpine` to run `npm run build`. Stage 2 uses `nginx:alpine` to serve the static `dist` folder.
- **Backend Dockerfile:** Uses `node:18-alpine` (or 20), installs production dependencies, and runs `node server.js`.
- **docker-compose.yml:** Orchestrates the `frontend`, `backend`, and `mongo` services, creating an internal Docker network for secure communication.

### 5.4 CI/CD Pipeline via GitHub Actions

*[PLACEHOLDER FOR WORKFLOW DIAGRAM: Insert CI/CD Pipeline Diagram showing Git Push -> GitHub Actions -> Install Dependencies -> Run Tests -> Build -> SSH into EC2 -> Git Pull -> Docker Compose Up]*

The `.github/workflows/ci-cd.yml` file defines the automation process:
1. **Trigger:** Fires on `push` to the `main` branch.
2. **Build & Test Job:** Sets up Node.js 20.x, installs backend and frontend dependencies using `npm ci`, and executes `npm test`.
3. **Deploy Job:** If tests pass, it uses the `appleboy/ssh-action` to securely SSH into the AWS EC2 instance using stored repository secrets (`EC2_HOST`, `EC2_USERNAME`, `EC2_SSH_KEY`).
4. **Execution:** On the server, it runs `git pull`, stops existing containers with `docker-compose down`, and rebuilds/starts them with `docker-compose up -d --build`.

---

<a name="chapter-6-testing"></a>
## CHAPTER 6: SYSTEM TESTING

Testing is a critical component of this project, ensuring reliability before deployment. The goal of 80%+ coverage was set and achieved.

### 6.1 Unit Testing
Jest is used to test isolated functions, such as the scoring logic and data validation mechanisms. 

### 6.2 Integration Testing
Supertest is utilized to simulate HTTP requests to the Express APIs without needing a live server. 
- **Test Case 1:** Verify `GET /api/quizzes` returns a 200 status code and a JSON array.
- **Test Case 2:** Verify `POST /api/evaluate` returns the correct calculated score based on a mock payload.

### 6.3 Pipeline Testing
The GitHub Actions workflow acts as the ultimate gatekeeper. If any Jest test fails, the pipeline exits with a non-zero status code, and the deployment step to AWS is entirely skipped, preventing broken code from reaching production.

---

<a name="chapter-7-results"></a>
## CHAPTER 7: RESULTS AND SCREENSHOTS

*(In this section, insert high-resolution screenshots of the working application and infrastructure).*

### 7.1 User Interface Screenshots

1. **Home Page**
*[PLACEHOLDER FOR SCREENSHOT: Home page showing the platform title, description, and "Start Quiz" button.]*
*Figure 7.1: The landing page featuring a responsive and modern aesthetic.*

2. **Quiz Category Selection**
*[PLACEHOLDER FOR SCREENSHOT: Page showing different quiz categories and difficulty levels.]*
*Figure 7.2: Users can select their preferred quiz type.*

3. **Active Quiz Interface**
*[PLACEHOLDER FOR SCREENSHOT: A question displayed with multiple choice options and a timer.]*
*Figure 7.3: The interactive quiz taking interface.*

4. **Results & Leaderboard**
*[PLACEHOLDER FOR SCREENSHOT: The final score summary and the global leaderboard ranking.]*
*Figure 7.4: Instant score calculation and leaderboard placement.*

### 7.2 DevOps & Infrastructure Screenshots

5. **GitHub Actions Successful Pipeline**
*[PLACEHOLDER FOR SCREENSHOT: The GitHub Actions "green checkmarks" showing Test and Deploy jobs passing.]*
*Figure 7.5: Automated CI/CD pipeline executing successfully upon a git push.*

6. **Docker Containers Running on AWS EC2**
*[PLACEHOLDER FOR SCREENSHOT: Terminal output of `docker ps` on the Ubuntu instance showing frontend, backend, and mongo containers running.]*
*Figure 7.6: Containerized architecture live on the AWS cloud server.*

---

<a name="chapter-8-conclusion"></a>
## CHAPTER 8: CONCLUSION AND FUTURE SCOPE

### 8.1 Conclusion
The "Online Quiz Platform" successfully demonstrates the integration of modern full-stack web development with advanced DevOps methodologies. By utilizing React and Node.js, the application delivers a highly responsive and scalable user experience. More importantly, the integration of Docker and GitHub Actions completely automates the software delivery lifecycle. The deployment on AWS EC2 ensures that the application is accessible globally with high availability. This project serves as a robust foundational blueprint for developing enterprise-grade, cloud-native applications.

### 8.2 Future Enhancements
- **AI Integration:** Implementing an AI agent (using APIs like OpenAI) to dynamically generate quiz questions based on a user-provided topic.
- **Advanced Anti-Cheat Mechanisms:** Implementing tab-switching detection and webcam monitoring for proctored exams.
- **User Authentication:** Adding JWT-based secure login and OAuth (Google/GitHub login) for personalized user histories.
- **Kubernetes Orchestration:** Migrating from Docker Compose to Amazon EKS (Elastic Kubernetes Service) for auto-scaling capabilities under massive traffic loads.

---

## REFERENCES
1. React Documentation. (2024). *React - A JavaScript library for building user interfaces.* Retrieved from https://react.dev/
2. Node.js Documentation. (2024). *Node.js.* Retrieved from https://nodejs.org/
3. Docker Documentation. (2024). *Docker containerization.* Retrieved from https://docs.docker.com/
4. GitHub Actions. (2024). *Automate your workflow from idea to production.* Retrieved from https://github.com/features/actions
5. Amazon Web Services. (2024). *Amazon EC2 Documentation.* Retrieved from https://aws.amazon.com/ec2/
6. Freeman, E. & Robson, E. (2021). *Head First Design Patterns*. O'Reilly Media.
7. Kim, G., Humble, J., Debois, P., & Willis, J. (2016). *The DevOps Handbook*. IT Revolution Press.

---
*End of Report*
