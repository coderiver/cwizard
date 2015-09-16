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
			section = $('.js-section'),
			list    = $('.js-universities-list');
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
					if (!list.hasClass('is-inited')) {
						list.addClass('is-inited');
						list.slick({
							arrows: false,
							responsive: [{
								breakpoint: 2560,
								settings: 'unslick'
							},{
								breakpoint: 760,
								settings: {
									slidesToShow: 1
								}
							}]
						});
						prev.on('click', function () {
							list.slick('prev');
						});
						next.on('click', function () {
							list.slick('next');
						});
					};
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

	// moves universities
	(function () {
		var universities = $('.js-universities');
		if (universities.length) {
			var list   = $('.js-universities-list'),
				slider = $('.js-universities-slider'),
				prev   = $('.js-universities-prev'),
				next   = $('.js-universities-next');
			function moveItems (windowWidth) {
				if (windowWidth < 760) {
					list.prependTo(slider);
				}
				else {

					list.prependTo(universities);
				};
			}
			var w = $(window).width();
			// init
			moveItems(w);
			$(window).resize(function () {
				var w = $(window).width();
				// init
				moveItems(w);
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