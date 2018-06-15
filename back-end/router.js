const express = require('express')
const axios = require('axios')
const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    /*const news = [{'title': 1}]
    response.send(news)*/

    var request = axios
    
    .get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=ed9c4f200b1a4a988016134b00a2d060')
   
    .then((httpResponse) => console.log(httpResponse.data))
})

router.route('/comment').get(function(request, response) {
    
   
   })
module.exports = router
