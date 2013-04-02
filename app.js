/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes/routes')
    , user = require('./routes')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , colors = require('colors');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    /*  app.use(express.static(path.join(__dirname, 'resources')));
      app.use(express.static(path.join(__dirname, 'views/partials')));*/
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

routes(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
