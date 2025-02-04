// Toggle mobile menu

document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
	const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

	toggleButton.addEventListener("click", function () {
		mobileMenu.classList.toggle("active");
	});
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");

	if (this.window.scrollY > 0) {
		navbar.classList.add("navbar-scroll");
	} else {
		navbar.classList.remove("navbar-scroll");
	}
});

// Carousel
let currentIndex = 0;

function moveSlide(direction) {
	const slides = document.querySelectorAll(".carousel-item");
	slides[currentIndex].classList.remove("active");

	currentIndex += direction;

	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	} else if (currentIndex >= slides.length) {
		currentIndex = 0;
	}

	slides[currentIndex].classList.add("active");
	const offset = -currentIndex * 100; // Move slides
	document.querySelector(
		".carousel-inner"
	).style.transform = `translateX(${offset}%)`;
}

// Optional: Auto transition every 5 seconds
setInterval(() => moveSlide(1), 5000);
