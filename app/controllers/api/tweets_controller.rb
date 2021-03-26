class Api::TweetsController < ApplicationController
    before_action :authenticate_user!, except: [:all_tweets]
    def all_tweets
       render json: Tweet.all
    end

    def friend_tweets
      render json: current_user.get_friends_tweets
    end
    
    def index
        render json: current_user.tweets
    end

    def create
        # should santize params but am not
       tweet = current_user.tweets.new(tweet_params)
       if tweet.save
       render json: tweet
       else
        #handle erro
       end
    end

    private

    def tweet_params
      params.require(:tweet).permit(:title, :text)
    end
end
