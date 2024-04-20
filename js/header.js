const returnHeaderButton = document.querySelector("header button.cancel");
const mobileNav = document.querySelector("header .mobile-nav");
const menuButton = document.querySelector("header .dropdown-menu");
const html = document.querySelector("html");

returnHeaderButton.addEventListener("click", () => {
	mobileNav.classList.add("hidden");
});

menuButton.addEventListener("click", () => {
	mobileNav.classList.remove("hidden");
});

// check screensize of device

const width = window.innerWidth;
const titleFacharbeit = document.querySelector(".title-facharbeit");

// if (width >= 800) {
	const video =
		'';
	titleFacharbeit.innerHTML = video;
	titleFacharbeit.classList.remove("title-background");
// }
