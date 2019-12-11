require('dotenv').config()
const knex = require('knex')
const ArticlesService = require('./articles-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})
ArticlesService.getAllArticles(knexInstance)
    .then(articles => console.log('articles',articles))