import express from 'express';

const router = express.Router();

function init({ helloWorldService }) {
    router.get('/', async (req, res) => {

        return res.send('Hello world!');
    });

    return router;
};

export default { init };
