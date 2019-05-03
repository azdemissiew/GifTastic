// create an H1 for the page 
$("#page").html("<h1> welcome to my Giphy</h1>");
$("#page").append("<h3>search for anything !</h3>");



// to acces Ajax  and get the response


// button function
$("button").on("click",function(){
    var x =$(this).data("search");
    console.log(x);
    var querryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=uUSghzLZilA2DFjfRmFUP5OIpJWcK7nH&limit=11";
    console.log(querryURL)

    
$.ajax({url:querryURL,
    method: "GET"
}).done(function(response){
console.log(response.data[0].rating);
// to get the rating from data
$('body').append("<p>Rating:" +response.data[0].rating+"</p>");
// to get the image from data


})

})

  