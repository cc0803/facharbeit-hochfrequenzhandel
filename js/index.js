const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const portfolioCompanies = document.querySelectorAll(".portfolio-company");
portfolioCompanies.forEach((company) => observer.observe(company));
