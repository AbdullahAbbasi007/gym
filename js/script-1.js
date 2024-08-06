let icon = document.getElementById("moon-icon");

icon.onclick = function () {
	document.body.classList.toggle("dark-mood");
	if (document.body.classList.contains("dark-mood")) {
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
	} else {
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
	}
};

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
