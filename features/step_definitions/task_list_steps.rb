When /^I enter a task named "([^"]*)"$/ do |task_name|
  task_list.enter_task(task_name)
end

Then /^my task list contains "([^"]*)"$/ do |task_name|
  task_list.should have_task(task_name)
end
