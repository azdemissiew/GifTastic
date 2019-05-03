// create an H1 for the page 
$("#page").html("<h1> welcome to my Giphy</h1>");
$("#page").append("<h3>search for anything !</h3>");



// to acces Ajax  and get the response
var querryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=uUSghzLZilA2DFjfRmFUP5OIpJWcK7nH&limit=10";
$.ajax({url:querryURL,
        method: "GET"
}).done(function(response){
console.log(response);

});



    