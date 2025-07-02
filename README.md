IMPORT NOTES TO BE TAKEN RELATED TO DOCKER DEPLOYMENTS


build a new docker image ----------->    docker build . -t sisuka/node-with-docker-app:v1
run the docker container ----------->    docker run -d -p 8001:8080 sisuka/node-with-docker-app:v1
stop docker container -------------->    docker stop [CONTAINER ID]
start the docker container --------->    docker start [CONTAINER ID]

View all docker images ------------->    docker images
View all docker containers --------->    docker ps -a
View logs of the running container-->    docker logs [CONTAINER ID]

