module DrivesTheApplication
  class ApplicationDriver
    include Capybara::DSL

    def launch
      visit '/'
    end
  end

  def application
    @application ||= ApplicationDriver.new
  end
end

module DrivesTheTaskList
  class TaskListDriver
    include Capybara::DSL

    def enter_task(task)
      click_link 'New Task'
      fill_in 'Task', :with => task
      click_link 'Save'
    end

    def has_task?(task)
      find('.content').has_content?(task)
    end

    def open_previous_task
      click_link 'previous-task'
    end

    def open_next_task
      click_link 'next-task'
    end
  end

  def task_list
    @task_list ||= TaskListDriver.new
  end
end

World(DrivesTheApplication)
World(DrivesTheTaskList)
