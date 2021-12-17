import { Repository } from '../../types/repositories/index';

interface Props {
    loginRepository: Repository<void>;
}

interface loginService {
    attemptLogin: () => void;
}

function init({ loginRepository }: Props): loginService {
    return {
        attemptLogin: () => loginRepository.attemptLogin()
    };
}

export default { init };
