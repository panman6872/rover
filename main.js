canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Array_mars_for_game = ["1.mars.jpg","2.mars.jpg","3.mars.jpg","4.mars.jpeg","0.mars.jpg"];
ramdom_number = Math.floor(Math.random()*5)
background_image = Array_mars_for_game[ramdom_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onlad = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up")
    }
    if (keyPressed == '40'); {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is preessed, x =" + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }

}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When up arrow is preessed, x =" + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }

}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When up arrow is preessed, x =" + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When up arrow is preessed, x =" + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}