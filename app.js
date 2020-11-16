const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = 3000

const restaurant = require('./restaurant.json')
const Restaurant = require('./models/restaurant')
const routes = require('./routes')

require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantFiltered = restaurant.results.filter(item => item.name.toLowerCase().includes(keyword.toLocaleLowerCase()))
  res.render('index', { restaurant: restaurantFiltered, keyword: keyword })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})