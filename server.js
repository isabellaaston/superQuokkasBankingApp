//System Imports
import chalk from "chalk"
require('dotenv').config()

// Express
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

// Database Config
import mongoose from "mongoose"
const dbURI = process.env.MONGO_DB_URI

console.log(dbURI)

import transferMoneyController from './controllers/transferMoney';

// Utils
import excludePathsFromMiddleware from './utils/excludePathsFromMiddleware.service'
import checkEnvExists from './utils/checkEnvFileExists.service'
checkEnvExists()

// Auth Config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: 'http://localhost:3000',
    clientID: 'iIvLRODngj4VN7UQtXmPW7UWLit0Aevs',
    issuerBaseURL: 'https://dev-d3yyjm-y.eu.auth0.com'
};

// Connect Database
mongoose.connect(dbURI, { useNewUrlParser: true, dbName: 'App' },
    (err) => {
        if (err) console.error("Connecting to DB Error", err)
        else console.log(chalk.blueBright("Connected to MongoDB ✔"));
    });


// Setup Middleware
app.use(cors());
app.use(auth(config));
app.use(bodyParser.json());

app.use(excludePathsFromMiddleware(requiresAuth()))


// --------- Main App --------- // 

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.put('/transfer', transferMoneyController)

app.get('/test', (req, res) => {
    res.send('TEST')
});

export default app 
