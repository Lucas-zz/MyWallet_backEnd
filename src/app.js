import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

import router from './routes/index.js';

const app = express();
const port = 5000;
const port2 = process.env.PORT;

app.use(cors());
app.use(json());

app.use(router);

app.listen(port2, () => {
    console.log(`Servidor ${chalk.bgGreen(chalk.black(' ON '))} - Porta ${chalk.magenta(port2)} - ${chalk.blue(`http://localhost:${port2}`)}`);
});