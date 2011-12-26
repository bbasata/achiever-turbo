module DrivesTheTaskList
  class TaskListDriver
    include Capybara::DSL

    def enter_task(task)
      visit '/index.html'
      click_link 'New Task'
      fill_in 'Task', :with => task
      click_link 'Save'
    end

    def has_task?(task)
      find('.content').has_content?(task)
    end
  end

  def task_list
    @task_list ||= TaskListDriver.new
  end
end

World(DrivesTheTaskList)
