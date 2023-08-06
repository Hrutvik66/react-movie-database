# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json /app
RUN npm install

# Copying all the files in our project
COPY . .

#Exposing port 3000
EXPOSE 3000

# Starting our application
CMD ["npm","start"]