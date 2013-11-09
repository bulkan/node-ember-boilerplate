App.Task = DS.Model.extend({
  title : DS.attr(),
  done  : DS.attr()
});

App.Task.FIXTURES = [{
  id: 1,
  title: 'Finish node-ember-boilerplate',
  done: false
}, {
  id: 2,
  title: 'A dudd task',
  done: true
}];
