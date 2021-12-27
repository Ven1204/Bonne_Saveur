# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cakes = ["Lemon Cake","Carrot Cake","Victoria Sandwich"]
loc = ["Madrid","Barcelona","Paris"]
# num = [30..50]
desc = ["Indulge in a slice of lemon cake for afternoon tea. With lovely light sponge layers, a citrus zing offsets the rich and creamy soft cheese icing","Top this classic carrot cake with moreish icing and chopped walnuts or pecans. Serve as a sweet treat with a cup of tea any time of the day.","The perfect party cake, a Victoria sponge is a traditional bake everyone will love. Makes an easy wedding cake, too"]
count = 0


12.times do
  products = Product.create!(
    {
      name: cakes[count],
      address: loc[count],
      price: rand(30..50)
    }
  )
end

# reviews = Review.create!(
#   {
#     title: "Good Review",
#     description: desc[count],
#     ratings: rand(1..5)
#   }
# )
# count += 1

User.create!(
  {
    first_name: "sample",
    last_name: "dummy",
    address: "madrid",
    email: "sample@gmail.com",
    password: "123456"
  }
)
