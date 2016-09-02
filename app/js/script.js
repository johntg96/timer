// script.js
// regular and pomodaro timer

// un-hide timer input settings
function setRegValues() {
	if ($("#reg-timer-values").hasClass("hide")) {
		$("#reg-timer-values").removeClass("hide");
	} else {
		$("#reg-timer-values").addClass("hide");
	}
	//$("#pomodaro-timer-values").addClass("hide");
}

//function setPomodaroValues() {
	//$("#pomodaro-timer-values").removeClass("hide");
	//$("#reg-timer-values").addClass("hide");
//}

// hide timer-menu and display timer-clock
function startRegTimer() {
	// get amount of minutes from input
	var amountOfTime = $("#reg-timer-input").val();

	// hide timer-menu
	$(".timer-menu").addClass("hide");
	$(".footer").addClass("hide");
	// un-hide timer-clock
	$(".timer-clock").removeClass("hide");

	var seconds = amountOfTime * 60;
	var runTimer = setInterval(timer, 1000) // 1000 will run timer() every second!
	
	function timer() {
		seconds = seconds -1;
		if (seconds <= 0) {
			clearInterval(seconds);
			// counter ended, do something here
			$(".timer-clock").addClass("hide");
			$(".timer-menu").removeClass("hide");
			$(".footer").removeClass("hide");
		}

		// Do code for showing number of seconds here
		$(".timer-nums").text(seconds);
	}
}

//function startPomodaroTimer() {
	// get amount of minutes from input
	//var amountOfTime = $("#pomodaro-timer-input").val();
	//alert(amountOfTime); // for testing purposes

	// hide timer-menu
	//$(".timer-menu").addClass("hide");

	// un-hide timer-clock
//}