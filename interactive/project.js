let circSelect;
let circleOpt1 = 'white';
let circleOpt2 = 'white';
let circleOpt3 = 'white';
let loseImg1;
let loseImg2;
let winImg3;
let loseImg4;
let loseImg5;
let winImg6;
let loseImg7;
let loseImg8;
let winImg9;


function setup() {
    createCanvas(400, 400);
}

function preload() {
    loseImg1 = loadImage('https://wramire8.github.io/DES427/7.png');
    loseImg2 = loadImage('https://wramire8.github.io/DES427/8.png');
    winImg3 = loadImage('https://wramire8.github.io/DES427/9.png');
    loseImg4 = loadImage('https://wramire8.github.io/DES427/4.png');
    loseImg5 = loadImage('https://wramire8.github.io/DES427/5.png');
    winImg6 = loadImage('https://wramire8.github.io/DES427/6.png');
    loseImg7 = loadImage('https://wramire8.github.io/DES427/1.png');
    loseImg8 = loadImage('https://wramire8.github.io/DES427/2.png');
    winImg9 = loadImage('https://wramire8.github.io/DES427/3.png');


}

function draw() {

    background(220);
    fill('black');
    textSize(20);
    text('Uncover a blue circle to win', 75, 50);
    fill(circleOpt1);
    createCircle(100, 200);
    fill(circleOpt2);
    createCircle(200, 200);
    fill(circleOpt3);
    createCircle(300, 200);
    circSelect = random(4);
    if (circleOpt1 === 'green') {
        image(loseImg1, 0, 0);
        noLoop();
    }
    if (circleOpt1 === 'red') {
        image(loseImg2, 0, 0);
        noLoop();
    }
    if (circleOpt1 === 'blue') {
        image(winImg3, 0, 0);
        noLoop();
    }
    if (circleOpt2 === 'green') {
        image(loseImg4, 0, 0);
        noLoop();
    }
    if (circleOpt2 === 'red') {
        image(loseImg5, 0, 0);
        noLoop();
    }
    if (circleOpt2 === 'blue') {
        image(winImg6, 0, 0);
        noLoop();
    }
    if (circleOpt3 === 'green') {
        image(loseImg7, 0, 0);
        noLoop();
    }
    if (circleOpt3 === 'red') {
        image(loseImg8, 0, 0);
        noLoop();
    }
    if (circleOpt3 === 'blue') {
        image(winImg9, 0, 0);
        noLoop();
    }

}

function createCircle(xPos, yPos) {
    circle(xPos, yPos, 50);
}

function mouseReleased() {
    let d = dist(mouseX, mouseY, 100, 200);
    let d2 = dist(mouseX, mouseY, 200, 200);
    let d3 = dist(mouseX, mouseY, 300, 200);
    if (d < 25) {
        if (circSelect < 2) {
            print('Try Again')
            circleOpt1 = 'red';
        } else if (circSelect > 2 && circSelect < 3) {
            print('Win')
            circleOpt1 = 'blue';
        } else {
            print('Try Again')
            circleOpt1 = 'green';
        }
    }

    if (d2 < 25) {
        if (circSelect < 2) {
            print('Try Again')
            circleOpt2 = 'red';
        } else if (circSelect > 2 && circSelect < 3) {
            print('Win')
            circleOpt2 = 'blue';
        } else {
            print('Try Again')
            circleOpt2 = 'green';

        }

    }
    if (d3 < 25) {
        if (circSelect < 2) {
            print('Try Again')
            circleOpt3 = 'red';
        } else if (circSelect > 2 && circSelect < 3) {
            print('Win')
            circleOpt3 = 'blue';
        } else {
            print('Try Again')
            circleOpt3 = 'green';
        }
    }
}
