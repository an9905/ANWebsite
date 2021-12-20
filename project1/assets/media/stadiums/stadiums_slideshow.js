
var stadiums_array = ["assets/media/stadiums/1.jpeg", "assets/media/stadiums/2.jpeg", "assets/media/stadiums/3.jpeg"];
var stadiums_captions = ["Citi Field", "Home of the Mets", "Forest Hill Stadium"];
var len = stadiums_array.length;
setInterval(runit_stadiums, 1000);
var x=1;
function runit_stadiums() {
    document.getElementById("slideshow_stadiums").src=stadiums_array[x];
    document.getElementById("caption_stadiums").innerHTML=stadiums_captions[x];
    x++;
    if(x == len) { x=0; }
}