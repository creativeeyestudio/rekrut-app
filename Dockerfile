FROM node:23-slim

# Installer Ionic CLI
RUN npm install -g @ionic/cli

WORKDIR /app

# Copier seulement les package.json au début
COPY package*.json ./

# Installer les deps
RUN npm install

# Copier les fichiers (sera écrasé par le volume ensuite)
COPY . .