const express = require('express')
const path = require('path')
const app = express()
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

// sets ejs as the default templating engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))



app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/cats', (req, res) => {
  const cats = [
    'Fluffy',
    'Whiskers',
    'Simba',
    'Socks',
    'Tiger',
    'Smokey',
    'Luna',
    'Oreo',
    'Midnight',
    'Ginger',
  ]

  res.render('cats.ejs', { cats })
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1

  res.render('random.ejs', { num })
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  const data = redditData[subreddit.toLowerCase()]
  if (data) {
    res.render('subreddit.ejs', { ...data })
  } else {
    res.render('notfound.ejs', { subreddit })
  }
  
})

app.listen(9000, () => {
  console.log('Listening on Port 3000')
})
