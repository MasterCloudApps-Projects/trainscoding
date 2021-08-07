const express = require('express');
const router = express.Router();

function init({ helloWorldService }) {
    router.get('/', async (req, res) => {

        return res.send('Hello world!');
    });

    return router;
};

module.exports = { init };
