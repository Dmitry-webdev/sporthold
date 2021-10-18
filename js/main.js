window.addEventListener('load', function () {
	let burger = document.querySelector('.burger');
	burger.addEventListener('click', function () {
		burger.classList.toggle('open');
	});
	let nav = document.querySelector('.nav__menu');
	burger.addEventListener('click', function () {
		nav.classList.toggle('open');
	});
	document.querySelector('.burger').addEventListener('click', () => {
		document.documentElement.classList.toggle('lock');
	});

	let config = document.querySelector('.card');
	let mixer = mixitup(config);

	const slider = document.querySelector('.swiper-container');
	const userComments = document.querySelectorAll('.user__comment');

	let swiper = new Swiper(slider, {
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		mousewheel: true,
		keyboard: true,

		breakpoints: {
			320: {
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				slidesPerView: 1,
			},
			375: {
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				slidesPerView: 1,
			},
			768: {
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});

	swiper.on('slideChangeTransitionEnd', function () {
		const index = document.querySelector('.swiper-container .swiper-slide-active').dataset.swiperSlideIndex;

		userComments.forEach(el => { el.classList.remove('user__comment--active') });
		document.querySelector(`.user__comment[data-text="${index}"]`).classList.add('user__comment--active')
	});


});