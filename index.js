import express from 'express';
import terminalLink from 'terminal-link';
import minimist from 'minimist';
import fs from 'fs';

const argv = minimist(process.argv.slice(2));
const dir = argv['path'];
const ssl = argv['ssl'];

if (!dir) {
    console.error('`path` argument is expected !');
    process.exit();
}

if (!fs.existsSync(dir)) {
    console.error(`${dir} doesn't exist ! Please give a valid path !`);
    process.exit();
}

const app = new express();
const port = 5000;
const host = (ssl ? 'https' : 'http') + '://localhost';
const url = host + ":" + port;
const link = terminalLink(``, url);

try {
    app.use(express.static(dir));

    app.listen(port, () => {

        console.info(`The server is now runnning ${link}`);
    }).on('error', (e) => {
        if (e.code === 'EADDRINUSE') {
            console.error('address already in use : ' + link)
        } else {
            console.error(e.meesage);
        }
    });
} catch (error) {
    console.error(error.message);
}
