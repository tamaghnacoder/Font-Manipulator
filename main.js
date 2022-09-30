difference=0;
rightwristx=0;
leftwristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550)
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx)
    }
}
function draw(){
    background("blue");
    textSize(difference);
    fill("white");
    text("Speech",50,400);
}