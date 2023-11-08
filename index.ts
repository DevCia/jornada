import express from 'express';
import dotenv from 'dotenv';
import db from './db';
import contactsRouter from './routers/contactsRouter';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
db.sync().then(() => console.log('Banco de dados conectado'));

app.use('/api/contact', contactsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
