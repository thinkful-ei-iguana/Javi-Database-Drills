require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

knexInstance.from('shopping_list')
    .select('*');


function itemSearch(searchTerm){
    knexInstance.select('*')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
        console.log(result)
        console.log('search term', {searchTerm})
    })
    
}
//itemSearch('Fish tricks')

function paginateProducts(page){
    const productsPerPage = 6;
    const offset = productsPerPage * (page - 1)

    knexInstance.from('shopping_list').select('*')
    .select('id','price','name','category')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
        console.log(result)
    })
}
//paginateProducts(2)

function addedDaysAgo(daysAgo){
    knexInstance.select('*')
    .from('shopping_list')
    .where('date_added', '>',
        knexInstance.raw(`now() - '?? days' :: INTERVAL`, daysAgo)
    )
    .then(result => {
        console.log('days ago')
        console.log(result)
    })
}
//addedDaysAgo(3)

function total(){
    knexInstance.select('category')
    .sum('price AS total')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
        console.log('cost')
        console.log(result)
    })
}
total()


console.log('knex and driver installed correctly')