require 'open-uri'

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

user1 = User.create(
  email: "ujpyon@gmail.com", 
  password: "go_project_go",
  fname:"UnJae", 
  lname: "Pyon", 
  text: "Content creator extraordinaire! I am a graduate of Pratt Institute School of Architecture, but now I'm currently attending App Academy and I draw in my free time as a hobby. Take a look at my awesome projects!"
)

user2 = User.create(
  email: "soloak@gmail.com", 
  password: "go_project_go",
  fname:"Sol", 
  lname: "Oak", 
  text: "My name is Sol Oak, and I'm a Pratt Institute graduate of Industrial Design."
)

test_user = User.create(
  email: "cube@aps", 
  password: "123456",
  fname:"APERTURE SCIENCE", 
  lname: "WEIGHTED COMANION CUBE", 
  text: "Property of Aperture Science - GLaDOS"
)


# -----Project Seed Data-----
# vvvvvvvvvvvvvvvvvvvvvvvvvvv

proj_1 = Project.create(
  title: "Life Moments in Illustrations: Part 1",
  description: "I created a series of illustrations based on moments in my life I've shared experienced together with my wife. Hope you enjoy!",
  artist_id: user1.id
)

proj_2 = Project.create(
  title: "Life Moments in Illustrations: Part 2",
  description: "This is part 2 of a series of illustrations I did for my wife involving moments we've shared together!",
  artist_id: user1.id
)

proj_3 = Project.create(
  title: "Life is an RPG",
  description: "This is a set of characters I drew for my D&D group depicting each of us as our characters.",
  artist_id: user1.id
)

proj_4 = Project.create(
  title: "Illustrations: People of ODA",
  description: "This is an illustrations project I started through sketching classmates. Thought I would share it with y'all!",
  artist_id: user1.id
)


# ------Image File URL Seed Data------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

file1 = open('https://behold-seeds.s3.amazonaws.com/1_01_01.jpg')
file2 = open('https://behold-seeds.s3.amazonaws.com/1_03_01.png')
file3_1 = open('https://behold-seeds.s3.amazonaws.com/1_02_06.jpg')
# file3_2 = open('https://behold-seeds.s3.amazonaws.com/1_02_01.jpg')
# file3_3 = open('https://behold-seeds.s3.amazonaws.com/1_02_02.png')
# file3_4 = open('https://behold-seeds.s3.amazonaws.com/1_02_03.jpg')
# file3_5 = open('https://behold-seeds.s3.amazonaws.com/1_02_04.jpg')
# file3_6 = open('https://behold-seeds.s3.amazonaws.com/1_02_05.jpg')
file4 = open('https://behold-seeds.s3.amazonaws.com/1_04_02.jpg')


# ------Attach Images to User------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

proj_1.images.attach(io: file1, filename: '1_01_01.jpg')
proj_2.images.attach(io: file2, filename: '1_03_01.png')

proj_3.images.attach(io: file3_1, filename: '1_02_06.jpg')
# proj_3.images.attach(io: file3_2, filename: '1_02_01.jpg')
# proj_3.images.attach(io: file3_3, filename: '1_02_02.jpg')
# proj_3.images.attach(io: file3_4, filename: '1_02_03.jpg')
# proj_3.images.attach(io: file3_5, filename: '1_02_04.jpg')
# proj_3.images.attach(io: file3_6, filename: '1_02_05.jpg')

proj_4.images.attach(io: file4, filename: '1_04_02.jpg')