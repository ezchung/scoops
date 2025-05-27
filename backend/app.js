var createError = require('http-errors'); // Utility for creating HTTP errors
var express = require('express'); // Express framework
var path = require('path'); // Node.js built-in module for handling file paths
var cookieParser = require('cookie-parser'); // Middleware to parse Cookie header and populate req.cookies. Helpful for authentication and session management
var logger = require('morgan'); //HTTP request logger middleware for Node.js

var indexRouter = require('./routes/index'); //Router for the routes starting with /
var usersRouter = require('./routes/users'); //Router for the routes starting with /users
// var destinationsRouter = require('./routes/destinations'); //Router for the routes starting with /destinations

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Tells Express where to find the views directory
app.set('view engine', 'jade'); //May be unused if not rendering server-side views. We are using React

app.use(logger('dev')); // Use morgan for logging HTTP requests
app.use(express.json()); //To parse JSON req bodies
app.use(express.urlencoded({ extended: false })); //Parses URL encoded req bodies
app.use(cookieParser()); //To parse Cookie header and populate req.cookies
app.use(express.static(path.join(__dirname, 'public'))); //Serves static files from the public directory

// --- API ROUTE DEFINITION ---
app.use('/api', indexRouter); //Mounts the index router at the root path
app.use('/api/users', usersRouter); //Mounts the users router at the /users path
// app.use('/api/destinations', destinationsRouter); //Mounts the destinations router at the /destinations path

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'THe requested resource was not found.')); //Creates a 404 error if no route matches
});

// error handler
app.use(function(err, req, res, next) {

  console.error("Global Error Handler Caught: ",err.message);

  if(req.app.get('env') === 'development'){
    console.error("Stack Trace: ", err.stack);
  }
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || 'An unexpected error occurred.',
      // Optionally, include more error details in development
      // stack: req.app.get('env') === 'development' ? err.stack : undefined,
      // type: err.name // e.g. 'ValidationError'
    }
  });
});

module.exports = app;
