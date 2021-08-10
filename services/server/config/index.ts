import dotEnv from 'dotenv';

dotEnv.config();

interface Config {
    serverPort: string;
}

const config: Config = {
    serverPort: process.env.SERVER_PORT || '8080'
}

export default config;
