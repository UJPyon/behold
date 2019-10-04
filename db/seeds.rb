# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all


# ------Users Seed Data------
# vvvvvvvvvvvvvvvvvvvvvvvvvvv

user1 = User.create!(
  email: "ujpyon@gmail.com", 
  password: "go_project_go",
  fname:"Jae", 
  lname: "Pyon", 
  text: "Jae Pyon: Content creator extraordinaire! Take a look at my awesome projects!"
)

user2 = User.create!(
  email: "soloak@gmail.com", 
  password: "go_project_go",
  fname:"Sol", 
  lname: "Oak", 
  text: "My name is Sol Oak, and I'm a Pratt Institute graduate of Industrial Design."
)

test_user = User.create!(
  email: "cube@aps", 
  password: "123456",
  fname:"APERTURE SCIENCE", 
  lname: "WEIGHTED COMANION CUBE", 
  text: "Property of Aperture Science - GLaDOS"
)


# -----Project Seed Data-----
# vvvvvvvvvvvvvvvvvvvvvvvvvvv

proj_1 = Project.create!(
  title: "Life is an RPG",
  description: "This is a set of characters I drew for my D&D group depicting each of us as our characters.",
  artist_id: user1.id
)

proj_2 = Project.create!(
  title: "Life Moments in Illustrations: Part 1",
  description: "I created a series of illustrations based on moments in my life I've shared experienced together with my wife. Hope you enjoy!",
  artist_id: user1.id
)

proj_3 = Project.create!(
  title: "Life Moments in Illustrations: Part 2",
  description: "This is part 2 of a series of illustrations I did for my wife involving moments we've shared together!",
  artist_id: user1.id
)

proj_4 = Project.create!(
  title: "Illustrations: People of ODA",
  description: "This is an illustrations project I started through sketching classmates. Thought I would share it with y'all!",
  artist_id: user1.id
)