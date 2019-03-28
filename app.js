var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// var mongoose = require('mongoose');
// var dbUrl = "mongodb://<dbuser>:<dbpassword>@ds125616.mlab.com:25616/heroku_jv875042";

// mongoose.connect(dbUrl, {useNewUrlParser: true});

server.listen(80);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

players = {};

io.on('connection', function(socket) {
    console.log("A user has connected");
    console.log("your socket id is: " + socket.id);
    var roomName = generateRoomName();
    console.log("Your room name is: " + roomName);
    socket.emit('roomName', roomName);
    socket.on("disconnect", function() {
        console.log("A user has disconnected");
    });
});

module.exports = app;

function generateRoomName() {
    const adjectives = [
        "fiesty", "awesome", "serious", "angry",
        "eine", "kleine", "nachtmusik"
    ];
    return adjectives[Math.floor(Math.random()*adjectives.length)]
}