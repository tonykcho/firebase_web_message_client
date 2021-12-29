import log4js from "log4js";

module LoggerModule {
    export const logger = log4js.getLogger();

    export function start() {
        logger.level = "debug";
    }
}

LoggerModule.start();

export const logger = LoggerModule.logger;