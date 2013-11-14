
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

module.exports.index = function(req, res){
  res.send(tasks);
}


module.exports.edit = function(req, res) {
  

};
