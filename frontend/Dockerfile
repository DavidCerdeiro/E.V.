FROM node:22-alpine
WORKDIR /app
COPY EV-frontend/package*.json ./
RUN npm install
RUN npm install vite@latest react@latest react-dom@latest
COPY EV-frontend/ .
CMD ["npm", "run", "dev"]