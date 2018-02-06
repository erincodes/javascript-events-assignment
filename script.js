/*
* Tier I of assignment challenge options = change text color.
*
* Reference https://bootcamp-coders.cnm.edu/class-materials/javascript/events/assignment.php
 */
document.getElementById("paragraph-one").style.color = "magenta";

/*
* Tier II of assignment challenge options = find and replace an instance of "pork" with "ERIN IS AWESOME" each time the user clicks the button.
*
* Reference https://www.w3schools.com/jsref/jsref_replace.asp
*
* Reference https://bootcamp-coders.cnm.edu/class-materials/javascript/events/assignment.php
 */

function swapFunction () {
	var str = document.getElementById("bacon-body").innerHTML;
	var res = str.replace("pork", "ERIN IS AWESOME");
	document.getElementById("bacon-body").innerHTML = res;
}
