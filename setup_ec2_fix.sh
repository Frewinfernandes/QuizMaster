#!/bin/bash
set -e

echo "Fixing broken apt packages..."
sudo dpkg -o Dpkg::Options::="--force-overwrite" -i /var/cache/apt/archives/docker-compose-v2_*.deb || true
sudo apt-get --fix-broken install -y

echo "Ensuring Docker is installed properly..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

echo "Setting up repository..."
if [ -d "online-quiz-platform" ]; then
    echo "Directory exists. Pulling latest..."
    cd online-quiz-platform
    git pull origin main || true
else
    git clone https://github.com/Frewinfernandes/QuizMaster.git online-quiz-platform
    cd online-quiz-platform
fi

echo "Overwriting Dockerfile to use Node 20..."
cat << 'EOF' > frontend/Dockerfile
# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom Nginx configuration if needed (e.g., for React Router)
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

echo "Setting up environment variables..."
mkdir -p backend
cat <<EOF > backend/.env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb://mongo:27017/quiz-platform
EOF

# Using docker compose plugin instead of the standalone tool
echo "Starting Docker containers..."
sudo docker compose up -d --build

echo "Setup completed successfully!"
