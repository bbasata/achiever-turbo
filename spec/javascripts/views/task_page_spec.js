var APP = Achiever;
window.context = window.describe;

describe('APP.Views.TaskPage', function() {
  var collection, taskPage, contentEl;

  function addTasks() {
    _(arguments).each(function(name) {
      collection.add(new Backbone.Model({ name: name }));
    });
  }
  var addTask = addTasks;

  beforeEach(function() {
    var viewEl = inject('<div id="task-page"><div class="content"></div></div>');
    contentEl = $('.content', viewEl);

    collection = new Backbone.Collection();
    taskPage = new APP.Views.TaskPage({ collection: collection });
  });

  context('with no tasks', function() {
    beforeEach(function() {
      taskPage.render();
    });

    it('renders nothing', function() {
      expect(contentEl).toHaveText('');
    });
  });

  context('with one task', function() {
    beforeEach(function() {
      addTask('Task One');
    });

    it('renders the name of the task', function() {
      expect(contentEl).toHaveText('Task One');
    });
  });

  context('with multiple tasks', function() {
    beforeEach(function() {
      addTasks('Task One', 'Task Two');
    });

    it('renders the name of the newest task', function() {
      expect(contentEl).toHaveText('Task Two');
    });
  });

  describe('going to the previous task', function() {
    context('with two tasks', function() {
      beforeEach(function() {
        addTasks('Task One', 'Task Two');
      });

      context('done once', function() {
        beforeEach(function() {
          taskPage.previousTask();
        });

        it('renders the name of the first task', function() {
          expect(contentEl).toHaveText('Task One');
        });
      });

      context('done twice', function() {
        beforeEach(function() {
          taskPage.previousTask();
          taskPage.previousTask();
        });

        it('renders the name of the first task', function() {
          expect(contentEl).toHaveText('Task One');
        });
      });
    });
  });
  
  describe('going to the next task', function() {
    context('with two tasks', function() {
      beforeEach(function() {
        addTasks('Task One', 'Task Two');
        taskPage.previousTask();
      });

      context('done once', function() {
        beforeEach(function() {
          taskPage.nextTask();
        });

        it('renders the name of the first task', function() {
          expect(contentEl).toHaveText('Task Two');
        });
      });

      context('done twice', function() {
        beforeEach(function() {
          taskPage.nextTask();
          taskPage.nextTask();
        });

        it('renders the name of the first task', function() {
          expect(contentEl).toHaveText('Task Two');
        });
      });
    });
  });

});
