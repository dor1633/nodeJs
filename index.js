import express from 'express'
import bodyParser from 'body-parser'
import usersRouter from './routers/usersRouter'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(8000, () => console.log('Example app listening on port 8000!'));