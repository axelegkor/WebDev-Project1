//Functions are inspired by the W3Schools tutorial on Canvas: https://www.w3schools.com/html/html5_canvas.asp

const c = document.getElementById("paintingCanvas");
const ctx = c.getContext("2d");

$("img").hide();
function drawPlane(x) {
  const img = document.getElementById("plane");
  ctx.drawImage(img, x, 10, 100, 100);
}

// Functions for drawing sunrise/sunset

function drawSunsetSky() {
  const grdSunsetSky = ctx.createRadialGradient(262, 350, 60, 262, 350, 700);
  grdSunsetSky.addColorStop(0, "white");
  grdSunsetSky.addColorStop(1, "blue");
  ctx.fillStyle = grdSunsetSky;
  ctx.fillRect(0, 0, 524, 110);
}

function drawSunsetSun() {
  const grdSunsetSun = ctx.createRadialGradient(262, 240, 10, 262, 750, 800);
  grdSunsetSun.addColorStop(0, "yellow");
  grdSunsetSun.addColorStop(0.7, "red");
  ctx.beginPath();
  ctx.arc(262, 4000, 3900, 0, 2 * Math.PI);
  ctx.fillStyle = grdSunsetSun;
  ctx.fill();
}

function drawSunsetGround() {
  const grdSunsetGround = ctx.createRadialGradient(
    262,
    700,
    300,
    262,
    500,
    500
  );
  grdSunsetGround.addColorStop(0, "brown");
  grdSunsetGround.addColorStop(1, "yellow");
  ctx.fillStyle = grdSunsetGround;
  ctx.fillRect(0, 240, 524, 350);
}

function drawSunsetMountain1() {
  ctx.beginPath();
  ctx.moveTo(400, 270);
  ctx.lineTo(524, 200);
  ctx.lineTo(524, 300);
  ctx.fillStyle = "#AE4600";
  ctx.fill();
}

function drawSunsetMountain2() {
  ctx.beginPath();
  ctx.moveTo(35, 200);
  ctx.lineTo(0, 240);
  ctx.lineTo(0, 255);
  ctx.lineTo(115, 250);
  ctx.fillStyle = "#AE4600";
  ctx.fill();
}

function drawSunsetCanvas() {
  drawSunsetSky();
  drawSunsetSun();
  drawSunsetGround();
  drawSunsetMountain1();
  drawSunsetMountain2();
}

// Functions for drawing day

function drawDaySky() {
  const grdDaySky = ctx.createRadialGradient(262, 350, 60, 262, 350, 700);
  grdDaySky.addColorStop(0, "white");
  grdDaySky.addColorStop(1, "blue");
  ctx.fillStyle = grdDaySky;
  ctx.fillRect(0, 0, 524, 240);
}


// Inspired by https://stackoverflow.com/questions/16494262/how-to-draw-a-circle-with-centered-fadeing-out-gradients-with-html5-canvas
function drawDaySun() {
  const grdDaySun = ctx.createRadialGradient(262, 45, 5, 262, 45, 60);
  grdDaySun.addColorStop(0, "yellow");
  grdDaySun.addColorStop(1, "white");

  ctx.beginPath();
  ctx.arc(262, 45, 40, 0, 2 * Math.PI);
  ctx.fillStyle = grdDaySun;
  ctx.fill();
}

function drawDayGround() {
  const grdDayGround = ctx.createRadialGradient(262, 700, 30, 262, 500, 500);
  grdDayGround.addColorStop(0, "brown");
  grdDayGround.addColorStop(1, "yellow");
  ctx.fillStyle = grdDayGround;
  ctx.fillRect(0, 240, 524, 350);
}

function drawDayMountain1() {
  ctx.beginPath();
  ctx.moveTo(400, 270);
  ctx.lineTo(524, 200);
  ctx.lineTo(524, 300);
  ctx.fillStyle = "#C85F1A";
  ctx.fill();
}

function drawDayMountain2() {
  ctx.beginPath();
  ctx.moveTo(35, 200);
  ctx.lineTo(0, 240);
  ctx.lineTo(0, 255);
  ctx.lineTo(115, 250);
  ctx.fillStyle = "#C85F1A"; //(200, 95, 26)
  ctx.fill();
}

function drawDayCanvas() {
  drawDaySky();
  drawDaySun();
  drawDayGround();
  drawDayMountain1();
  drawDayMountain2();
}

// Functions for drawing night

function drawNightSky() {
  ctx.beginPath();
  ctx.rect(0, 0, 524, 240);
  ctx.fillStyle = "black";
  ctx.fill();
}

function drawNightGround() {
  const grdNightGround = ctx.createRadialGradient(
    150,
    -1000,
    1250,
    150,
    -1100,
    1400
  );
  grdNightGround.addColorStop(0, "#595959");
  grdNightGround.addColorStop(0.1, "#21130D");
  ctx.fillStyle = grdNightGround;
  ctx.fillRect(0, 240, 524, 350);
}

function drawNightMoon() {
  const grdNightMoon = ctx.createRadialGradient(150, 50, 30, 150, 50, 60);
  grdNightMoon.addColorStop(0, "white");
  grdNightMoon.addColorStop(0.3, "black");

  ctx.beginPath();
  ctx.arc(150, 50, 40, 0, 2 * Math.PI);
  ctx.fillStyle = grdNightMoon;
  ctx.fill();
}

function drawNightMountain1() {
  ctx.beginPath();
  ctx.moveTo(400, 270);
  ctx.lineTo(524, 200);
  ctx.lineTo(524, 300);
  ctx.fillStyle = "#AE4600";
  ctx.fill();
}

function drawNightMountain2() {
  ctx.beginPath();
  ctx.moveTo(35, 200);
  ctx.lineTo(0, 240);
  ctx.lineTo(0, 255);
  ctx.lineTo(115, 250);
  ctx.fillStyle = "#AE4600";
  ctx.fill();
}

function drawNightCanvas() {
  drawNightSky();
  drawNightGround();
  drawNightMoon();
  drawNightMountain1();
  drawNightMountain2();
}

// Main run

let dayTimeIndexCanvas = 0;

$(document).ready(function () {
  $("#paintingCanvas").click(function () {
    switchDayTime();
  });
});

function switchDayTime() {
  if (dayTimeIndexCanvas === 3) {
    dayTimeIndexCanvas = 0;
  } else {
    dayTimeIndexCanvas++;
  }
}

const startTime = new Date();
setInterval(function () {
  ctx.clearRect(0, 0, 524, 724);

  if (dayTimeIndexCanvas === 0) {
    drawSunsetCanvas();
  } else if (dayTimeIndexCanvas === 1) {
    drawDayCanvas();
  } else if (dayTimeIndexCanvas === 2) {
    drawSunsetCanvas();
  } else if (dayTimeIndexCanvas === 3) {
    drawNightCanvas();
  }

  const currentTime = new Date();
  drawPlane(
    (((((currentTime.getSeconds() - startTime.getSeconds() + 60) % 60) - 2) *
      200 +
      (currentTime.getMilliseconds() - startTime.getMilliseconds() - 845.2149) /
        5) %
      2000) -
      100
  );
}, 1);
