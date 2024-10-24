const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');


navBtn.onclick = function (){
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--mobile');
    document.body.toggle('no-scroll');
};


var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		640: {
			items: 3,
			startPosition: 1,
		},
		1000: {
			items: 3,
			margin: 30,
		},
	},
});
// Go to the next item
$('.cards__btn-right').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.cards__btn-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})