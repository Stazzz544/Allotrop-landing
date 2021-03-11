//полноэкранный скролл
@@include('fullpage.js');

//функция для подключения webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//==================================


window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.navigation__flex'),
	menuItem = document.querySelectorAll('.menu_item'),
	burger = document.querySelector('.burger');


	burger.addEventListener('click', () => {
		 burger.classList.toggle('burger_active');
		 menu.classList.toggle('navigation__flex_active');
	});


	menuItem.forEach(item => {
		 item.addEventListener('click', () => {
			  burger.classList.toggle('burger_active');
			  menu.classList.toggle('navigation__flex_active');
		 })
	})
});




new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	anchors:['firstPage', 'secondPage', 'thirdPage'],
	navigation: true,
	navigationTooltips: true,
	navigationTooltips: ['Главная', 'О планете', 'Миссия'],
	// showActiveTooltip: true,
	responsiveWidth: 1000 //убераем прокрутку на определённом типе экрана
});

