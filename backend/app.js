const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

// CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());
app.use(cors());



app.post('/api/auth/signup', (req, res, next) =>{
    console.log(req.body);
    res.status(201).json({
        message: 'adresse validé'
    });
});

module.exports = app;