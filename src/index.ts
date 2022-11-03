require ('dotenv').config ();

import express from 'express';
import {PORT} from './config/constants';
import {router} from './routes/Mine';
import {ConcessionRouter} from './routes/Concessions';

const app = express();
app.use (express.json());

//app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});

//mine
app.get('/mine/show/:id', router);
app.post('/mine/add', router);
app.put('/mine/update/:id', router);
app.delete('/mine/delete/:id', router);

//concession
app.get('/concessions/show/:id', ConcessionRouter);
app.post('/concessions/add', ConcessionRouter);
app.put('/concessions/update/:id', ConcessionRouter);
app.delete('/concessions/delete/:id', ConcessionRouter);

