import express from "express";

import { logger } from "./logger";

export module ExpressModule {
    const app = express();
    const port = 3000;

    export function start() {
        app.use(express.static('src/www'));

        app.listen(port, () => {
            logger.info(`Example app listening at http://localhost:${port}`);
        })
    }
}