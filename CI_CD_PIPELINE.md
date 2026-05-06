# CI/CD Pipeline Documentation

This document explains the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the Online Quiz Platform, utilizing GitHub Actions.

## Overview

The pipeline is defined in `.github/workflows/ci-cd.yml` and is triggered on two events:
- `push` to the `main` branch.
- `pull_request` to the `main` branch.

The pipeline ensures code quality via automated testing and automates the deployment process to our AWS EC2 instance.

## Pipeline Jobs

### Job 1: `test-and-build`
This job runs on every push and pull request to ensure that no breaking changes are introduced.

1. **Checkout Code:** Uses `actions/checkout@v3` to pull the latest repository code.
2. **Setup Node.js:** Installs Node.js v18 using `actions/setup-node@v3`.
3. **Backend CI:** 
   - Navigates to the `backend/` directory.
   - Runs `npm ci` to cleanly install dependencies.
   - Runs `npm test` to execute Jest test suites.
4. **Frontend CI:**
   - Navigates to the `frontend/` directory.
   - Runs `npm ci`.
   - Runs `npm run build` to ensure the Vite production build compiles successfully.
5. **Docker Build & Push (Optional/Commented):**
   - Logs into Docker Hub using secrets.
   - Builds and pushes the frontend and backend Docker images to a registry.

### Job 2: `deploy`
This job depends on the success of `test-and-build` and ONLY runs if the push was to the `main` branch.

1. **SSH to EC2:** Uses `appleboy/ssh-action@master` to connect to the AWS EC2 instance. It requires the following GitHub Secrets:
   - `EC2_HOST`: The public IP of the EC2 instance.
   - `EC2_USERNAME`: The SSH user (e.g., `ubuntu`).
   - `EC2_SSH_KEY`: The `.pem` private key for SSH access.
2. **Execute Deployment Script:**
   - Changes directory to the project folder (`/home/ubuntu/online-quiz-platform`).
   - Pulls the latest code using `git pull origin main`.
   - Shuts down existing containers with `docker-compose down`.
   - Rebuilds and starts the updated containers in the background using `docker-compose up -d --build`.

## Required GitHub Secrets
To make this pipeline functional, you must configure the following secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

- `EC2_HOST`
- `EC2_USERNAME`
- `EC2_SSH_KEY`
- *(Optional)* `DOCKER_USERNAME`
- *(Optional)* `DOCKER_PASSWORD`
