import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000; // Allow port to be configured via environment variable


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from both "public" and "backend" directories
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Import route files
import indexRoute from './route/index.js';
import aboutRoute from './route/about.js';
import contactRoute from './route/contact.js';
import signinRoute from './route/signin.js';
import checkRoute from './route/check.js';
import dashboardRoute from './route/dashboard.js';
import submitRoute from './route/submit.js';

// Use routes
app.use(indexRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(signinRoute);
app.use(checkRoute);
app.use(dashboardRoute);
app.use(submitRoute);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
