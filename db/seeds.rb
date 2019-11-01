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
Comment.destroy_all
Appreciation.destroy_all


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

user3 = User.create(
  email: "spence@gmail.com", 
  password: "youwillneverguessthisyouwillneverguessthislalalalala",
  fname:"Spencer", 
  lname: "Cambridge", 
  text: "I make cool projects! BIZZZAM, take a look!"
)

user4 = User.create(
  email: "ash@gmail.com", 
  password: "youwillneverguessthisyouwillneverguessthislalalalala",
  fname:"Ash", 
  lname: "C. Yeung", 
  text: "Graduate of Pratt Institute School of Architecture. Find me on LinkedIn for more info."
)

user5 = User.create(
  email: "hmoon@gmail.com", 
  password: "youwillneverguessthisyouwillneverguessthislalalalala",
  fname:"Hailey", 
  lname: "Moon", 
  text: "I'm a chill girl, making chill things."
)

user6 = User.create(
  email: "pko@gmail.com", 
  password: "youwillneverguessthisyouwillneverguessthislalalalala",
  fname:"Peter", 
  lname: "Koo", 
  text: "I'm a cool guy, doing cool things."
)

demo_user = User.create(
  email: "demo_user@gmail.com", 
  password: "123456",
  fname:"Harry", 
  lname: "Potter", 
  text: "Thanks for logging in as a demo user! Feel free to check out my LinkedIn & Github links below!"
)

test_user = User.create(
  email: "cube@aps", 
  password: "123456",
  fname:"APERTURE SCIENCE", 
  lname: "WEIGHTED COMPANION CUBE", 
  text: "Property of Aperture Science - GLaDOS. DiD yOU fInD ThE cAKE?"
)
  

# -----Project Seed Data-----
# vvvvvvvvvvvvvvvvvvvvvvvvvvv


## --USER 1 PROJECTS--
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
  title: "Misc. Drawings",
  description: "Haven't posted anything in awhile, so I decided to put up some doodles I've been working on.",
  artist_id: user1.id
)
proj_6 = Project.create(
  title: "Arch 101: Spatial Study",
  description: "This was my design project for freshman year of design at Pratt Institute. The final project was to design a space using interconnecting pieces ",
  artist_id: user1.id
)
proj_7 = Project.create(
  title: "Arch 301: Dormitory Project",
  description: "My design for the dormitory project: this involved a lot of milling and spatial studies, but in the end the facade came out pretty interesting!",
  artist_id: user1.id
)
proj_8 = Project.create(
  title: "Drafting 101: Hand Drawings",
  description: "This was done freshman year of architecture for hand-drafting drawings. The construction line creation was intense :O",
  artist_id: user1.id
)
proj_9 = Project.create(
  title: "Arch 302: Columbia Boathouse",
  description: "My proposal for redesigning the boathouse used by Columbia University for Arch 302 class. The proposal involved shaping the boathouse to have maximum access to the docks while providing amenities above.",
  artist_id: user1.id
)
proj_10 = Project.create(
  title: "The Enchiridion",
  description: "Portable wood box design for the Enchiridion from Adventure Time. Modeled in Rhino 3D and lasercut.",
  artist_id: user1.id
)

## --USER 2 PROJECTS--
proj_11 = Project.create(
  title: "Summer Sketches",
  description: "Here's a few illustrations I did for some friends this summer! I really like working with different colors for these.",
  artist_id: user2.id
)
proj_12 = Project.create(
  title: "First Aid Kit Design",
  description: "This was a project for my Industrial Design class where we were given a product to design a container for.",
  artist_id: user2.id
)
proj_13 = Project.create(
  title: "Furniture Design: Table & Chair",
  description: "This was my design proposal for a table/chair set for cafes, which allows a customer to have a personal space under the chair to store their belongings and a hook on the back for coats.",
  artist_id: user2.id
)
proj_14 = Project.create(
  title: "Tableware Design Set",
  description: "Designed with ergonomics in mind, the curvature of the tableware design allows for easy handling while also presenting an elegant look.",
  artist_id: user2.id
)
proj_15 = Project.create(
  title: "Industrial Design Sketches",
  description: "I had nowhere else to place these old drawings from class, so decided to post them here for you guys to look at :)",
  artist_id: user2.id
)

# --USER 3 PROJECTS--
proj_16 = Project.create(
  title: "Eaglebrook Middle School Design",
  description: "These were some of my renders from my proposal for redesigning the Eaglebrook School for Architecture 402 class.",
  artist_id: user3.id
)

# --USER 4 PROJECTS--
proj_17 = Project.create(
  title: "Skyscraper Project",
  description: "Skyscraper design for my architecture senior year thesis project.",
  artist_id: user4.id
)
proj_18 = Project.create(
  title: "Floating Houses",
  description: "Proposal for floating neighborhood that is better equipped to deal with its location in a flood zone.",
  artist_id: user4.id
)


# ------Categories Seed Data------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --All Categories--
cat_1 = Category.create(
  name: "Illustration", 
  description: "View illustration work in its many forms, including everything from sketches to digital art and more",
  tag: "Il"
)
cat_2 = Category.create(
  name: "Architecture", 
  description: "From school projects to simple drafting exercises, browse the latest in student-submitted architectural designs",
  tag: "Ar"
)
cat_3 = Category.create(
  name: "Industrial Design", 
  description: "Browse brilliant student creations, products, and ideas for the field of industrial design",
  tag: "ID"
)

## --Add Projects to Categories--
cat_1.projects += [proj_1, proj_2, proj_3, proj_4, proj_5, proj_11]
cat_2.projects += [proj_6, proj_7, proj_8, proj_9, proj_16, proj_17, proj_18]
cat_3.projects += [proj_10, proj_12, proj_13, proj_14, proj_15]


# ------Image File URL Seed Data------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --User Avatars--
user1_avatar = open('https://behold-seeds.s3.amazonaws.com/user1_avatar.png')
user2_avatar = open('https://behold-seeds.s3.amazonaws.com/user2_avatar.png')
default_avatar = open('https://behold-seeds.s3.amazonaws.com/default_avatar.png')

## --User Banners--
user1_banner = open('https://behold-seeds.s3.amazonaws.com/user1_banner.jpg')
user2_banner = open('https://behold-seeds.s3.amazonaws.com/user2_banner.jpg')


##--Project Images--

### -USER 1 PROJECT IMAGES-
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

file5_1 = open('https://behold-seeds.s3.amazonaws.com/1_05_01s.jpg')
file5_2 = open('https://behold-seeds.s3.amazonaws.com/1_05_02s.jpg')
file5_3 = open('https://behold-seeds.s3.amazonaws.com/1_05_03s.jpg')

file6_1 = open('https://behold-seeds.s3.amazonaws.com/1_06_01s.jpg')
file6_2 = open('https://behold-seeds.s3.amazonaws.com/1_06_02s.jpg')
file6_3 = open('https://behold-seeds.s3.amazonaws.com/1_06_03s.jpg')

file7_1 = open('https://behold-seeds.s3.amazonaws.com/1_07_01s.jpg')
file7_2 = open('https://behold-seeds.s3.amazonaws.com/1_07_02s.jpg')
file7_3 = open('https://behold-seeds.s3.amazonaws.com/1_07_03s.jpg')

file8_1 = open('https://behold-seeds.s3.amazonaws.com/1_08_01s.jpg')
file8_2 = open('https://behold-seeds.s3.amazonaws.com/1_08_02s.jpg')
file8_3 = open('https://behold-seeds.s3.amazonaws.com/1_08_03s.jpg')
file8_4 = open('https://behold-seeds.s3.amazonaws.com/1_08_04s.jpg')

file9_1 = open('https://behold-seeds.s3.amazonaws.com/1_09_01s.jpg')
file9_2 = open('https://behold-seeds.s3.amazonaws.com/1_09_02s.jpg')
file9_3 = open('https://behold-seeds.s3.amazonaws.com/1_09_03s.jpg')
file9_4 = open('https://behold-seeds.s3.amazonaws.com/1_09_04s.jpg')

file10_1 = open('https://behold-seeds.s3.amazonaws.com/1_10_01s.jpg')
file10_2 = open('https://behold-seeds.s3.amazonaws.com/1_10_02s.jpg')
file10_3 = open('https://behold-seeds.s3.amazonaws.com/1_10_03s.jpg')


### -USER 2 PROJECT IMAGES-
file11_1 = open('https://behold-seeds.s3.amazonaws.com/2_01_01s.jpg')
file11_2 = open('https://behold-seeds.s3.amazonaws.com/2_01_02s.jpg')
file11_3 = open('https://behold-seeds.s3.amazonaws.com/2_01_03s.jpg')

file12_1 = open('https://behold-seeds.s3.amazonaws.com/2_02_01s.jpg')
file12_2 = open('https://behold-seeds.s3.amazonaws.com/2_02_02s.jpg')
file12_3 = open('https://behold-seeds.s3.amazonaws.com/2_02_03s.jpg')

file13_1 = open('https://behold-seeds.s3.amazonaws.com/2_03_01s.jpg')
file13_2 = open('https://behold-seeds.s3.amazonaws.com/2_03_02s.jpg')
file13_3 = open('https://behold-seeds.s3.amazonaws.com/2_03_03s.jpg')

file14_1 = open('https://behold-seeds.s3.amazonaws.com/2_04_01s.jpg')
file14_2 = open('https://behold-seeds.s3.amazonaws.com/2_04_02s.jpg')
file14_3 = open('https://behold-seeds.s3.amazonaws.com/2_04_03s.jpg')

file15_1 = open('https://behold-seeds.s3.amazonaws.com/2_05_01s.jpg')
file15_2 = open('https://behold-seeds.s3.amazonaws.com/2_05_02s.jpg')
file15_3 = open('https://behold-seeds.s3.amazonaws.com/2_05_03s.jpg')
file15_4 = open('https://behold-seeds.s3.amazonaws.com/2_05_04s.jpg')


### -USER 3 PROJECT IMAGES-
file16_1 = open('https://behold-seeds.s3.amazonaws.com/3_01_01s.jpg')
file16_2 = open('https://behold-seeds.s3.amazonaws.com/3_01_02s.jpg')
file16_3 = open('https://behold-seeds.s3.amazonaws.com/3_01_03s.jpg')
file16_4 = open('https://behold-seeds.s3.amazonaws.com/3_01_04s.jpg')


### -USER 4 PROJECT IMAGES-
file17_1 = open('https://behold-seeds.s3.amazonaws.com/4_01_01s.jpg')
file17_2 = open('https://behold-seeds.s3.amazonaws.com/4_01_02s.jpg')
file17_3 = open('https://behold-seeds.s3.amazonaws.com/4_01_03s.jpg')
file17_4 = open('https://behold-seeds.s3.amazonaws.com/4_01_04s.jpg')

file18_1 = open('https://behold-seeds.s3.amazonaws.com/4_02_01s.jpg')
file18_2 = open('https://behold-seeds.s3.amazonaws.com/4_02_02s.jpg')
file18_3 = open('https://behold-seeds.s3.amazonaws.com/4_02_03s.jpg')
file18_4 = open('https://behold-seeds.s3.amazonaws.com/4_02_04s.jpg')



# --------Attach AWS Images--------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --Attach User Avatars--
user1.avatar.attach(io: user1_avatar, filename: 'user1_avatar.png')
user2.avatar.attach(io: user2_avatar, filename: 'user2_avatar.png')
# test_user.avatar.attach(io: default_avatar, filename: 'default_avatar.png')

## --Attach User Banners--
user1.banner.attach(io: user1_banner, filename: 'user1_banner.jpg')
user2.banner.attach(io: user2_banner, filename: 'user2_banner.jpg')

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

proj_5.images.attach(io: file5_1, filename: '1_05_01s.jpg')
proj_5.images.attach(io: file5_2, filename: '1_05_02s.jpg')
proj_5.images.attach(io: file5_3, filename: '1_05_03s.jpg')

proj_6.images.attach(io: file6_1, filename: '1_06_01s.jpg')
proj_6.images.attach(io: file6_2, filename: '1_06_02s.jpg')
proj_6.images.attach(io: file6_3, filename: '1_06_03s.jpg')

proj_7.images.attach(io: file7_1, filename: '1_07_01s.jpg')
proj_7.images.attach(io: file7_2, filename: '1_07_02s.jpg')
proj_7.images.attach(io: file7_3, filename: '1_07_03s.jpg')

proj_8.images.attach(io: file8_1, filename: '1_08_01s.jpg')
proj_8.images.attach(io: file8_2, filename: '1_08_02s.jpg')
proj_8.images.attach(io: file8_3, filename: '1_08_03s.jpg')
proj_8.images.attach(io: file8_4, filename: '1_08_04s.jpg')

proj_9.images.attach(io: file9_1, filename: '1_09_01s.jpg')
proj_9.images.attach(io: file9_2, filename: '1_09_02s.jpg')
proj_9.images.attach(io: file9_3, filename: '1_09_03s.jpg')
proj_9.images.attach(io: file9_4, filename: '1_09_04s.jpg')

proj_10.images.attach(io: file10_1, filename: '1_10_01s.jpg')
proj_10.images.attach(io: file10_2, filename: '1_10_02s.jpg')
proj_10.images.attach(io: file10_3, filename: '1_10_03s.jpg')

proj_11.images.attach(io: file11_1, filename: '2_01_01s.jpg')
proj_11.images.attach(io: file11_2, filename: '2_01_02s.jpg')
proj_11.images.attach(io: file11_3, filename: '2_01_03s.jpg')

proj_12.images.attach(io: file12_1, filename: '2_02_01s.jpg')
proj_12.images.attach(io: file12_2, filename: '2_02_02s.jpg')
proj_12.images.attach(io: file12_3, filename: '2_02_03s.jpg')

proj_13.images.attach(io: file13_1, filename: '2_03_01s.jpg')
proj_13.images.attach(io: file13_2, filename: '2_03_02s.jpg')
proj_13.images.attach(io: file13_3, filename: '2_03_03s.jpg')

proj_14.images.attach(io: file14_1, filename: '2_04_01s.jpg')
proj_14.images.attach(io: file14_2, filename: '2_04_02s.jpg')
proj_14.images.attach(io: file14_3, filename: '2_04_03s.jpg')

proj_15.images.attach(io: file15_1, filename: '2_05_01s.jpg')
proj_15.images.attach(io: file15_2, filename: '2_05_02s.jpg')
proj_15.images.attach(io: file15_3, filename: '2_05_03s.jpg')
proj_15.images.attach(io: file15_4, filename: '2_05_04s.jpg')

proj_16.images.attach(io: file16_1, filename: '3_01_01s.jpg')
proj_16.images.attach(io: file16_2, filename: '3_01_02s.jpg')
proj_16.images.attach(io: file16_3, filename: '3_01_03s.jpg')
proj_16.images.attach(io: file16_4, filename: '3_01_04s.jpg')

proj_17.images.attach(io: file17_1, filename: '4_01_01s.jpg')
proj_17.images.attach(io: file17_2, filename: '4_01_02s.jpg')
proj_17.images.attach(io: file17_3, filename: '4_01_03s.jpg')
proj_17.images.attach(io: file17_4, filename: '4_01_04s.jpg')

proj_18.images.attach(io: file18_1, filename: '4_02_01s.jpg')
proj_18.images.attach(io: file18_2, filename: '4_02_02s.jpg')
proj_18.images.attach(io: file18_3, filename: '4_02_03s.jpg')
proj_18.images.attach(io: file18_4, filename: '4_02_04s.jpg')


# --------Comments Seed Data--------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

## --PROJ 1 COMMENTS--
comment_001 = Comment.create(
  body: "love it so my style",
  author_id: user5.id,
  project_id: proj_1.id
)

comment_002 = Comment.create(
  body: "DIG IT!!!!!!!",
  author_id: user3.id,
  project_id: proj_1.id
)

comment_003 = Comment.create(
  body: "wow these are amazing. great line art and colors",
  author_id: user2.id,
  project_id: proj_1.id
)

comment_004 = Comment.create(
  body: "very beautiful. Good job, keep it up",
  author_id: user4.id,
  project_id: proj_1.id
)

comment_005 = Comment.create(
  body: "AWESOME WORK...",
  author_id: user6.id,
  project_id: proj_1.id
)

## --PROJ 2 COMMENTS--
comment_006 = Comment.create(
  body: "Cute !",
  author_id: user5.id,
  project_id: proj_2.id
)

comment_007 = Comment.create(
  body: "These are amazing, you should do more! :)",
  author_id: user2.id,
  project_id: proj_2.id
)

comment_008 = Comment.create(
  body: "Great characters",
  author_id: user3.id,
  project_id: proj_2.id
)

comment_009 = Comment.create(
  body: "This is so brilliant and very creative. The work looks perfect!",
  author_id: user4.id,
  project_id: proj_2.id
)

## --PROJ 3 COMMENTS--
comment_010 = Comment.create(
  body: "Beautiful illustrations",
  author_id: user6.id,
  project_id: proj_3.id
)

comment_011 = Comment.create(
  body: "Good Job!!!",
  author_id: user2.id,
  project_id: proj_3.id
)

comment_012 = Comment.create(
  body: "Great drawings. Nicely done.",
  author_id: user5.id,
  project_id: proj_3.id
)

comment_013 = Comment.create(
  body: "Please make one for me too!!",
  author_id: user6.id,
  project_id: proj_3.id
)

## --PROJ 4 COMMENTS--
comment_014 = Comment.create(
  body: "So beautiful",
  author_id: user4.id,
  project_id: proj_4.id
)

comment_015 = Comment.create(
  body: "WOW!!! I really like your work!!!",
  author_id: user6.id,
  project_id: proj_4.id
)

comment_016 = Comment.create(
  body: "They are so cute! Beautiful :)",
  author_id: user5.id,
  project_id: proj_4.id
)

## --PROJ 5 COMMENTS--
comment_017 = Comment.create(
  body: "AHHHH the pokemon are so cute~!",
  author_id: user2.id,
  project_id: proj_5.id
)

comment_018 = Comment.create(
  body: "Awesome!!!!",
  author_id: user3.id,
  project_id: proj_5.id
)

comment_019 = Comment.create(
  body: "Awesome work & Great artist",
  author_id: user4.id,
  project_id: proj_5.id
)

comment_020 = Comment.create(
  body: "very nice!!! :D",
  author_id: user6.id,
  project_id: proj_5.id
)

## --PROJ 6 COMMENTS--
comment_021 = Comment.create(
  body: "Spatial design looks great!",
  author_id: user5.id,
  project_id: proj_6.id
)

comment_022 = Comment.create(
  body: "I love your hand drawings",
  author_id: user3.id,
  project_id: proj_6.id
)

comment_023 = Comment.create(
  body: "cool work, what year was this for?",
  author_id: user6.id,
  project_id: proj_6.id
)

comment_024 = Comment.create(
  body: "Thanks! this was for my first semester of freshman year :D",
  author_id: user1.id,
  project_id: proj_6.id
)

comment_025 = Comment.create(
  body: "dude sweet",
  author_id: user6.id,
  project_id: proj_6.id
)

## --PROJ 7 COMMENTS--
comment_026 = Comment.create(
  body: "My dormitory project came out alright i guess",
  author_id: user1.id,
  project_id: proj_7.id
)

comment_027 = Comment.create(
  body: "cool project!",
  author_id: user2.id,
  project_id: proj_7.id
)

comment_028 = Comment.create(
  body: "nice, I like the facade design",
  author_id: user3.id,
  project_id: proj_7.id
)

## --PROJ 8 COMMENTS--
comment_029 = Comment.create(
  body: "handdrawn drafting looks intense!",
  author_id: user2.id,
  project_id: proj_8.id
)

comment_030 = Comment.create(
  body: "Yeah it's a shame they don't really teach hand drafting anymore :/",
  author_id: user1.id,
  project_id: proj_8.id
)

comment_031 = Comment.create(
  body: "nice job on these!",
  author_id: user5.id,
  project_id: proj_8.id
)

## --PROJ 9 COMMENTS--
comment_032 = Comment.create(
  body: "the boathouse project was wack lol",
  author_id: user3.id,
  project_id: proj_9.id
)

comment_033 = Comment.create(
  body: "Interesting design; I like the views that the design allows.",
  author_id: user2.id,
  project_id: proj_9.id
)

## --PROJ 10 COMMENTS--
comment_034 = Comment.create(
  body: "i love it!!!",
  author_id: user5.id,
  project_id: proj_10.id
)

comment_035 = Comment.create(
  body: "Lasercutting is always cool",
  author_id: user4.id,
  project_id: proj_10.id
)

comment_036 = Comment.create(
  body: "love it!!!",
  author_id: user2.id,
  project_id: proj_10.id
)

## --PROJ 11 COMMENTS--
comment_037 = Comment.create(
  body: "i love your work as always haha",
  author_id: user1.id,
  project_id: proj_11.id
)

comment_038 = Comment.create(
  body: "Great job!)",
  author_id: user6.id,
  project_id: proj_11.id
)

comment_039 = Comment.create(
  body: "Lovely! can you draw me too??",
  author_id: user5.id,
  project_id: proj_11.id
)

comment_040 = Comment.create(
  body: "haha thanks, i take commissions :)",
  author_id: user2.id,
  project_id: proj_11.id
)

## --PROJ 12 COMMENTS--
comment_041 = Comment.create(
  body: "Ohhh I remember this class! Nice idea for product design!",
  author_id: user1.id,
  project_id: proj_12.id
)

comment_042 = Comment.create(
  body: "Awesome work!",
  author_id: user3.id,
  project_id: proj_12.id
)

comment_043 = Comment.create(
  body: "I love it!!",
  author_id: user5.id,
  project_id: proj_12.id
)

## --PROJ 13 COMMENTS--
comment_044 = Comment.create(
  body: "Ugh i remember the long nights in the woodshop making this :/",
  author_id: user2.id,
  project_id: proj_13.id
)

comment_045 = Comment.create(
  body: "I think it came out amazing!",
  author_id: user1.id,
  project_id: proj_13.id
)

## --PROJ 14 COMMENTS--
comment_046 = Comment.create(
  body: "lovely design",
  author_id: user6.id,
  project_id: proj_14.id
)

comment_047 = Comment.create(
  body: "Cool, keep up the good work!",
  author_id: user1.id,
  project_id: proj_14.id
)

comment_048 = Comment.create(
  body: "AMAZING",
  author_id: user3.id,
  project_id: proj_14.id
)

comment_049 = Comment.create(
  body: "Nice Work",
  author_id: user5.id,
  project_id: proj_14.id
)

## --PROJ 15 COMMENTS--
comment_050 = Comment.create(
  body: "I wish I could sketch as well as you :D",
  author_id: user1.id,
  project_id: proj_15.id
)

comment_051 = Comment.create(
  body: "Your sketches are impressive",
  author_id: user6.id,
  project_id: proj_15.id
)

comment_052 = Comment.create(
  body: "nicee",
  author_id: user3.id,
  project_id: proj_15.id
)

## --PROJ 16 COMMENTS--
comment_053 = Comment.create(
  body: "School design looks awesome!",
  author_id: user1.id,
  project_id: proj_16.id
)

comment_054 = Comment.create(
  body: "Looks great!!",
  author_id: user5.id,
  project_id: proj_16.id
)

comment_055 = Comment.create(
  body: "Awesome work as usual man",
  author_id: user3.id,
  project_id: proj_16.id
)

## --PROJ 17 COMMENTS--
comment_056 = Comment.create(
  body: "WOAH, skyscraper design!",
  author_id: user2.id,
  project_id: proj_17.id
)

comment_057 = Comment.create(
  body: "that looks like an intense project to have done! :O",
  author_id: user1.id,
  project_id: proj_17.id
)

comment_058 = Comment.create(
  body: "Yeah, thesis projects always suck lol",
  author_id: user4.id,
  project_id: proj_17.id
)

## --PROJ 18 COMMENTS--
comment_059 = Comment.create(
  body: "Nice work on this!",
  author_id: user1.id,
  project_id: proj_18.id
)

comment_060 = Comment.create(
  body: "The idea is very unique, floating houses!",
  author_id: user2.id,
  project_id: proj_18.id
)

comment_061 = Comment.create(
  body: "niceee",
  author_id: user6.id,
  project_id: proj_18.id
)


# --------Appreciations Seed Data--------
# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

# Appreciation.create()