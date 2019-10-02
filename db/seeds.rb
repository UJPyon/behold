# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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

demo_user = User.create!(
  email: "cube", 
  password: "123456",
  fname:"APERTURE SCIENCE", 
  lname: "WEIGHTED COMANION CUBE", 
  text: "Property of Aperture Science"
)

