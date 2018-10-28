---
title: "Useful Docker Commands"
date: 2018-03-21T16:40:21-06:00
path: /useful-docker-commands
draft: false
keywords: "docker, docker-compose, containers, containerization, cloud, vm, redis, microservices, developer, dev, development, software, convenience, article, blog post, blog"
---

Every now and then you just need a good reference

<!--more-->

<br>

## Docker Machine

docker-machine commands aren't needed if using the GUI toolkit, but where's the fun in that?

```
# Start VM
docker-machine start

# Stop VM
docker-machine stop

# Display Docker client setup commands
docker-machine env
```
<br>

## Docker
```
# List Docker CLI commands
docker

# Get help on a specific command
docker <command> --help

# Pull image from Docker Hub
docker pull <Name of Image>

# Show all images
docker images

# Remove specific images
docker rmi <ImageID>

# Show all containers based on Docker env config
docker ps -a

# Remove specific container
docker rm <ContainerID>

# Remove all containers
docker rm $(docker ps -a -q)

# Formatted list of containers
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}'

# Run a container in daemon mode bound to specified port
docker run -d --name <Container Name> -p <External Port:Container Port> <Your Image>

# Build an image from a Dockerfile located in the current directory
docker build -f <Your Dockerfile> -t <Tag Name> .

# Login using your Docker Hub credentials
docker login

# Push an image to Docker hub
docker push <Your Image Name>
```
<br>

## Docker Compose
```
# Build images based on docker-compose
docker-compose build

# Start in daemon mode
docker-compose up -d

# Show logs from containers | useful in daemon mode
docker-compose logs

# Start containers based on docker-compose.yml
docker-compose up

# Rebuild and deploy just the container that needs updating
docker-compose up -d --no-deps --build <service_name>

# Start containers using docker-compose file in another directory
docker-compose -f <Filepath> up

# Stop containers but dont remove them
docker-compose stop

# Stop and remove containers | CTRL+C/CMD+C can also be used but this is safer
docker-compose down
```