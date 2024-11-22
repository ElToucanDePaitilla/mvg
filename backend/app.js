
const express = require('express');

const app = express();

app.use ((req, res, next) => {
    console.log('Requête Middleware 01 reçue ! 👍');
    next();
});

app.use ((req, res, next) => {
    res.status('201');
    next();
});

app.use((req, res, next) => {
    res.json({message: 'Requête Middleware 02 reçue ! 🎉'});
});


module.exports = app;