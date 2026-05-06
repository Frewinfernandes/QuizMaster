# AWS EC2 Deployment Guide

This guide details how to deploy the Online Quiz Platform onto an AWS EC2 instance running Ubuntu 22.04 LTS.

## Prerequisites
- An AWS Account
- An EC2 Instance (t2.micro is sufficient for dev/testing, t3.medium recommended for production) running Ubuntu 22.04 LTS.
- Security Group allowing inbound traffic on ports `80` (HTTP), `443` (HTTPS), and `22` (SSH).
- An Elastic IP assigned to the instance.

## Step 1: Initial Server Setup

1. SSH into your EC2 instance:
   ```bash
   ssh -i /path/to/your-key.pem ubuntu@<your-ec2-ip>
   ```

2. Update system packages:
   ```bash
   sudo apt-get update && sudo apt-get upgrade -y
   ```

## Step 2: Install Docker & Docker Compose

1. Install Docker:
   ```bash
   sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update
   sudo apt-get install -y docker-ce docker-ce-cli containerd.io
   ```

2. Add user to Docker group (so you don't need `sudo` for docker commands):
   ```bash
   sudo usermod -aG docker ubuntu
   ```
   *Note: Log out and log back in for this to take effect.*

3. Install Docker Compose:
   ```bash
   sudo apt install docker-compose -y
   ```

## Step 3: Clone Repository & Configure Environment

1. Clone your GitHub repository:
   ```bash
   git clone https://github.com/yourusername/online-quiz-platform.git
   cd online-quiz-platform
   ```

2. Setup `.env` file in the backend directory:
   ```bash
   nano backend/.env
   ```
   Add the following variables:
   ```env
   NODE_ENV=production
   PORT=5000
   MONGO_URI=mongodb://mongo:27017/quiz-platform
   ```

## Step 4: Run the Application

1. Start the containers in detached mode:
   ```bash
   docker-compose up -d --build
   ```

2. Verify containers are running:
   ```bash
   docker ps
   ```

## Step 5: Setting up Nginx Reverse Proxy (Optional, if not using containerized Nginx)
If you prefer to run Nginx on the host machine rather than in a Docker container:
```bash
sudo apt install nginx -y
sudo cp nginx/default.conf /etc/nginx/sites-available/default
sudo systemctl restart nginx
```

Your platform is now accessible via the EC2 instance's Public IP address.
