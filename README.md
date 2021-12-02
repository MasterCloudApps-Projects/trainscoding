# Trainscoding

<p align="center">
  <img src="https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docs/images/trainscoding.jpg?raw=true" alt="Trainscoding cover image"/>
</p>

Trainscoding is a monorepo project that wants to demostrate how an automated approach would work for a microservices Javascript based application.

This project is the MSc Thesis for [Master CloudApps 2020](https://www.codeurjc.es/mastercloudapps/) by Universidad Rey Juan Carlos of Madrid.
The current setup exposes a simple distributed architecture with multiple services that get deployed automatically to the cloud.
The goal of this project emphasizes in the development side of working with monorepos and its continuous integration, delivery and deployment of all the services and libraries that compose the application.

Trainscoding consists of two libraries that are used to manage code's quality in the whole code base, and two services that are taken as example of how to deal with automation on a monorepo scenario and a distributed landscape.

<p align="center">
  <img src="https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docs/images/simple-arch.png?raw=true" alt="Trainscoding simplified architecture"/>
</p>

## Pipeline status
[![GitHub](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/MasterCloudApps-Projects/trainscoding/actions)
### Libraries
![Publish libraries workflow](https://github.com/MasterCloudApps-Projects/trainscoding/actions/workflows/publish.yml/badge.svg) <br>
### Services
![Server service workflow](https://github.com/MasterCloudApps-Projects/trainscoding/actions/workflows/server.yml/badge.svg) <br>
![Users service workflow](https://github.com/MasterCloudApps-Projects/trainscoding/actions/workflows/users.yml/badge.svg)


## Development

### Prerequisites

- Docker and Docker-Compose
- Environment variables (check [file template](https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docker/environment/development/example.env))

### Run

#### Create environment files
``` sh
$ make create-env
```
Once the new environment files are created,** you need to fill** in the values for the variables that these files contain.

#### Run local environment
``` sh
$ make up
```
Runs all services available in Trainscoding using [Docker Compose](https://docs.docker.com/compose/) and a local instance of [Traefik Proxy](https://doc.traefik.io/traefik/).

<p align="center">
  <img src="https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docs/images/local-dev.jpg?raw=true" alt="Trainscoding cover image"/>
</p>

#### Check it "live"!
##### Server endpoint example
Go to: `localhost/api/hi` to get a hello world message.
##### Users endpoint example
Go to: `localhost/users/login` to get a hello world message.

It will spin up all services that are involved in Trainscoding, such as:
- Trainscoding Server
- Traincoding Users



