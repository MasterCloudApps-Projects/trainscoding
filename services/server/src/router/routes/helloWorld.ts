import express from 'express';
import { Service } from '../../types/services';

const router = express.Router();

interface Args {
    helloWorldService: Service<string>;
}

function init({ helloWorldService }: Args) {
    router.get('/hi', async (req, res) => {
        return res.send(helloWorldService.getGreetings());
    });

    return router;
}

export default { init };
