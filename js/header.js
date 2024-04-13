const returnHeaderButton = document.querySelector("header button.cancel");
const mobileNav = document.querySelector("header .mobile-nav");
const menuButton = document.querySelector("header .dropdown-menu");

console.log(mobileNav);
console.log(returnHeaderButton);

returnHeaderButton.addEventListener("click", () => {
	mobileNav.classList.add("hidden");
});

menuButton.addEventListener("click", () => {
	mobileNav.classList.remove("hidden");
});
