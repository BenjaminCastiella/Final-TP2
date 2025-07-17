import express from 'express';

const app = express();
// MIDDLEWARES
app.use(express.urlencoded({extended: true})); // Parsea datos codificados del body a formato objeto JS
app.use(express.json()); // Parsea datos del body en formato JSON a formato objeto JS


app.listen(80, () => {console.log('ok')});