const express = require('express');
const cors = require('cors');

const registerRoutes = require('./routes/registerRoutes');

const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(registerRoutes); 

module.exports = app;