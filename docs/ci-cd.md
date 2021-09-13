# Trainscoding - Continuous integration and deployment (CI/CD)

This project uses different technologies and tools to build, publish and deploy all its services.
Trainscoding's source code consists of a several services communicating to each other. It follows the software development strategy called "monorepo". This means that all services live together in this repository, but they all have their own pipeline that assures quality and saves time by automating the building/publishing/deployment process.

## CI/CD philosophy

Trainscoding repository follows a source-control branching model called [Trunk Based Development](https://trunkbaseddevelopment.com/) (**TBD**).

The main purpose of using this technique is that any change to the source code that is added to the project is small, predictacble and self-contained. In order to get the most value out of TBD, every iteraction must lead to a new value delivery. Therefore, the CI/CD system needs to quick and reliable.

Overall, this makes easier to check and expose new changes in a fast and automated way.

## Tools
TBC...

