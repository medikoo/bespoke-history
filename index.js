'use strict';

module.exports = function (deck/*, options*/) {
	var update, activateSlide, options = Object(arguments[1])
	  , root = options.root || '/';

	activateSlide = function (index) {
		if (index === deck.slide()) return;
		deck.slide(index);
	};

	update = function (e) {
		var id = location.pathname.slice(root.length, -1);

		if (!id) return;
		if (isNaN(id)) {
			deck.slides.forEach(function (slide, i) {
				if (slide.getAttribute('data-bespoke-id') === id) activateSlide(i);
			});
			return;
		}
		activateSlide(Number(id));
	};

	setTimeout(function () {
		update();
		var first = deck.slides[0].getAttribute('data-bespoke-id') || '1';
		deck.on('activate', function (e) {
			var slideName = e.slide.getAttribute('data-bespoke-id') ||
				String(e.index + 1);
			history.pushState({}, '', root +
				((slideName === first) ? '' : (slideName + '/')));
		});

		window.addEventListener('popstate', update);
	}, 0);
};
