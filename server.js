import express from 'express';
import cors from 'cors';
import { Controller } from './controller/controller.js';

export const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(express.json({ limit: '20mb' }));

app.get('/', (request, response) => {
    response.send('Willkommen bei Plants with Friends');
});
app.post("/plants", Controller.create);
app.get("/plants", Controller.readAll);


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});
