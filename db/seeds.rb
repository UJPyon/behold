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
  lname: "WEIGHTED COMPANION CUBE", 
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
  title: "Life is an RPG",
  description: "This is a set of characters I drew for my D&D group depicting each of us as our characters.",
  artist_id: user1.id
)

proj_3 = Project.create(
  title: "Life Moments in Illustrations: Part 2",
  description: "This is part 2 of a series of illustrations I did for my wife involving moments we've shared together!",
  artist_id: user1.id
)

proj_4 = Project.create(
  title: "Illustrations: People of ODA",
  description: "This is an illustrations project I started through sketching classmates. Thought I would share it with y'all!",
  artist_id: user1.id
)

proj_5 = Project.create(
  title: "Summer Sketches",
  description: "Here's a few illustrations I did for some friends this summer! I really like working with different colors for these.",
  artist_id: user2.id
)

proj_6 = Project.create(
  title: "First Aid Kit Design",
  description: "This was a project for my Industrial Design class where we were given a product to design a container for.",
  artist_id: user2.id
)


# ------Image File URL Seed Data------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --User Avatars--
user1_avatar = open('https://behold-seeds.s3.amazonaws.com/user1_avatar.png')
user2_avatar = open('https://behold-seeds.s3.amazonaws.com/user2_avatar.png')
default_avatar = open('https://behold-seeds.s3.amazonaws.com/default_avatar.png')


##--Project Images--
file1_1 = open('https://behold-seeds.s3.amazonaws.com/1_01_01s.jpg')
file1_2 = open('https://behold-seeds.s3.amazonaws.com/1_01_02s.jpg')
file1_3 = open('https://behold-seeds.s3.amazonaws.com/1_01_03s.jpg')
file1_4 = open('https://behold-seeds.s3.amazonaws.com/1_01_04s.jpg')
file1_5 = open('https://behold-seeds.s3.amazonaws.com/1_01_05s.jpg')

file2_1 = open('https://behold-seeds.s3.amazonaws.com/1_02_01s.jpg')
file2_2 = open('https://behold-seeds.s3.amazonaws.com/1_02_02s.jpg')
file2_3 = open('https://behold-seeds.s3.amazonaws.com/1_02_03s.jpg')
file2_4 = open('https://behold-seeds.s3.amazonaws.com/1_02_04s.jpg')
file2_5 = open('https://behold-seeds.s3.amazonaws.com/1_02_05s.jpg')
file2_6 = open('https://behold-seeds.s3.amazonaws.com/1_02_06s.jpg')

file3_1 = open('https://behold-seeds.s3.amazonaws.com/1_03_01s.jpg')
file3_2 = open('https://behold-seeds.s3.amazonaws.com/1_03_02s.jpg')
file3_3 = open('https://behold-seeds.s3.amazonaws.com/1_03_03s.jpg')
file3_4 = open('https://behold-seeds.s3.amazonaws.com/1_03_04s.jpg')

file4_1 = open('https://behold-seeds.s3.amazonaws.com/1_04_01s.jpg')
file4_2 = open('https://behold-seeds.s3.amazonaws.com/1_04_02s.jpg')
file4_3 = open('https://behold-seeds.s3.amazonaws.com/1_04_03s.jpg')
file4_4 = open('https://behold-seeds.s3.amazonaws.com/1_04_04s.jpg')
file4_5 = open('https://behold-seeds.s3.amazonaws.com/1_04_05s.jpg')

file5_1 = open('https://behold-seeds.s3.amazonaws.com/2_01_01s.jpg')
file5_2 = open('https://behold-seeds.s3.amazonaws.com/2_01_02s.jpg')
file5_3 = open('https://behold-seeds.s3.amazonaws.com/2_01_03s.jpg')

file6_1 = open('https://behold-seeds.s3.amazonaws.com/2_02_01s.jpg')
file6_2 = open('https://behold-seeds.s3.amazonaws.com/2_02_02s.jpg')
file6_3 = open('https://behold-seeds.s3.amazonaws.com/2_02_03s.jpg')


# --------Attach AWS Images--------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --Attach User Avatars--
user1.avatar.attach(io: user1_avatar, filename: 'user1_avatar.png')
user2.avatar.attach(io: user2_avatar, filename: 'user2_avatar.png')
test_user.avatar.attach(io: default_avatar, filename: 'default_avatar.png')

## --Attach Project Images--
proj_1.images.attach(io: file1_1, filename: '1_01_01s.jpg')
proj_1.images.attach(io: file1_2, filename: '1_01_02s.jpg')
proj_1.images.attach(io: file1_3, filename: '1_01_03s.jpg')
proj_1.images.attach(io: file1_4, filename: '1_01_04s.jpg')
proj_1.images.attach(io: file1_5, filename: '1_01_05s.jpg')

proj_2.images.attach(io: file2_1, filename: '1_02_01s.png')
proj_2.images.attach(io: file2_2, filename: '1_02_02s.png')
proj_2.images.attach(io: file2_3, filename: '1_02_03s.png')
proj_2.images.attach(io: file2_4, filename: '1_02_04s.png')
proj_2.images.attach(io: file2_5, filename: '1_02_05s.png')
proj_2.images.attach(io: file2_6, filename: '1_02_06s.png')

proj_3.images.attach(io: file3_1, filename: '1_03_01s.jpg')
proj_3.images.attach(io: file3_2, filename: '1_03_02s.jpg')
proj_3.images.attach(io: file3_3, filename: '1_03_03s.jpg')
proj_3.images.attach(io: file3_4, filename: '1_03_04s.jpg')

proj_4.images.attach(io: file4_1, filename: '1_04_01s.jpg')
proj_4.images.attach(io: file4_2, filename: '1_04_02s.jpg')
proj_4.images.attach(io: file4_3, filename: '1_04_03s.jpg')
proj_4.images.attach(io: file4_4, filename: '1_04_04s.jpg')
proj_4.images.attach(io: file4_5, filename: '1_04_05s.jpg')

proj_5.images.attach(io: file5_1, filename: '2_01_01s.jpg')
proj_5.images.attach(io: file5_2, filename: '2_01_02s.jpg')
proj_5.images.attach(io: file5_3, filename: '2_01_03s.jpg')

proj_6.images.attach(io: file6_1, filename: '2_02_01s.jpg')
proj_6.images.attach(io: file6_2, filename: '2_02_02s.jpg')
proj_6.images.attach(io: file6_3, filename: '2_02_03s.jpg')