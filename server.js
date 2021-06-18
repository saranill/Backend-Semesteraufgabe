import express from 'express';
import { Controller } from './controller/controller.js';

const app = express();
const PORT = 3001;

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
