import { Repository } from 'src/types/repositories';

function getGreetings(): string {
    return `Hello world! I'm using okteto, for real! inside a container!`;
}

const helloWorldStore = {
    getGreetings
};

function init(/* It should receive a model object if exists */): Repository<string | void> {
    return {
        ...helloWorldStore,
        getSchemas: () => {}
    };
}

export default { init };
