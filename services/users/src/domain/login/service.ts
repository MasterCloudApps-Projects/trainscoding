import { Repository } from '../../types/repositories/index';

interface Props {
    loginRepository: Repository<void>;
}

interface HelloWorldService {
    attemptLogin: () => void;
}

function init({ loginRepository }: Props): HelloWorldService {
    return {
        attemptLogin: () => loginRepository.attemptLogin()
    };
}

export default { init };
