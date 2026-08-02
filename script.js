// Boolean that determines whether the mini navigation menu will be shown or not.
let nav_shown = false;

function toggle_hamburger_button() {
	nav_shown = !nav_shown; // Toggles the boolean
	if (nav_shown==true) {
		document.getElementById('nav_small').style.display = 'grid';
	} else {
		document.getElementById('nav_small').style.display = 'none';
	}
}