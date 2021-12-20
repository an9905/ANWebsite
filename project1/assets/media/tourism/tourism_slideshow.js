
var transportation_array = ["assets/media/tourism/1.jpeg", "assets/media/tourism/2.jpeg", "assets/media/tourism/3.jpeg"];
var transportation_captions = ["John F Kennedy Airport", "LaGuardia Airport", "MTA"];
var len = transportation_array.length;
setInterval(runit_transportation, 1800);
var x=1;
function runit_transportation() {
    document.getElementById("slideshow_transportation").src=transportation_array[x];
    document.getElementById("caption_transportation").innerHTML=transportation_captions[x];
    x++;
    if(x == len) { x=0; }
}

var shopping_array = ["assets/media/tourism/q4.jpeg", "assets/media/tourism/q5.jpeg", "assets/media/tourism/q6.jpeg"];
var shopping_captions = ["Queens Center Mall", "Queens Shopping Center", "Queens Outlet"];
var len = shopping_array.length;
setInterval(runit_shopping, 1800);
var x=1;
function runit_shopping() {
    document.getElementById("slideshow_shopping").src= shopping_array[x];
    document.getElementById("caption_shopping").innerHTML=shopping_captions[x];
    if(x == len) { x=0; }
}