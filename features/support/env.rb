$LOAD_PATH << File.expand_path('../../../lib', __FILE__)

require 'achiever'
require 'capybara/cucumber'
require 'ruby-debug'

Capybara.default_driver = :selenium
Capybara.app = Achiever::WebApp
