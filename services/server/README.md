# Trainscoding Server

This is the entry point for Trainscoding's services. It is a NodeJS Express web server.

## Usage

Run:

```sh
$ docker run --rm -e "SERVER_PORT=8080" -p 8080:8080 javiergarciagon/trainscoding-server
```

It will download a Docker image that contains the code for Trainscoding Server.

Go to: `localhost:8080/api/hi` to get a hello world message.

## Development

```sh
npm i
npm run dev
```
