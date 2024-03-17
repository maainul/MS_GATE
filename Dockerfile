# Use official Node.js image as the base image
FROM node:20.10-alpine

# Specify working directory other than /
WORKDIR /usr/src/app

# Set NODE_ENV
ENV NODE_ENV production

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm ci --only=production

# Install dependencies
RUN npm install

# Copy remaining source code AFTER installing dependencies. 
# Again, copy only the necessary files
COPY . .

# Indicate expected port
EXPOSE 1337

# EXECUTE WITH CMD
CMD ["node","server.js"]



