import config from '../../config';
import helloWorldServiceContainer from '../domain/helloWorld/service';
import helloWorldRepositoryContainer from '../repositories/helloWorldRepository';
import initAppContainer from '../router/app';

const helloWorldRepository = helloWorldRepositoryContainer.init();

const helloWorldService = helloWorldServiceContainer.init({
    helloWorldRepository
});

const services = {
    helloWorldService
}

const app = initAppContainer(services);

const server = {
    start: () => app.listen(config.serverPort, () => {
            console.log(`Server listening on port: ${ config.serverPort }`)
        }
    )
};

export default server;
