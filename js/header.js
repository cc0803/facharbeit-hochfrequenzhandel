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
	'<h1>Inwieweit stellen der Hochfrequenzhandel und Hedgefonds ein Risiko für Privatanleger dar?</h1><video src="./assets/startingPage.mp4" autoplay muted loop id="background-video" poster="./assets/startingPagePicture.png"></video><div class="facharbeit-werbung"><h4>Link zur Facharbeit</h4><a href="">Facharbeit</a></div>';
titleFacharbeit.innerHTML = video;
titleFacharbeit.classList.remove("title-background");
// }
