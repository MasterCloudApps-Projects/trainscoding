import config from '../../config';
import loginServiceContainer from '../domain/login/service';
import loginRepositoryContainer from '../repositories/loginRepository';
import initAppContainer from '../router/app';

const loginRepository = loginRepositoryContainer.init();

const loginService = loginServiceContainer.init({
    loginRepository
});

const services = {
    loginService
};

const app = initAppContainer(services);

const server = {
    start: () =>
        app.listen(config.usersPort, () => {
            console.log(`Server listening on port: ${config.usersPort}`);
        })
};

export default server;
