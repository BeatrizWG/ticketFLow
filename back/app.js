const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const registerRoutes = require('./routes/registerRoutes');
const ticketRegistrationRoutes = require('./routes/TicketRegistrationRoutes')

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://ticket-flow-fawn.vercel.app'],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(ticketRegistrationRoutes)
app.use(authRoutes); 
app.use(registerRoutes); 

module.exports = app;
