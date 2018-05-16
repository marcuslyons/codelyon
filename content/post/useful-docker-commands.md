---
title: "Useful Docker Commands"
date: 2018-03-21T16:40:21-06:00
draft: false
keywords: "docker, docker-compose, containers, containerization, cloud, vm, redis, microservices, developer, dev, development, software, convenience, article, blog post, blog"
---

Every now and then you just need a good reference

<!--more-->

<br>
## Docker Machine

docker-machine commands aren't needed if using the GUI toolkit, but where's the fun in that?

<pre><code class="text">docker-machine start - Start VM

docker-machine stop - Stop VM

docker-machine env - Display Docker client setup commands</code></pre>

<br>
## Docker

<pre><code class="text">docker - List Docker CLI commands

docker <command> --help - Get help on a specific command

docker pull <Name of Image> - Pull image from Docker Hub

docker images - Show all images

docker rmi <ImageID> - Remove specific images

docker ps -a - Show all containers based on Docker env config

docker rm <ContainerID> -Remove specific container

docker rm $(docker ps -a -q) Remove all containers

docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}' - Formatted list of containers

docker run -d --name <Container Name> -p <External Port:Container Port> <Your Image> - Run a container in daemon mode bound to specified port

docker build -f <Your Dockerfile> -t <Tag Name> . - Build an image from a Dockerfile

docker login - Login using your Docker Hub credentials

docker push <Your Image Name> - Push an image to Docker hub</code></pre>


<br>
## Docker Compose

<pre><code class="text">docker-compose build - Build images based on docker-compose

docker-compose up -d - Start in daemon mode

docker-compose logs - Show logs from containers | useful in daemon mode

docker-compose up - Start containers based on docker-compose.yml

docker-compose up -d --no-deps --build <service_name> - Rebuild and deploy just the container that needs updating

docker-compose -f <Filepath> up - Start containers using docker-compose file in another directory

docker-compose stop - Stop containers but dont remove them

docker-compose down - Stop and remove containers | CTRL+C/CMD+C can also be used but this is safer</code></pre>