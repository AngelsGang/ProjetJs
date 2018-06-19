import axios from 'axios'
axios.get('http://127.0.0.1:8080/news')
.then((response) =>{
    console.log(response)  

    var news = "";
    var link ="";
    var date =""

    for(var i = 0; i < response.data.articles.length && i < 5; i++ )
    {    

         link = response.data.articles[i].url
         date = response.data.articles[i].publishedAt
            news = news + "<li id=\"listnews\" href><a href="+ link +"><p>"+ date +" : "+ response.data.articles[i].title+"</p></a></li>"
    }
    document.getElementById("easyPaginate").innerHTML = news 


    var laUne ="";
    var img = "";
    var title ="";
    var descrip ="";
    for(var i = 0; i < response.data.articles.length && i < 2; i++ )
    {    
        title = response.data.articles[i].title;
        img = response.data.articles[i].urlToImage;
        descrip = response.data.articles[i].description;

        laUne = "<h2 class=\"w3-wide\"> La une :</h2> <h2 class=\"w3-wide\">"+ title +"</h2><a href="+ link +"> <img src=" + img + " style=\"width:100%\"></a>"
        +"<div class=\"w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small\">"
        +"<p><b>"+ descrip +"<b><p>"
        +"</div>"
    }
    document.getElementById("uneNews").innerHTML = laUne

})