require 'sinatra/base'

module Achiever
  class WebApp < Sinatra::Base
    set :public_folder, 'public'
    set :static, true
  end
end
