var express = require('express')
  , app = express();


// Just a few task objects. This would really come from some sort of `database`
var tasks = {
  tasks: [
    {
      id: 1,
      title: 'Finish node-ember-boilerplate',
      done: false
    }, {
      id: 2,
      title: 'A dudd task',
      done: true
    }
  ]
};

app.get('/tasks', function index(req, res){
  res.send(tasks);
});


app.get('/tasks/:id', function task(req, res) {
  res.send(tasks[req.params.id]);
});


module.exports = app;
