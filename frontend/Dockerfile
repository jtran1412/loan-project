FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build
CMD ["npm", "start"] 