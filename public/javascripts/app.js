(function(APP) {
  new APP.Views.NewTask({ collection: APP.Tasks });
  new APP.Views.TaskPage({ collection: APP.Tasks });
})(Achiever);
