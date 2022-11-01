music1 = "";
music2 ="";

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(500,250);
    
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);

}
function preload(){
music1 = loadSound("music.mp3");
music1 = loadSound("music2.mp3");
}


