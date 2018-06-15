import axios from 'axios'
axios.get('http://127.0.0.1:8080/news')
.then((response) =>{
    console.log(response)  

    var news = "";
    for(var i = 0; i < response.data.articles.length; i++ )
    {
        news = news + "<li href><a href="+response.data.articles[i].url +"><p>"+ response.data.articles[i].publishedAt +"  -  "+ response.data.articles[i].title+"</p></a></li>"
        console.log(news)
    }
    document.getElementById("filnews").innerHTML = news 
    /*"<li><p>"+Date de publication - titre de larticle clickable+"</p></li>"+
    "<li><p>"+Date de publication - titre de larticle clickable+"</p></li>"+*/
})