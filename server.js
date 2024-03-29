const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'});

connectDB();

const transaction =require('./routes/transaction');

const app =express();

app.use(express.json());

if(process.env.NODE_ENV == 'developmet'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transaction', transaction);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index/html')));
}
let PORT = process.env.PORT || 8888;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);