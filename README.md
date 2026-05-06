# Online Quiz Platform with Automated Testing & CI/CD Pipeline

A production-grade full-stack web application designed for creating, managing, and attempting online quizzes. This project demonstrates modern cloud-ready DevOps practices, including Docker containerization, a Git/GitHub workflow, automated CI/CD via GitHub Actions, and deployment on AWS EC2.

## 🚀 Features

### Core Features
- Attempt quizzes without login
- Instant result calculation
- Difficulty levels (Easy, Medium, Hard)
- Category-based quizzes
- Leaderboard system and analytics tracking
- Admin panel to manage quizzes and questions

### Advanced DevOps & Architecture
- **Dockerized Environment:** Both frontend and backend are containerized.
- **CI/CD Pipeline:** Automated testing and deployment using GitHub Actions.
- **Cloud Deployment:** Hosted on AWS EC2 with Nginx as a reverse proxy.
- **Automated Testing:** 80%+ coverage using Jest and Supertest.

## 🛠 Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Testing:** Jest, Supertest
- **DevOps:** Docker, Docker Compose, GitHub Actions, AWS EC2, Nginx

## 📂 Project Structure

- `frontend/` - React frontend application
- `backend/` - Node.js API server
- `nginx/` - Reverse proxy configuration
- `.github/workflows/` - CI/CD pipeline definitions

## 📖 Documentation

- [Project Architecture & DB Schema](./ARCHITECTURE.md)
- [CI/CD Pipeline Explanation](./CI_CD_PIPELINE.md)
- [AWS EC2 Deployment Guide](./DEPLOYMENT_GUIDE.md)

## 🏃 Quick Start (Local Development)

### Prerequisites
- Docker and Docker Compose installed
- Git installed

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-quiz-platform.git
   cd online-quiz-platform
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: `http://localhost:80`
   - Backend API: `http://localhost:5000`

---
*Developed as a Major Project / Portfolio Showcase demonstrating Full-Stack and DevOps capabilities.*
