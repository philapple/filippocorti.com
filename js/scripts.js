$(document).ready(function() {
	$(".typed").typed({
		strings: ["UX Designer", "Blogger", "Human", "Coffee Enthusiast", "Filippo Corti"],
		typeSpeed: 50
	});

	var page404 = $('.page-404');
	var avatar = $('.avatar');

	var images = [
		'https://media.giphy.com/media/OnUCg93ok6Fxe/giphy.gif',
		'https://media.giphy.com/media/5UWvZkFE2r1qE/giphy.gif',
		'https://media.giphy.com/media/3o7TKAR9NkxtkcP5ao/giphy.gif',
		'https://media.giphy.com/media/PYEGoZXABBMuk/giphy.gif',
		'https://media.giphy.com/media/KFpnEok68LhHa/giphy.gif',
		'https://media.giphy.com/media/fDdVNus5ztt7O/giphy.gif'
	];

	var currentIndex = 0;

	function changeImage() {
		$(this).css({
			'background-color': '#00a071',
			'background-image': 'url(' + images[currentIndex] + ')'
		});

		avatar.addClass('infinite')

		setTimeout(function() {
			avatar.removeClass('infinite');
		}, 1500);

		currentIndex = currentIndex === images.length-1 ? 0 : currentIndex + 1;
	}
	page404.on('click', changeImage);

});
