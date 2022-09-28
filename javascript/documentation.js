$("#documentation-show").click(function () {
  if ($("#documentation").is(":visible")) {
    $("#documentation").hide();
    $("#documentation-show").text("Show Documentation");
  } else {
    $("#documentation").show();
    $("#documentation-show").text("Hide Documentation");
  }
});
