# Infrastructure

Trainscoding is a monorepo that contains several independent packages that communicate to each other.

## Services and libraries
<p align="center">
  <img src="https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docs/images/monorepo-arch.jpg?raw=true" alt="Trainscoding cover image"/>
</p>

In the image above, interaction among project's CLI and packages is described. Also, it is explained how services and libraries get released and deployed.

## Infrastructure
<p align="center">
  <img src="https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/docs/images/infra.jpg?raw=true" alt="Trainscoding cover image"/>
</p>

[Lerna](https://github.com/lerna/lerna) is the tool in charge of running different operations across multiple packages at once. This makes building, testing, linting and deploying easier.
