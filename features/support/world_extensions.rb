module DrivesTheApplication
  class ApplicationDriver
    include Capybara::DSL

    def launch
      visit '/index.html'
    end
  end

  def application
    @application ||= ApplicationDriver.new
  end
end

module DrivesTheTaskList
  class TaskListDriver
    include Capybara::DSL

    def launch_achiever_once
      visit '/index.html'
      define_singleton_method(:launch_achiever_once) {}
    end

    def enter_task(task)
      launch_achiever_once
      click_link 'New Task'
      fill_in 'Task', :with => task
      click_link 'Save'
    end

    def has_task?(task)
      find('.content').has_content?(task)
    end

    def open_previous_task
      click_link 'Previous Task'
    end
  end

  def task_list
    @task_list ||= TaskListDriver.new
  end
end

World(DrivesTheApplication)
World(DrivesTheTaskList)
