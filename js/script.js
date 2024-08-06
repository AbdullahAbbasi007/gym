let swiper = new Swiper(".swiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: "auto",
	breakpoints: {
		500: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});

let btn = document.getElementById("checkbox");

btn.addEventListener("change", () => {
	document.body.classList.toggle("dark-mood");
	if (document.body.classList.contains("dark-mood")) {
		btn.innerHTML = "Light Mood";
	} else {
		btn.innerHTML = "Dark Modd";
	}
});
var nswiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

let nav = document.getElementById("hide-nav");

function showMenu() {
	nav.style.top = "0px";
}
function hideMenu() {
	nav.style.top = "-250px";
}
