const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider .slider-line");
let dots = document.querySelectorAll(".dots-item"),
	dotsArea = document.querySelector(".dots-block");
let count = 0;
let width;

function init() {
	width = document.querySelector(".slider").offsetWidth;
	sliderLine.style.width = width * images.length + "px";
	images.forEach((item) => {
		item.style.width = width + "px";
		item.style.height = "auto";
	});
	rollSlider();
}
var timer = 0;
makeTimer();
function makeTimer() {
	clearInterval(timer);
	timer = setInterval(function () {
		scrollSlide(1);
		rollSlider(count);
	}, 5000);
}

init();
window.addEventListener("resize", init);

document
	.querySelector(".slider-next")
	.addEventListener("click", () => scrollSlide(1));

document
	.querySelector(".slider-prev")
	.addEventListener("click", () => scrollSlide(-1));

dots.forEach((dot, index) =>
	dot.addEventListener("click", () => setSlide(index))
);

function scrollSlide(direction) {
	count = (count + direction + images.length) % images.length;
	moveSlide();
}

function setSlide(index) {
	count = index;
	moveSlide();
}

function moveSlide() {
	document.querySelector(".dots-item.active").classList.remove("active");
	document.querySelectorAll(".dots-item")[count].classList.add("active");

	rollSlider();
	makeTimer();
}

function rollSlider() {
	sliderLine.style.transform = "translate(-" + count * width + "px)";
}

//   свайп слайдера
const isMobile = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile.matches) {
	let startX = 0,
		startY = 0,
		moveX = 0,
		moveY = 0;
	sliderLine.addEventListener('touchstart', touchStart);
	sliderLine.addEventListener('touchmove', touchMove);
	sliderLine.addEventListener('touchend', touchEnd);
	function touchStart(e) {
		startX = e.changedTouches[0].screenX;
		// startY = e.changedTouches[0].clientY ;
	}

	function touchMove(e) {
		moveX = e.changedTouches[0].screenX;
		// moveY = e.changedTouches[0].clientY ;
	}
	function touchEnd() {
		if (startX + 100 < moveX) {
			// console.log('right');
			scrollSlide(-1);
		} else if (startX - 100 > moveX) {
			// console.log('left');
			scrollSlide(1);
		}
		if (startY + 100 < moveY) {
			// console.log('down');
		} else if (startY - 100 > moveY) {
			// console.log('up');
		}
	}
}
// второй слайдер
const images2 = document.querySelectorAll(".slider2 .slider-line2 .slide");
const sliderLine2 = document.querySelector(".slider2 .slider-line2");
let dots2 = document.querySelectorAll(".dots-item2"),
	dotsArea2 = document.querySelector(".dots-block2");
let count2 = 0;
let width2;

function init2() {
	width2 = document.querySelector(".slider2").offsetWidth;
	sliderLine2.style.width = width * images2.length + "px";
	images2.forEach((item) => {
		item.style.width = width2 + "px";
		item.style.height = "auto";
	});
	rollSlider2();
}
var timer = 0;
makeTimer2();
function makeTimer2() {
	clearInterval(timer);
	timer = setInterval(function () {
		scrollSlide2(1);
		rollSlider2(count2);
	}, 5000);
}

init2();
window.addEventListener("resize", init2);

document
	.querySelector(".slider-next2")
	.addEventListener("click", () => scrollSlide2(1));

document
	.querySelector(".slider-prev2")
	.addEventListener("click", () => scrollSlide2(-1));

dots2.forEach((dot, index) =>
	dot.addEventListener("click", () => setSlide2(index))
);

function scrollSlide2(direction) {
	count2 = (count2 + direction + images2.length) % images2.length;
	moveSlide2();
}

function setSlide2(index) {
	count2 = index;
	moveSlide2();
}

function moveSlide2() {
	document.querySelector(".dots-item2.active").classList.remove("active");
	document.querySelectorAll(".dots-item2")[count2].classList.add("active");

	rollSlider2();
	makeTimer2();
}

function rollSlider2() {
	sliderLine2.style.transform = "translate(-" + count2 * width2 + "px)";
}

//   свайп слайдера
const isMobile2 = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile2.matches) {
	let startX = 0,
		startY = 0,
		moveX = 0,
		moveY = 0;
	sliderLine2.addEventListener('touchstart', touchStart);
	sliderLine2.addEventListener('touchmove', touchMove);
	sliderLine2.addEventListener('touchend', touchEnd);
	function touchStart(e) {
		startX = e.changedTouches[0].screenX;
		// startY = e.changedTouches[0].clientY ;
	}

	function touchMove(e) {
		moveX = e.changedTouches[0].screenX;
		// moveY = e.changedTouches[0].clientY ;
	}
	function touchEnd() {
		if (startX + 100 < moveX) {
			// console.log('right');
			scrollSlide2(-1);
		} else if (startX - 100 > moveX) {
			// console.log('left');
			scrollSlide2(1);
		}
		if (startY + 100 < moveY) {
			// console.log('down');
		} else if (startY - 100 > moveY) {
			// console.log('up');
		}
	}
}

// кнопка скролла вверх
// кнопка вверх
let btn = document.querySelector(".scroll");
window.addEventListener("resize", () => {
	if (window.innerWidth < 480) {
		buttonScrollTopMobile();
	}
});
// появление кнопки на телефонах]
function buttonScrollTopMobile() {
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 300) {
			btn.classList.add("scroll_active");
		} else {
			btn.classList.remove("scroll_active");
		}
	});

	btn.onclick = function (click) {
		click.preventDefault();
		scrollTo(0, 0);
	};
}
// popup
const popupBtn = document.querySelector('.burger-open'),
	popupContent = document.querySelector('.burger-menu'),
	popupLinks = document.querySelectorAll('.burger-menu__link'),
	socialBtn = document.querySelector('.social'),
	socialContent = document.querySelector('.social__content-bg'),
	socialLinks = document.querySelectorAll('.social-content__link');

window.addEventListener('resize', () => {
	if (window.innerWidth > 959) {
		popupBtn.classList.remove('open');
		popupContent.classList.remove('active');
		document.body.classList.remove('overflow');
	}
});

function OpenPopup() {
	popupBtn.addEventListener('click', () => {
		popupBtn.classList.toggle('open');
		popupContent.classList.toggle('active');
		document.body.classList.toggle('overflow');
	});
	socialBtn.addEventListener('click', () => {
		socialBtn.classList.toggle('active');
		socialContent.classList.toggle('active');
		document.body.classList.toggle('overflow');
	});
	document.querySelector('.banner__inner').style.paddingTop = document.querySelector('.header').offsetHeight + 'px';
	document.addEventListener('click', (e) => {
		const withinBoundariesBtn = e.composedPath().includes(popupBtn);
		const withinBoundariesContent = e.composedPath().includes(popupContent);
		const withinBoundariesSocialBtn = e.composedPath().includes(socialBtn);

		if (!withinBoundariesBtn && !withinBoundariesContent && !withinBoundariesSocialBtn) {
			popupBtn.classList.remove('open');
			popupContent.classList.remove('active');
			document.body.classList.remove('overflow');
			socialContent.classList.remove('active');
			socialBtn.classList.remove('active');
		}
	});
	popupLinks.forEach(link => {
		link.addEventListener('click', () => {
			popupBtn.classList.remove('open');
			popupContent.classList.remove('active');
			document.body.classList.remove('overflow');
		});
	});
	socialLinks.forEach(el => {
		el.addEventListener('click', () => {
			socialBtn.classList.remove('active');
			socialContent.classList.remove('active');
			document.body.classList.remove('overflow');
		});
	});
}

function closePopupEsc() {
	// Закрытие окна по нажатию клавиши Escape.
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			popupBtn.classList.remove('open');
			popupContent.classList.remove('active');
			document.body.classList.remove('overflow');
		}
	});
}
OpenPopup();
closePopupEsc();