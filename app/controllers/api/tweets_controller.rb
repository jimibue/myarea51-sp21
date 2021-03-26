class Api::TweetsController < ApplicationController
    before_action :authenticate_user!, except: [:all_tweets]
    def all_tweets
       render json: Tweet.all
    end
    
    def index
        render json: current_user.tweets
    end
end
