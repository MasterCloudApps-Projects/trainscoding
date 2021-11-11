import { Repository } from 'src/types/repositories';

function attemptLogin(): string {
    return `Attempting loigin`;
}

const helloWorldStore = {
    attemptLogin
};

function init(/* It should receive a model object if it exists */): Repository<string | void> {
    return {
        ...helloWorldStore,
        getSchemas: () => {}
    };
}

export default { init };
