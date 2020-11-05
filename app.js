const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const restaurant = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurant.results })
})

app.get('/restaurants/:index', (req, res) => {
  const restaurantSelected = restaurant.results.find(res => res.id.toString() === req.params.index)
  res.render('show', { restaurant: restaurantSelected })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantFiltered = restaurant.results.filter(item => item.name.toLowerCase().includes(keyword.toLocaleLowerCase()))
  res.render('index', { restaurant: restaurantFiltered, keyword: keyword })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})