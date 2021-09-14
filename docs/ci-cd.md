# Trainscoding - Continuous integration and deployment (CI/CD)

This project uses different technologies and tools to build, publish and deploy all its services.
Trainscoding's source code consists of several services communicating to each other. It follows the software development strategy called "monorepo". This means that all services live together in this repository, but they all have their own pipeline that assures quality and saves time by automating the building/publishing/deployment process.

## CI/CD philosophy

Trainscoding repository follows a source-control branching model called [Trunk Based Development](https://trunkbaseddevelopment.com/) (**TBD**).

The main purpose of using this technique is that any change to the source code that is added to the project is small, predictable and self-contained. To get the most value out of TBD, every iteration must lead to a new value delivery. Therefore, the CI/CD system needs to quick and reliable.

Overall, this makes it easier to check and expose new changes in a fast and automated way.

## Tools

### Github actions
Each change on any service or package on this repo triggers a new workflow on Github Actions. Depending on the target of those changes, different workflows will be applied. Therefore, new testing processes, builds and deploys happen.

### Makefiles
Makefiles are used at the root of the project to define the recipes for some generic targets that need to accomplish a certain goal.

The list of targets are:
- **create-env**: help to create all environment files for the project. It comes in handy when the project has been cloned and development is about to start.
- **build**: it is used by Github Actions. It accepts environment variables that condition its behaviour. That is to say, it is possible to build the whole project (all its packages and services) at once, or just select the specific component that needs to be built.

- **up**: it launches the development environment. It uses [docker-compose](https://docs.docker.com/compose/) to spin up all the services that are needed to develop new functionality.

- **test**: it works in the same way as build. It is possible to test one specific service or all of them at once, depending on the environment variables supplied.

### Registries
#### Dockerhub and Github Container Registry
All docker images generated out of the different components of the project get published in both registries when the build process has succeeded. It is possible to download images from both registries. Both registries are public.

#### Npm packages
For small packages like [eslint-config](https://github.com/MasterCloudApps-Projects/trainscoding/tree/main/packages/eslint-config) or [prettier-config](https://github.com/MasterCloudApps-Projects/trainscoding/tree/main/packages/prettier-config) there is no docker image being created. Instead, these are independent [NPM packages](https://docs.npmjs.com/about-packages-and-modules#about-packages) that can be used by the different services in the project (or any other project in the outside world). They keep their version (following [semver](https://semver.org/)) and they are independent and self-contained.

## Setup

### Services
For every change in services' code, a Github Actions workflow is dispatched in Github. The pipeline execution consists of testing and building the image that contains the newest version of the code. If everything goes well, new docker images get generated and tagged, and then, published on Docker registries.
Once new Docker images have been generated, these are used by Kubernetes to deploy a new version of the application in an automated way.
