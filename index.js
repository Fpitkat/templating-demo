const express = require('express')
const path = require('path')
const app = express()

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
  res.render('subreddit.ejs', { subreddit })
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
