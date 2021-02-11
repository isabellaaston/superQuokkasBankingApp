// Express
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

// Utils
import excludePathsFromMiddleware from './Utils/excludePathsFromMiddleware.service'

// Auth Config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'iIvLRODngj4VN7UQtXmPW7UWLit0Aevs',
    issuerBaseURL: 'https://dev-d3yyjm-y.eu.auth0.com'
};

// Setup Middleware
app.use(cors());
app.use(auth(config));
app.use(bodyParser.json());

app.use(excludePathsFromMiddleware(requiresAuth()))


// Main App

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});


export default app 