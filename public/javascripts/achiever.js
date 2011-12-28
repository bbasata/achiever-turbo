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
      this.collection.add(task);
    }
  });

  APP.Views.TaskPage = Backbone.View.extend({
    el: '#task-page',
    events: {
      'tap .previous-task': 'previousTask'
    },
    initialize: function() {
      _.bindAll(this);
      this.collection.bind('add', this.newTask);
      this.activeTaskIndex = 0;
    },
    render: function() {
      if (!this.collection.isEmpty()) {
        this.$('.content').text(this.collection.at(this.activeTaskIndex).get('name'));
      }
    },
    newTask: function() {
      this.activeTaskIndex = this.collection.size() - 1;
      this.render();
    },
    previousTask: function() {
      if (this.activeTaskIndex > 0) {
        this.activeTaskIndex--;
      }
      this.render();
      return false;
    }
  });
})(window.Achiever, $);

