const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const wowgenRouter = require('./routes/wowgen-route');

// Set default port
const port = process.env.port || 5000;

// Create express app
const app = express();

// Apply middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Implement route
app.use('/api', wowgenRouter);

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
});
  
// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
});

// Start express app
app.listen(port, function () {
    console.log(`Server started on port ${port}.`);
}); 