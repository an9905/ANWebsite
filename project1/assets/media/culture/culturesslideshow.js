/*
   _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \ 
 ( c | u | l | t | u | r | e )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/ 
*/
var culture_array = ["assets/media/culture/1.jpeg", "assets/media/culture/2.jpeg", "assets/media/culture/3.jpeg"];
var culture_captions = ["Flushing Main Street Mini Asia", "Astoria Queens Mini Greece", "Jamaica Avenue"];
var len = culture_array.length;
setInterval(runit_culture, 2000);
var x=1;
function runit_culture() {
    document.getElementById("slideshow_culture").src=culture_array[x];
    document.getElementById("caption_culture").innerHTML=culture_captions[x];
    x++;
    if(x == len) { x=0; }
}

/*
   _   _   _   _  
  / \ / \ / \ / \ 
 ( f | o | o | d )
  \_/ \_/ \_/ \_/ 
*/
var events_array = ["assets/media/events/1.jpeg", "assets/media/events/2.jpeg", "assets/media/events/3.jpeg"];
var events_captions = ["Lunar New Year", "TD Five Boro Bike Tour", "Queens County Fair"];
var len = events_array.length;
setInterval(runit_events, 2000);
var x=1;
function runit_events() {
    document.getElementById("slideshow_events").src=events_array[x];
    document.getElementById("caption_events").innerHTML=events_captions[x];
    x++;
    if(x == len) { x=0; }
}
