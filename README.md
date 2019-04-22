# express-roman-numeral

## Getting started

Project is known to work with [Node 10](https://nodejs.org/en/download/releases/). After cloning the project, get started executing locally with the following commands:

```bash
npm ci
npm start
# by default server should now be available on http://localhost:3000
# http://localhost:3000/romannumeral?query=61 should return "LXI"
```

## Project structure

Business logic is contained within the `/src/services` directory. For easier unit tests, services should be purely functional if possible. When interacting with models, services should allow for custom dependency injection through a DI framework or class constructor.

## Unit tests

Unit tests reside within the `tests/unit/services`. Files must end in `test.js` in order for Jest to automatically scan and execute unit test code.

Execute unit tests with the following command:

```bash
npm test
```

## Integration tests

TODO: Need to mock HTTP requests to test Express controllers and wired up behavior to services.

## Deployment

All Express requests are logged to stdout in a JSON format via `winston` and `winston-express`.

This project incudes a Dockerfile for building an image artifact. Execute the following locally or in a CI/CD pipeline to build and store a production-ready Docker image. Be sure to substitute the `REMOTE_REGISTRY`, `USER`, and `IMAGE` parameters.

```bash
docker-compose build
docker tag btsuhako/express-roman-numeral:latest REMOTE_REGISTRY.com/USER/IMAGE:tag
docker push REMOTE_REGISTRY.com/USER/IMAGE:tag
```
