import express from 'express';
import { Service } from '../../types/services';

const router = express.Router();

interface Args {
    usersService: Service<string>;
}

function init({ usersService }: Args) {
    router.get('/', async (req, res) => {
        return res.send(usersService.getAllUsers());
    });

    return router;
}

export default { init };
