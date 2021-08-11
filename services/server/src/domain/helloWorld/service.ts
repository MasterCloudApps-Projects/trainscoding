import { Repository } from '../../../types/repositories/index';

interface Props {
    helloWorldRepository: Repository<void>
}

interface HelloWorldService {
    getGreetings: () => void;
}

function init({ helloWorldRepository }: Props): HelloWorldService {
    return {
        getGreetings: () => helloWorldRepository.getGreetings()
    };
};

export default { init };
