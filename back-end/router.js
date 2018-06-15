const express = require('express')
const axios = require('axios')
const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    const news = [{'title': 1}]
    response.send(news)
})

router.route('/comment').get(function(request, response) {
    var request = axios
    
    .get('https://jsonplaceholder.typicode.com/comments')
   
    .then((httpResponse) => console.log(httpResponse.data))
   
   })
module.exports = router
