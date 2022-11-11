import express from 'express';
import MailRouter from './Routes/mail.js';
import config from './Config/config.js';

const app = express();
const port = config.port || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/mail', MailRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));