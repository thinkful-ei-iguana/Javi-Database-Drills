const ArticlesService = require('../src/articles-service')
const knex = require('knex')


describe(`Articles service object`, function(){
    let db

    

    let testArticles = [
      {
        title: 'First test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
      },
      {
        title: 'Second test post!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
      },
      {
        title: 'Third test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
      },
    ]

    

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    after(() => db.destroy())

    before(() => db('blogful_articles').truncate())

    before(() => {
        return db
            .into('blogful_articles')
            .insert(testArticles)
    })


    describe(`getAllArticles()`, () => {
        it(`resolves all articles from 'blogful_articles' table`, () => {
            return ArticlesService.getAllArticles(db)
            .then(actual => {
              expect(actual).to.eql(testArticles)
            })
    
        })
    })
    describe(`Temporary spec - top level describe`, () => {
        before(() => {
          console.log('before #1')
        })
      
        after(() => {
          console.log('after #1')
        })
      
        beforeEach(() => {
          console.log('beforeEach #2')
        })
      
        before(() => {
          console.log('before #2')
        })
      
        describe(`Describe #1`, () => {
          before(() => {
            console.log('before #3')
          })
      
          after(() => {
            console.log('after #2')
          })
      
          afterEach(() => {
            console.log('afterEach #1')
          })
      
          it(`it #1`, () => {
            console.log('it #1')
          })
      
          it(`it #2`, () => {
            console.log('it #2')
          })
      
          describe(`Describe #2`, () => {
            it(`it #3`, () => {
              console.log('it #3')
            })
      
            before(() => {
              console.log('before #4')
            })
          })
        })
      
        it(`it #4`, () => {
          console.log('it #4')
        })
      
        it(`it #5`, () => {
          console.log('it #5')
        })
      })
})


