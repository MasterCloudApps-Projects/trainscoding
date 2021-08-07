const { serverPort } = require('../../config');

const initAppContainer = require('../router/app');

const helloWorldRepositoryContainer = require('../repositories/helloWorldRepository');
const helloWorldRepository = helloWorldRepositoryContainer.init();

const helloWorldServiceContainer = require('../domain/helloWorld/service');
const helloWorldService = helloWorldServiceContainer.init({ helloWorldRepository });

const services = {
    helloWorldService
}

const app = initAppContainer(services);

const server = app.listen(serverPort, () => {
    console.log(`Server listening on port: ${ serverPort }`);
});

module.exports = server;
