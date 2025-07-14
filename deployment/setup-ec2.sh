#!/bin/bash

# Run this script on your EC2 instance after SSH
sudo apt update -y
sudo apt install -y docker.io
sudo usermod -aG docker ubuntu
newgrp docker

# Optional: Allow Docker to start on boot
sudo systemctl enable docker

echo "Docker installed and configured."
