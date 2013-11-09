window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_STACKTRACE_ON_DEPRECATION: true,
  LOG_VERSION: true,
  debugMode: true
});



App.Router.map(function(){
  this.resource('tasks', function(){
    this.resource('task', {path: '/:task_id'}, function(){
      this.route('edit');
    });

    this.route('create');
  });
});
