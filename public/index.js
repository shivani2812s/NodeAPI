const express = require('express');
const Port = 8000;
const app = express();
const api = require('../router/api');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',api);
app.listen(Port, () => {
    console.log(`Example app http://127.0.0.1:${Port}`)
})
