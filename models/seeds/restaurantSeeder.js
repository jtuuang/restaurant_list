const mongoose = require('mongoose')
const restaurant = require('../restaurant')
const Restaurant = require('../restaurant')
const restaurant_list = require('./restaurant.json').results

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')

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