# Trainscoding

## Usage

### Prerequisites

- Docker and Docker-Compose
- Environment variables (check [file template](https://github.com/MasterCloudApps-Projects/trainscoding/blob/main/example.env))

### Run

#### Create environment files
``` sh
$ make create-env
```
Once the new environment files are created, you need to fill in the values for the variables that these files contain.

#### Run local environment
``` sh
$ make up
```

#### Check it "live"!
Go to: `localhost:8080/api/hi` to get a hello world message.


It will spin up all services that are involved in Trainscoding, such as:
- Trainscoding Server
- ...TBD

