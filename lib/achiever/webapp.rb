require 'sinatra/base'

module Achiever
  class WebApp < Sinatra::Base
    set :public_folder, 'public'
    set :static, true

    get '/' do
      File.read(File.join('public', 'index.html'))
    end
  end
end
