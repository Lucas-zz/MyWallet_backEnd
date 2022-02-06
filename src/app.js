import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

import router from './routes/index.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

app.use(router);

app.listen(port, () => {
    console.log(`Servidor ${chalk.bgGreen(chalk.black(' ON '))} - Porta ${chalk.magenta(port)} - ${chalk.blue(`http://localhost:${port}`)}`);
});