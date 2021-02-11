//System Imports
import chalk from "chalk"
require('dotenv').config()

// Express
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

// Handlebars
import Handlebars from 'handlebars'
import expressHandlebars from 'express-handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

// Database Config
import mongoose from "mongoose"
const dbURI = process.env.MONGO_DB_URI

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
    clientID: 'GyaOKZFpFaw5ute7yOKb8a3VqWTIzbrA',
    issuerBaseURL: 'https://dev-d3yyjm-y.eu.auth0.com'
};


// Connect Database
mongoose.connect(dbURI, { useNewUrlParser: true, dbName: 'App' },
    (err) => {
        if (err) console.error("Connecting to DB Error", err)
        else console.log(chalk.blueBright("Connected to MongoDB ✔"));
    });


// Setup Middleware
app.use(express.static('public'))
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

app.use(cors());
app.use(auth(config));
app.use(bodyParser.json());

app.use(excludePathsFromMiddleware(requiresAuth()))


// --------- Main App --------- // 

app.get('/', (req, res) => {
    res.render('profile', {
        data: {
            loginStatus: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
        }
    })
});

app.get('/profile', (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.get('/test', (req, res) => {
    res.send('TEST')
});



export default app 