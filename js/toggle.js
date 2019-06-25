function myFunction() {

	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	// if (dots.style.display == "none") {

	// 	dots.style.display = "inline";
	// 	btnText.innerHTML = "See More";
	// 	moreText.style.display = "none";

	// } else {

	// 	dots.style.display = "none";
	// 	btnText.innerHTML = "Read Less";
	// 	moreText.style.display = "inline"
	// }


	// if (dots.style.display == "inline") {

	// 	dots.style.display = "none";
	// 	btnText.innerHTML = "See Less";
	// 	moreText.style.display = "inline";

	// } else {

	// 	dots.style.display = "inline";
	// 	btnText.innerHTML = "See More";
	// 	moreText.style.display = "none";
	// }

	if (moreText.style.display == "none") {

		moreText.style.display = "inline";
		// btnText.innerHTML = "See Less";
		btnText.style.display = "none";
		dots.style.display = "none";
	} else {

		moreText.style.display = "none";
		btnText.innerHTML = "See More";
	}

}

function hide() {
	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	dots.style.display = "none";
	moreText.style.display = "none";

}