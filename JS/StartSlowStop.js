
$(document).ready(function() {
	$("#start").click(function() {
	  $("#start").css("opacity", "1.0");
	  $("#slow").css("opacity", "0.3");
	  $("#stop").css("opacity", "0.3");
	});
	$("#slow").click(function() {
	  $("#slow").css("opacity", "1.0");
      $("#start").css("opacity", "0.3");
	  $("#stop").css("opacity", "0.3");
	});
	$("#stop").click(function() {
	  $("#stop").css("opacity", "1.0");
      $("#slow").css("opacity", "0.3");
	  $("#start").css("opacity", "0.3");
	});
});
