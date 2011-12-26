window.Achiever = {};

(function(APP, $) {
  APP.Collections = {};
  APP.Models = {};
  APP.Views = {};

  APP.Models.Task = Backbone.Model.extend({
    defaults: {
      name: ''
    }
  });

  APP.Collections.Tasks = Backbone.Collection.extend({
    model: APP.Models.Task
  });

  APP.Tasks = new APP.Collections.Tasks();

  APP.Views.NewTask = Backbone.View.extend({
    el: '#new-task',
    events: {
      'tap .save-task': 'saveTask'
    },
    saveTask: function() {
      var task = new APP.Models.Task({ name: this.$('#task-name').val() });
      APP.Tasks.add(task);
    }
  });

  APP.Views.TaskPage = Backbone.View.extend({
    el: '#task-page',
    initialize: function() {
      _.bindAll(this);
      APP.Tasks.bind('add', this.render);
    },
    render: function() {
      if (APP.Tasks.size() > 0) {
        this.$('.content').text(APP.Tasks.first().get('name'));
      }
    }
  });

  new APP.Views.NewTask();
  new APP.Views.TaskPage();
})(window.Achiever, $);

