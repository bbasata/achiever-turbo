Feature: Browsing tasks

  Background:
    Given I have launched Achiever
    And I have entered a task named "Remember the milk"
    And I have entered a task named "Make plum pudding"
    And I have entered a task named "Write a poem"

  Scenario: Browsing back and forward
    When I open the previous task
    Then my task page contains "Make plum pudding"

    When I open the next task
    Then my task page contains "Write a poem"
