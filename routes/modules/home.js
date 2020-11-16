const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const sorting = req.query.sorting
  switch (sorting) {
    case 'asc':
      return Restaurant.find()
        .lean()
        .sort({ name: 'asc' })
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.log(error))
    case 'desc':
      return Restaurant.find()
        .lean()
        .sort({ name: 'desc' })
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.log(error))
    case 'category':
      return Restaurant.find()
        .lean()
        .sort({ category: 'asc' })
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.log(error))
    case 'location':
      return Restaurant.find()
        .lean()
        .sort({ location: 'asc' })
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.log(error))
    default:
      return Restaurant.find()
        .lean()
        .sort({ name: 'asc' })
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.log(error))
  }
})

module.exports = router