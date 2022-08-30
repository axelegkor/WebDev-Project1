var c = document.getElementById("paintingCanvas");
var ctxSky = c.getContext("2d");

// Create gradient
var grdSky = ctxSky.createRadialGradient(262, 350, 60, 262, 350, 700);
grdSky.addColorStop(0, "white");
grdSky.addColorStop(1, "blue");

// Fill with gradient
ctxSky.fillStyle = grdSky;
ctxSky.fillRect(0, 0, 524, 110);

//
//
//
//new gradient
var ctxSun = c.getContext("2d");
// Create gradient
var grdSun = ctxSun.createRadialGradient(262, 240, 10, 262, 750, 800);
grdSun.addColorStop(0, "yellow");
grdSun.addColorStop(1, "red");

// Fill with gradient
ctxSun.fillStyle = grdSun;
ctxSun.fillRect(0, 110, 524, 130);

//
//
//
//new gradient
var ctxGround = c.getContext("2d");
// Create gradient
var grdGround = ctxGround.createRadialGradient(262, 700, 300, 262, 500, 500);
grdGround.addColorStop(0, "brown");
grdGround.addColorStop(1, "yellow");

// Fill with gradient
ctxGround.fillStyle = grdGround;
ctxGround.fillRect(0, 240, 524, 350);

var ctxMountain1 = c.getContext("2d");
ctxMountain1.beginPath();
ctxMountain1.moveTo(400, 270);
ctxMountain1.lineTo(524, 200);
ctxMountain1.lineTo(524, 300);
ctxMountain1.fillStyle = "#AE4600";
ctxMountain1.fill();

var ctxMountain2 = c.getContext("2d");
ctxMountain2.beginPath();
ctxMountain2.moveTo(35, 200);
ctxMountain2.lineTo(0, 240);
ctxMountain2.lineTo(0, 255);
ctxMountain2.lineTo(115, 250);
ctxMountain2.fillStyle = "#AE4600";
ctxMountain2.fill();
