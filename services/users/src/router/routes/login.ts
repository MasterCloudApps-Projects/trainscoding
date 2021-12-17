import express from "express";
import { Service } from "../../types/services";

const router = express.Router();

interface Args {
    loginService: Service<string>;
}

function init({ loginService }: Args) {
    router.get("/login", async (req, res) => {
        return res.send(loginService.attemptLogin());
    });

    return router;
}

export default { init };
