var food_array = ["assets/media/food/1.jpeg", "assets/media/food/2.jpeg", "assets/media/food/4.jpeg"];
var food_captions = ["Christina's Deli", "Jackson Hole", "The Heart-Attack Sandwich"];
var len = food_array.length;
setInterval(runit_food, 2000);
var x=1;
function runit_food() {
    document.getElementById("slideshow_food").src=food_array[x];
    document.getElementById("caption_food").innerHTML=food_captions[x];
    x++;
    if(x == len) { x=0; }
}

var food2_array = ["assets/media/food/3.jpeg", "assets/media/food/5.jpeg", "assets/media/food/6.jpeg"];
var food2_captions = ["King's Souvlaki", "Birria Tacos", "Halal Cart"];
var len = food2_array.length;
setInterval(runit_food2, 1800);
var x=1;
function runit_food2() {
    document.getElementById("slideshow_food2").src= food2_array[x];
    document.getElementById("caption_food2").innerHTML=food2_captions[x];
    if(x == len) { x=0; }
}