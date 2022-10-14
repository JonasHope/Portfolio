/*----hamburger menu ----*/

function hamburgerMenu() {
    const nav = document.querySelector("nav");
	
	if (nav.classList.contains("hide_nav")) {
	  nav.classList.remove("hide_nav");
	} else {
	  nav.classList.add("hide_nav");
	}
  };

  /*------ links --------*/

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}