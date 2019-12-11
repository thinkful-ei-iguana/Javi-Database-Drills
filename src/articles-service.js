// const db = require('./knex-instance')
const ArticlesService = {
    getAllArticles(db) {
     return db.select('*').from('blogful_articles')
    },
       insertArticle(knex, newArticle) {
        return knex
          .insert(newArticle)
          .into('blogful_articles')
          .returning('*')
        
       },
}


module.exports = ArticlesService