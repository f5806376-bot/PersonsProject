
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import crypto from 'crypto';
import dbConnect from './dal/mongoConnect.js';
import personRouter from './routes/personRouter.js';


if (!global.crypto) {
    global.crypto = crypto;
}

const PORT = process.env.PORT || 3000;

const app = express();

await dbConnect();

app.use(cors());
app.use(express.json());

app.use('/persons', personRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Persons API');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
