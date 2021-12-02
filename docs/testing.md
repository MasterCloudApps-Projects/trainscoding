# Testing
All packages in Trainscoding are provided with unit tests. Theses tests run over the testing framework [Jest](https://jestjs.io).


## Running tests locally
Locally, it is possible to run tests per pacakge

```sh
SCOPE=<package-X> make test
```

or for the whole project at once.

```sh
make test
```
## Running test in CI
During CI time, the [Github Actions](https://docs.github.com/es/actions) workflows are configured to be able to run only the specific test suite that affects to the part of the code that has been changed in the last commit or group of commits.

Check workflows [here](https://github.com/MasterCloudApps-Projects/trainscoding/tree/main/.github/workflows).
