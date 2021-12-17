import dotEnv from "dotenv";

dotEnv.config();

interface Config {
    usersPort: string;
}

const config: Config = {
    usersPort: process.env.USERS_PORT || "8998",
};

export default config;
