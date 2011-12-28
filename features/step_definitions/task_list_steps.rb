When /^I enter a task named "([^"]*)"$/ do |task_name|
  task_list.enter_task(task_name)
end

When /^I open the previous task$/ do
  task_list.open_previous_task
end

Then /^my task page contains "([^"]*)"$/ do |task_name|
  task_list.should have_task(task_name)
end
