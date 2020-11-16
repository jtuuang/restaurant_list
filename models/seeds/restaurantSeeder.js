const Restaurant = require('../restaurant')
const restaurant_list = require('../../restaurant.json').results

const db = require('../../config/mongoose')

db.once('open', () => {
  restaurant_list.forEach(restaurant => {
    Restaurant.create({
      name: restaurant.name,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description
    })
  })

  console.log('Done!')
})