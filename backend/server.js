require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rstIndex = require('./routes/index.route');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rstIndex);


//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var varErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//start srv
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT} `));