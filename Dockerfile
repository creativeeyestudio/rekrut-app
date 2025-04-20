FROM node:23

# Installation globale d'Ionic
RUN npm install -g @ionic/cli

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Lancer l'application Ionic
CMD ["ionic", "serve", "--host=0.0.0.0", "--port=8100"]
