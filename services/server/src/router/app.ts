import express from 'express';
import morgan from 'morgan';
import helloWorldRouter from './routes/helloWorld';

function init(services) {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan('combined'));

    app.use('/api/hi', helloWorldRouter.init(services));

    return app;
}

export default init;
