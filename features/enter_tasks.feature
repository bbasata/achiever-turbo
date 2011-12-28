Feature: Entering tasks
  Background:
    Given I have launched Achiever

  Scenario: Entering a single task
    When I enter a task named "Remember the milk"
    Then my task page contains "Remember the milk"

  Scenario: Entering multiple tasks
    When I enter a task named "Remember the milk"
    And I enter a task named "Make plum pudding"
    Then my task page contains "Make plum pudding"
    
    When I open the previous task
    Then my task page contains "Remember the milk"
