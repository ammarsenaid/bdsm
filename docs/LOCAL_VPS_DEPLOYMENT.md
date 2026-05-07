# Local VPS Deployment

## Prepare server
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl ca-certificates
```

## Install Docker
```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker "$USER"
newgrp docker
```

## Deploy app
```bash
git clone https://github.com/ammarsenaid/bdsm.git
cd bdsm
cp .env.example .env
npm install
npm run build
docker compose up --build -d
docker compose ps
docker compose logs -f web
curl http://localhost:3000/api/health
```
