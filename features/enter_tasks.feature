Feature: Entering tasks

Scenario: Entering a single task
  When I enter a task named "Remember the milk"
  Then my task list contains "Remember the milk"
