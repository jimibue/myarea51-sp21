class Api::PostsController < ApplicationController
    before_action :authenticate_user!, except: [:all_posts]

    def all_posts
      render json: Post.all
    end

    def index 
     render json: current_user.posts
    end
end
