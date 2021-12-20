
var parks_array = ["assets/media/parks/1.jpeg", "assets/media/parks/2.jpeg", "assets/media/parks/3.jpeg"];
var parks_captions = ["Forest Park", "Queens Botanical Garden", "Queensbridge Park"];
var len = parks_array.length;
setInterval(runit_parks, 1500);
var x=1;
function runit_parks() {
    document.getElementById("slideshow_parks").src=parks_array[x];
    document.getElementById("caption_parks").innerHTML=parks_captions[x];
    x++;
    if(x == len) { x=0; }
}


var beaches_array = ["assets/media/beaches/1.jpeg", "assets/media/beaches/2.jpeg", "assets/media/beaches/3.jpeg"];
var beaches_captions = ["Jones Beach", "Rockaway Beach", "Hallet's Cove"];
var len = beaches_array.length;
setInterval(runit_beaches, 1900);
var x=1;
function runit_beaches() {
    document.getElementById("slideshow_beaches").src=beaches_array[x];
    document.getElementById("caption_beaches").innerHTML=beaches_captions[x];
    x++;
    if(x == len) { x=0; }
}
