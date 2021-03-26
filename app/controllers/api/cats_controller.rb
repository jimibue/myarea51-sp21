class Api::CatsController < ApplicationController
    before_action :authenticate_user!, except: [:all_cats]

    def all_cats
      render json: Cat.all
    end

    def index
        render json: User.get_unliked_cats(current_user.liked_cats)
    end

    def update
       current_user.liked_cats << params[:id].to_i
       current_user.save
    end

    def my_cats
       render json: User.liked(current_user.liked_cats)
    end
end
