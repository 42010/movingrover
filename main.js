canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
var mars = ["mars.jpg", "th1.jpeg", "th2.jpg"];
var random = Math.floor(Math.random()*3);
var background_image = mars[random];
var rover_image = "rover.png";
var rover_x = 10;
var rover_y = 10;
var rover_width = 70;
var rover_height = 70;


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.KeyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log(keyPressed);
    }
    if (keyPressed == "37") {
        left();
        console.log(keyPressed)
    }
    if (keyPressed == "39") {
        right();
        console.log(keyPressed);
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        console.log("up Arrow =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 750) {

        rover_y += 10;
        console.log("down Arrow =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("left Arrow =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 550) {
        rover_x += 10;
        console.log("right Arrow =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
