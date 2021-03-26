# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all
5.times do
    name = Faker::Creature::Cat.name
    breed = Faker::Creature::Cat.breed
    registry = Faker::Creature::Cat.registry
    avatar = Faker::Avatar.image(slug: name, size: '150x150', format: 'png', set: 'set4')
    Cat.create(name: name, breed: breed, registry: registry, avatar: avatar)
  end
  

#   puts "200 Cats Seeded" #BAD
User.destroy_all

user1 = User.create(email:'user1@test.com', password:123456)
user2 = User.create(email:'user2@test.com', password:123456)
user3 = User.create(email:'user3@test.com', password:123456)

10.times do 
  user1.tweets.create(title: Faker::Hipster.word  ,text:Faker::Hipster.paragraph(sentence_count: 20))
  user2.tweets.create(title: Faker::Hipster.word  ,text:Faker::Hipster.paragraph(sentence_count: 20))
  user3.tweets.create(title: Faker::Hipster.word  ,text:Faker::Hipster.paragraph(sentence_count: 20))
end

puts "#{User.all.size} User Seeded" #
puts "#{Tweet.all.size} Tweet Seeded" #
puts "#{user1.tweets.all.size} user1 Tweet Seeded" #