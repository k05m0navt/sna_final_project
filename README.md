
# SNA Final project report
**Using Docker-Compose to deploy your application with frontend and backend.**

## Team: 
Daniil Gubaidullin, Amir Khuzin, Truong Nguyen, Kseniya Kudasheva

***

## Content
1. [Description](#description)
> * [Project description](#project-description)
> * [App description](#app-description)
2. [Dockerfile](#dockerfile)
> * [Server side](#server-side)
> * [Client side](#client-side)
3. [docker-compose](#docker-compose)
> * [Settings](#settings)
> * [Build](#build)
4. [Issues](#issues)
5. [Installation](#installation)

***

## Description 

### Project description
The goal of this project is to learn how to create Dockerfiles for different 
run and environments, how to construct docker-compose to run project. 

We will show how to deploy a project to the Docker container on
the React and Node.js [web-application](https://github.com/k05m0navt/sna_final_project)


## App description
Sometimes we are bored and feel like productive. However no ideas came to our mind.
Our web-application is born to solve this problem. You can randomly generate 
fun/useful/practical daily goals by just one click. We hope when you will need it,
the app will fulfill your day with excitement and productivity.

#### Technology stack:
Node js, Docker, Docker-compose, HTML, CSS

#### Architecture
![sequence diagram](https://lh3.googleusercontent.com/pw/AM-JKLUqzs80uPNj9-t2_ZsEYi7dSP_jgRuoTdfP2BeeCDSKRI727mLR26cY5rUnatVMGdJyZLDc8UiOXCMMbmGDPg-2kOps_R6QjP6_NXllUEJLhA4W49boRG7iyhgJk74zaqCzJLyj7lzcAhJHrH5i5ICB=w522-h383-no?authuser=0)
Back-end: Generate activity to suggest user 
> http://localhost:3001/api/find_new_activity

Front-end: Interact with users, display generated activity
> http://localhost:3000/

## Dockerfile

### Server side

```
FROM node:17.0.1
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "start"]
```

### Client side

```
FROM node:17.0.1
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "start"]
```

## docker-compose

### Settings
This is the configuration file we used to tell Docker Compose how our 
web-application is built.

```
version: "3"

services:
    backend:
        build:
            context: ./server
            dockerfile: ./Dockerfile
        ports:
            - "3001:3001"
    frontend:
        build:
            context: ./client
            dockerfile: ./Dockerfile
        ports:
            - "3000:3000"
```

#### **services**
We have two individual components (servers) that this docker-compose file will 
be in charge of starting and connecting. As you see backend does not depend on 
server side, therefore none of them has `depends_on` line.

#### **build**
In `build` we specified directory where Dockerfile is placed, this Dockerfile will
be delivered to `docker build` when build is run.

#### **ports**
Services can expose ports to the host machine, allowing the host to access the
services running on the container’s ports or route external connections to 
the container’s ports. Here we have direct mapping `- "3001:3001"`.

#### **frontend**
For `frontend` service configuration kind of the same. Most configurations 
are set in Dockerfile, for both frontend and backend, you can view this Dockerfiles
in [Dockerfile](#dockerfile) section.

### Build
After all configurations you can run docker-compose.yml.

You can use `docker-compose up -d` to start the services in the background.
If you need to stop the services, you can use `docker-compose down`.
If you need to rebuild the images, you can use `docker-compose build`.

## Issues
1. First problem occured when we ran Dockerfile for the server, because our initial configuration
was not perfect, there was version conflict. We specified the newest version of node.js,
this version by default has `openssl` module, however some errors were thrown. To solve this
issue we specified older version, and added dop configurations to package.json on client side.

2. After finishing first problem another one occured.

## Installation

1. Clone github:
> git clone https://github.com/k05m0navt/sna_final_project
2. Locate to "sna_final_project" folder:
> cd sna_final_project
3. Fetch docker image and run project:
> docker-compose up

The docker-compose file will locate Dockerfile's in each folder "client" and "server" and build and run the corresponding images and container.

Here the default port for:
| service      | port |
| ----------- | ----------- |
| client      | 3000       |
| server   | 3001        |


## Conclusion:
A simple web-application using technologies learnt from SNA course has solved a fairly simple problem.
We sincerely express our gratefulness to Prof. Sillitti as well as all the TAs for guiding us through the course.
