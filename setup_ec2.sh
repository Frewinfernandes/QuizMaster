#!/bin/bash
set -e

echo "Updating packages..."
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

echo "Installing Docker prerequisites..."
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

echo "Adding Docker GPG key and repo..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "Installing Docker and Docker Compose..."
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose
sudo usermod -aG docker ubuntu

echo "Cloning repository..."
if [ -d "online-quiz-platform" ]; then
    echo "Directory online-quiz-platform exists. Pulling latest..."
    cd online-quiz-platform
    git pull origin main
else
    git clone https://github.com/Frewinfernandes/QuizMaster.git online-quiz-platform
    cd online-quiz-platform
fi

echo "Setting up environment variables..."
mkdir -p backend
cat <<EOF > backend/.env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb://mongo:27017/quiz-platform
EOF

echo "Starting Docker containers..."
sudo docker-compose up -d --build

echo "Setup completed successfully!"
