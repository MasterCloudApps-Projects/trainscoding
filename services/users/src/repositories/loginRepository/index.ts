import { Repository } from 'src/types/repositories';

function attemptLogin(): string {
    return `Attempting loigin`;
}

const loginStore = {
    attemptLogin
};

function init(/* It should receive a model object if it exists */): Repository<string | void> {
    return {
        ...loginStore,
        getSchemas: () => {}
    };
}

export default { init };
