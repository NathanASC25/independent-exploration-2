let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;
let time = 0;
let scorePrint;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);

    let timePrint = createP("Timer: " + time);
    timePrint.position(20, 20);

    function run (){
        time++;
        timePrint.html("Timer: " + time);
    }

    let count = setInterval(run, 1000);
    
    setTimeout(() => {
        clearInterval(count);
    }, 120000);

    scorePrint = createP("Score: " + score);
    scorePrint.position(450, 20);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 0, 0)

    // check if in goal
    if (xPos - 15 >= 220 && xPos + 15 <= 280 && yPos + 15 >= 500) {
        score++;
        // reset position and speed
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }
    else if (xPos + 15 < 220 && yPos + 15 >= 500 || xPos - 15 > 280 && yPos + 15 >= 500) {
        score--;
        // reset position and speed
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos < 0) {
        xPos = 500;
    }
    if (xPos > 500) {
        xPos = 0;
    }
    scorePrint.html("Score: " + score);
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(0, 5);
}