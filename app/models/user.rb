# frozen_string_literal: true

class User < ActiveRecord::Base
  serialize :liked_cats, Array
  serialize :friends, Array
  has_many :posts, dependent: :destroy
  has_many :tweets, dependent: :destroy

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.get_unliked_cats(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id IN (?)", ids)
  end

  def get_friends_tweets()
    ids = self.friends.empty? ? [0] : self.friends
    Tweet.where("user_id IN (?)", ids)
  end
end
