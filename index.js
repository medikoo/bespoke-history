'use strict';

module.exports = function (/* options*/) {
	var options = arguments[0], root;

	if (typeof options === 'string') {
		root = options;
	} else {
		options = Object(options);
		root = options.root || '/';
	}

	return function (deck) {
		var update, activateSlide;

		activateSlide = function (index) {
			if (index === deck.slide()) return;
			deck.slide(index);
		};

		update = function (e) {
			var id = location.pathname.slice(root.length, -1);

			if (!id) return;
			if (isNaN(id)) {
				deck.slides.some(function (slide, i) {
					if (slide.getAttribute('data-bespoke-id') === id) {
						activateSlide(i);
						return true;
					}
					if (slide.id === id) {
						activateSlide(i);
						return true;
					}
					return false;
				});
				return;
			}
			activateSlide(Number(id));
		};

		setTimeout(function () {
			update();
			var first = deck.slides[0].getAttribute('data-bespoke-id') || '1';
			deck.on('activate', function (e) {
				var urlSearch = location.search
				  , slideName = e.slide.getAttribute('data-bespoke-id') || e.slide.id ||
						String(e.index + 1);
				history.pushState({}, '', root +
					((slideName === first) ? '' : (slideName + '/')) + urlSearch);
			});

			window.addEventListener('popstate', update);
		}, 0);
	};
};
