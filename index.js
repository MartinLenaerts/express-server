import express from 'express';
import terminalLink from 'terminal-link';
import minimist from 'minimist';
import fs from 'fs';
import { exit } from 'process';

const app = new express();
const port = 5000
const host = 'http://localhost'
const url = host + ":" + port;

var argv = minimist(process.argv.slice(2));

const dir = argv['path'];

if (!dir) {
    console.error('`path` argument is expected !');
    process.exit();
}

if (!fs.existsSync(dir)) {
    console.error(`${dir} doesn't exist ! Please give a valid path !`);
    process.exit();
}

try {
    app.use(express.static(dir)); 
    app.listen(port, () => {
        
        const link = terminalLink(``, url);

        console.info(`The server is now runnning ${link}`);
    });
} catch (error) {
    console.error(exception.message);
}
