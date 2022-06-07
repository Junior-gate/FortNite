var countDownDate = new Date("June 7, 2022 16:44:21").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

	// Get today's date and time
	var now = new Date().getTime();
	// var now = 1232141242145;
	console.log(now);
	

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("time").innerHTML = "0" + hours + ":" +
		minutes + ":" + seconds;

	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("time").innerHTML = "EXPIRED";
	}
}, 1000);