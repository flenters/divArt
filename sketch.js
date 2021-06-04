let x, y, r, g, b;
let randomCircleSize;
let randomSquareSize;
let randomOpacity;

function setup() {
    createCanvas(1920,1080);
    background(0);
}

function draw(){
    randomCircleSize = random(50);
    randomSquareSize = random(50);
    randomOpacity = random(255);

    r = random(255);
    g = random(255);
    b = random(255);

    xCircle = random(1920);
    yCircle = random(1080);
    xSquare = random(1920);
    ySquare = random(1080);

    noStroke();
    fill(r,g,b,randomOpacity);
    circle(xCircle,yCircle,randomCircleSize);
    square(xSquare,ySquare,randomSquareSize);
}
