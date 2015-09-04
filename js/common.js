head.ready(function() {

	// window resize
	$(window).resize(function () {
		var windowWidth = $(window).width();
		// section
		countSection();
	});

	// steps
	(function () {
		var steps   = $('.js-steps'),
			btn     = steps.find('.js-steps-btn'),
			item    = steps.find('.js-steps-item'),
			section = $('.js-section');
		btn.on('click', function () {
			var _this = $(this),
				index = _this.index();
			if (!_this.hasClass('is-active')) {
				btn.removeClass('is-active');
				_this.addClass('is-active');
				item.hide();
				item.eq(index).show();
				if (index == 2) {
					section.addClass('is-list-show');
				}
				else {
					section.removeClass('is-list-show');
				}
			};
		});
	}());

	// section body scroll
	(function () {
		var section = $('.js-section'),
			body    = section.find('.js-section-body');
		body.scroll(function () {
			var posScroll = body.scrollTop();
			if (posScroll > 0) {
				section.addClass('is-scroll');
			}
			else {
				section.removeClass('is-scroll');
			}
		});
	}());

	// section
	function countSection () {
		var section    = $('.js-section'),
			head       = section.find('.js-section-head'),
			headHeight = head.height(),
			body       = section.find('.js-section-body');
		body.css('top', headHeight);
	};
	countSection();

	// range
	(function () {
		var range = $('.js-range');
		if (range.length) {
			range.each(function () {
				$(this).slider({
					range: true,
					min: 0,
					max: 100,
					values: [ 25, 75 ],
					slide: function( event, ui ) {
						// ui.values[0]
						// ui.values[1]
					}
				});
			});
		};
	}());

	// university slider
	(function () {
		var sl   = $('.js-university-slider'),
			prev = $('.js-university-prev'),
			next = $('.js-university-next');
		if (sl.length) {
			sl.slick({
				arrows: false
			});
			prev.on('click', function () {
				sl.slick('prev');
			});
			next.on('click', function () {
				sl.slick('next');
			});
		};
	}());

	// filters
	(function () {
		var btn          = $('.js-btn-filters'),
			head         = $('.js-steps-head'),
			filters      = $('.js-filters'),
			universities = $('.js-universities-mobile'),
			content      = $('.js-steps-content');
		btn.on('click', function () {
			btn.toggleClass('is-active');
			head.toggleClass('is-active');
			content.toggleClass('is-gray');
			filters.toggleClass('is-show');
			universities.toggleClass('is-show');
		});
	}());

});