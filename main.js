function preload(){
}

function setup(){
   canvas = createCanvas(640, 480);
   canvas.position(410, 250);
   video = createCapture(VIDEO);
   video.hide();
   tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(0,50, 50);
    stroke(0,50, 50);
    circle(0, 00, 200);
    circle(640, 00, 100);
    circle(0, 480, 100);
    circle(640, 480, 200);

}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}