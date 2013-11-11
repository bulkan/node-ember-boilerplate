var express  = require('express')
  , path     = require('path')
  , jade     = require('jade')
  , stylus   = require('stylus')
  , routes   = require('./backend/routes')
  , tasks    = require('./backend/routes/tasks');


var app = express();

app.configure(function() {
  // all environments
  app.set('port', process.env.PORT || 8080);

  app.engine('.jade', jade.__express);

  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, '/backend/views'));

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({secret: "secret key"}));

  app.use(stylus.middleware({ 
      src : path.join(__dirname, '/frontend/stylesheets'),
      dest: path.join(__dirname, '/public/compiled')
    }
  ));

  app.use(app.router);
  app.use(express.static(__dirname + '/public/' ));
  app.use('/', express.static(__dirname + '/frontend/' ));
})

//app.get('/',routes.index);

app.get('/tasks', tasks.index)


app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
