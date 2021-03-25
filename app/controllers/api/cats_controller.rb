class Api::CatsController < ApplicationController
    before_action :authenticate_user!

    def index
        puts 'current_user'
        puts current_user
        render json: User.get_unliked_cats(current_user.liked_cats)
    end
end
