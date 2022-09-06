function drawSunsetSVG() {
  $("#sky").css("fill", "#6E9DB7");
  $("#sunrays1").css("fill", "#ff1900");
  $("#sunrays2").css("fill", "#ff7300");
  $("#sunrays3").css("fill", "#F1CD00");
  $("#sunsetSun").css("fill", "#EAFF00");
  $("#daySun").css("fill", "#6E9DB7");
  $("#ground").css("fill", "#CA7C07");
  $("#moon").css("fill", "#6E9DB7");
  $("#mountain1").css("fill", "#AE4600");
  $("#mountain2").css("fill", "#AE4600");
}

function drawDaySVG() {
  $("#sky").css("fill", "#6699ff");
  $("#sunrays1").css("fill", "#6699ff");
  $("#sunrays2").css("fill", "#6699ff");
  $("#sunrays3").css("fill", "#6699ff");
  $("#sunsetSun").css("fill", "#6699ff");
  $("#daySun").css("fill", "#ffff66");
  $("#ground").css("fill", "#ffcc00");
  $("#moon").css("fill", "#6699ff");
  $("#mountain1").css("fill", "#C85F1A");
  $("#mountain2").css("fill", "#C85F1A");
}

function drawNightSVG() {
  $("#sky").css("fill", "black");
  $("#sunrays1").css("fill", "black");
  $("#sunrays2").css("fill", "black");
  $("#sunrays3").css("fill", "black");
  $("#sunsetSun").css("fill", "black");
  $("#daySun").css("fill", "black");
  $("#ground").css("fill", "#21130D");
  $("#moon").css("fill", "white");
  $("#mountain1").css("fill", "#AE4600");
  $("#mountain2").css("fill", "#AE4600");
}

let dayTimeIndexSVG = 0;
function initSVG() {
  drawSunsetSVG();
}

$(document).ready(function () {
  $("#paintingSVG").click(function () {
    switchDayTimeSVG();
  });
});

function switchDayTimeSVG() {
  if (dayTimeIndexSVG === 3) {
    dayTimeIndexSVG = 0;
  } else {
    dayTimeIndexSVG++;
  }

  if (dayTimeIndexSVG === 0) {
    drawSunsetSVG();
  } else if (dayTimeIndexSVG === 1) {
    drawDaySVG();
  } else if (dayTimeIndexSVG === 2) {
    drawSunsetSVG();
  } else if (dayTimeIndexSVG === 3) {
    drawNightSVG();
  }
}

initSVG();
