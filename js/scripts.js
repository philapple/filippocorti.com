$(document).ready(function() {

	$(".typed").typed({
		strings: ["Filippo Corti"],
		typeSpeed: 50
	});

	// Select elements and start.
const b = baffle('.baffle').start().set({ speed: 100 }).reveal(4000);


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

function getMediumRss(callback) {
    const URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.eppol.net%2Fblogmac%22LIMIT%208%20&format=json&callback=";
    return window.fetch(URL, {
        method: 'GET'
    }).then(function(data) {
        data.json().then(function (results) {
            const articles = results.query.results.item;
            callback(articles);
        });
    });
}

function Article(model) {
    var render = function () {
        return '<p><a href="' + model.link + '" class="post-link" target="_blank">' + model.title + '</a></p>';
    };

    return {
        render: render
    };
}

function renderArticles(selector) {
    getMediumRss(function (articles) {
        var articlesDOMString = '';

        articles.forEach(function (article) {
            articlesDOMString += new Article(article).render();
        });

        var domSelector = document.querySelector(selector);
        domSelector.innerHTML = articlesDOMString;
    });
}

window.onload = function () {
    renderArticles('.posts');

    window.onload = undefined;
};
