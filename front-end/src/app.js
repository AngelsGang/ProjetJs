import axios from 'axios'
axios.get('http://127.0.0.1:8080/news')
.then((response) =>{
    return ( response.data.articles)
    console.log(response)
})

