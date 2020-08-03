const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const users = require('./models/users');
const sauces = require('./models/sauces');
var cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://ludovicgendre:test01@cluster0.lopms.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(cors());



app.post('/api/auth/signup', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'adresse validé'
    });
});

app.post('/api/auth/login', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'adresse validé'
    });
});

app.post('/api/sauces', (req, res, next) => {
    const sauces = new sauces({
        ...req.body
    });
    sauces.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;