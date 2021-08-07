const express = require('express');
const helloWorldRouter = require('./routes/helloWorld');

function init(services) {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/api/hi', helloWorldRouter.init(services));

    return app;
};

module.exports = init;
