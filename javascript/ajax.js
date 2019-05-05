



/* .........Globalvariables........ */
var topics = ["messi", "Ronaldo", "kobeBryant", "Maradona", "MichaelJordan", "LebronJames", "Zidane", "DavidBeckham", "Ronaldinho", "Neymar"];

for (var i = 0; i < topics.length; i++) {
    var datas = "#" + topics[i];
    $("#page").append("<button id= '" + topics[i] + "'>" + topics[i] + "</button>");
    $(datas).data("search", topics[i]);
   

}

// button function
$(document).ready(function() {
$("button").on("click", function () {
    $("#images").empty();
    var x = $(this).data("search");
    console.log(x);
    var querryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=uUSghzLZilA2DFjfRmFUP5OIpJWcK7nH&limit=11";
    console.log(querryURL)


    $.ajax({
        url: querryURL,
        method: "GET"
    }).done(function (response) {
       
        
        for (var j = 0; j < response.data.length; j++) {
           
            // to get the rating from data
            console.log(response.data[j].images.downsized.url);
            $("#images").append("<p>Rating:" + response.data[j].rating + "</p>");
            // to get the image from data
        $("#images").append("<img src='" + response.data[j].images.downsized.url + "'>");
        }


    })

})
});
  
function write_name(){
    var welcome_parra=document.getElementById("welcome");
    var name =document.getElementById("name");
    welcome_parra.innerHTML= name.value;
}