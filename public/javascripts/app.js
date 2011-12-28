(function(APP) {
  new APP.Views.NewTask();
  new APP.Views.TaskPage({ collection: APP.Tasks });
})(Achiever);
