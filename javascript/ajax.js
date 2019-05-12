



/* .........Globalvariables........ */
var topics = ["messi", "Ronaldo", "kobeBryant", "Maradona", "MichaelJordan", "LebronJames", "Zidane", "DavidBeckham", "Ronaldinho", "Neymar"];

// itterates trough the topics array 
for (var i = 0; i < topics.length; i++) {
    var datas = "#" + topics[i];
    $("#page").append("<button id= '" + topics[i] + "'>" + topics[i] + "</button>");
    $(datas).data("search", topics[i]);
   

}

// button function

$(document).on("click", "button", function () {
    $("#images").empty();
    var x = $(this).data("search");
    console.log(x);
    var querryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=uUSghzLZilA2DFjfRmFUP5OIpJWcK7nH&limit=11";
    console.log(querryURL)

    // geting the data 
    $.ajax({
        url: querryURL,
        method: "GET"
    }).done(function (response) {
       
        // looping through images 
        for (var j = 0; j < response.data.length; j++) {
           
            // to get the rating from data
            console.log(response.data[j].images.downsized.url);
            $("#images").append("<p>Rating:" + response.data[j].rating + "</p>");
            // to get the image from data
        $("#images").append("<img src='" + response.data[j].images.downsized.url + "'>");
        
        }

 
    })
    
})



$("#addShow").on("click", function(event) {
    event.preventDefault();
    var newShow = $("#name").val().trim();
    console.log(newShow);
    var form1 = "#" + newShow;
    console.log(form1);
    $("#page").append("<button id= '" + newShow + "'>" + newShow+ "</button>");
    $(form1).data("search", newShow);
    

});