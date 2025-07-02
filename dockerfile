FROM node:18-alpine

#create an app directory
WORKDIR /app


#Install App Dependencies
COPY package*.json ./


#RUN the nom install
RUN npm install

#Bundle app source
COPY . .


#exposing port for the applicaiton to run
EXPOSE 8080

#start command 
CMD [ "npm","start" ]