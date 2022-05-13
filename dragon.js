let position_x = screen.width;
let position_y = 0;
let canvas;
let context;
let timer;
let speed = 2;
let offset = 200;
let up = 0;
let dragon_x = 100;

directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};

let dragonImage = new Image();
dragonImage.src = "dragon1.png";

window.onload = function () {
  canvas = document.getElementById("dragon");
  canvas.width = screen.width;
  if (canvas && canvas.getContext) {
    context = canvas.getContext("2d");
    start();
  }
};

function animateDragon(speed) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawDragon(dragon_x, offset);
  drawGrass();
  drawHill1(position_x + 50,40, 30,20, 150);
  drawHill2(position_x + 400,40, 50,15, 100);
  drawHill3(position_x +650,30, 50,10, 20);
  drawHill4(position_x + 870,60, 20, 7,20);
  if (position_x + 850 > 0) {
    position_x -= speed;
  } else {
    position_x = canvas.width;
  }
}

function start() {
  stop();
  timer = setInterval(animateDragon, 20, 4);
}

function stop() {
  clearInterval(timer);
}

function drawDragon(x, y) {
  context.drawImage(dragonImage, x, y - dragonImage.height + up);
}

function drawGrass() {
  context.beginPath();
  context.strokeStyle = "green";
  context.lineWidth = 1;
  context.moveTo(0, offset);
  context.lineTo(canvas.width, offset);
  context.stroke();
}

function drawHill1(x, d ,w,d1, h) {
  checkCollision(dragon_x, x, w);
  context.beginPath();
  context.strokeStyle = "gray";
  context.lineWidth = 1;
  context.moveTo(x, offset);
  context.lineTo(x + w/2, offset - d);
  context.moveTo(x + w/2, offset - d);
  context.lineTo(x + w , offset - d1);
  context.moveTo(x + w , offset - d1);
  context.lineTo(x + w*3, h);
  context.moveTo(x + w*3, h);
  context.lineTo(x + w*4, offset);
  context.stroke();
}

function drawHill2(x, d ,w,d1, h) {
  checkCollision(dragon_x, x, w);
  context.beginPath();
  context.strokeStyle = "gray";
  context.lineWidth = 1;
  context.moveTo(x, offset);
  context.lineTo(x - w/2, offset - d);
  context.moveTo(x - w/2, offset - d);
  context.lineTo(x + w , offset - d1);
  context.moveTo(x + w , offset - d1);
  context.lineTo(x + w, h+w);
  context.moveTo(x + w, h+w);
  context.lineTo(x + d1*4, offset);
  context.stroke();
}

function drawHill3(x, d ,w,d1, h) {
  checkCollision(dragon_x, x, w);
  context.beginPath();
  context.strokeStyle = "gray";
  context.lineWidth = 1;
  context.moveTo(x, offset);
  context.lineTo(x - w/2, offset - d);
  context.moveTo(x - w/2, offset - d);
  context.lineTo(x + w , offset);
  context.moveTo(x + w , offset);
  context.lineTo(x + w , offset -h);
  context.moveTo(x + w , offset -h);
  context.lineTo(x + d1*4, offset);
  context.stroke();
}

function drawHill4(x, d ,w,d1, h) {
  checkCollision(dragon_x, x, w);
  context.beginPath();
  context.strokeStyle = "gray";
  context.lineWidth = 1;
  context.moveTo(x, offset);
  context.lineTo(x + w/2, offset - d);
  context.moveTo(x + w/2, offset - d);
  context.lineTo(x + w , offset - d1);
  context.moveTo(x + w , offset - d1);
  context.lineTo(x + w*3, h+d*1.5+w*2);
  context.moveTo(x + w*3, h+d*1.5+w*2);
  context.lineTo(x + w*2, offset);
  context.stroke();
}

function checkCollision(dragon_x, hill_x, hill_w) {
  if (dragon_x > hill_x && dragon_x < hill_x + hill_w && up == 0) {
    alert("Collision!");
    stop();
  }
}

// Задаем обработчик события keydown
addEventListener("keydown", function (event) {
  direction = directions[event.keyCode];
  if (direction == "up") {
    up = -80;
    setTimeout(function () {
      up = 0;
    }, 600);
  }
});
