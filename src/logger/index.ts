import env from '../config/env';
import pino from 'pino';
import fs from 'fs';

const LOG_LEVEL = env.LOG_LEVEL || 'info';
const LOG_DESTINATION = env.LOG_DESTINATION != 'none' && env.LOG_DESTINATION;
const LOG_TO_STDOUT = env.LOG_TO_STDOUT;
const STREAMS: any = [];

const OPTIONS: any = {
    level: LOG_LEVEL
};

const createSonicBoom = (dest: string) => {
  return pino.destination({dest, append: true});
};

if (LOG_DESTINATION) {
    !fs.existsSync(LOG_DESTINATION) && fs.mkdirSync(LOG_DESTINATION, { recursive: true });
    STREAMS.push(
        {stream: createSonicBoom(`${LOG_DESTINATION}/info.log`)},
        {level: 'debug', stream: createSonicBoom(`${LOG_DESTINATION}/debug.log`)},
        {level: 'error', stream: createSonicBoom(`${LOG_DESTINATION}/error.log`)},
        {level: 'fatal', stream: createSonicBoom(`${LOG_DESTINATION}/fatal.log`)},
    );
}

if (LOG_TO_STDOUT === 'true') {
    STREAMS.push({level: LOG_LEVEL, stream: pino.destination(1)});
}

const logger = pino(
    OPTIONS,
    pino.multistream(STREAMS)
);

export default logger;