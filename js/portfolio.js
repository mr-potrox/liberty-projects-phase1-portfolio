
/* Mobile toggle menu  function*/
function mobileToggleMenu(toggle) {
	// const selector = element;
	const navBarMenu = document.querySelector(".navbar-menu");
    if (toggle.classList.contains("active")) {
			// adding the X close icon.
			toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
			// Displaying the NavBar menu items.
			navBarMenu.classList.add("active");
			toggle.classList.remove("active");
    } 
		else {
			// Hiding the NavBar menu items.
			navBarMenu.classList.remove("active");
			toggle.classList.add("active");
			// adding the hmaburguer menu icon 
			toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    }
}
