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
			return false;
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
			return false;
		});
	}());

	// tabs
	(function () {
		var tabs = $('.js-tabs');
		if (tabs.length) {
			tabs.each(function () {
				var _this = $(this),
					btn   = _this.find('.js-tabs-btn'),
					item  = _this.find('.js-tabs-item');
				btn.on('click', function () {
					var _this = $(this),
						el    = _this.data('tab');
					if (!_this.hasClass('is-active')) {
						btn.removeClass('is-active');
						$('.js-tabs-btn[data-tab="' + el + '"]').addClass('is-active');
						item.hide();
						$(el).fadeIn();
					};
					return false;
				});
			});
		};
	}());

	// accordeon
	(function () {
		var accos = $('.js-accos');
		if (accos.length) {
			accos.each(function () {
				var _this = $(this),
					item  = _this.find('.js-accos-item'),
					head  = _this.find('.js-accos-head'),
					body  = _this.find('.js-accos-body');
				head.on('click', function () {
					var _this  = $(this),
						parent = _this.parent(),
						next   = _this.next();
					if (parent.hasClass('is-active')) {
						item.removeClass('is-active');
						body.slideUp();
					}
					else {
						item.removeClass('is-active');
						body.slideUp();
						parent.addClass('is-active');
						next.slideDown();
					}
					return false;
				});
			});
		};
	}());

	// toggle
	(function () {
		var go = $('.js-goto'),
			el = $('.js-goto-el');
		go.on('click', function () {
			var _this = $(this),
				el  = _this.data('goto'),
				pos   = $('.' + el).offset().top;
			$('html, body').animate({
				scrollTop: pos
			}, 700);
			return false;
		});
	}());

	// popup
	(function () {
		var btn = $('.js-popup-btn'),
			popup = $('.js-popup'),
			close = $('.js-popup-close');
		btn.on('click', function () {
			var _this = $(this),
				el    = _this.data('popup');
			btn.removeClass('is-active');
			_this.addClass('is-active');
			$('.' + el).fadeIn();
			return false;
		});
		close.on('click', function () {
			btn.removeClass('is-active');
			popup.fadeOut();
			return false;
		});
	}());

	// studies and courses
	(function () {
		var studies = $('.js-studies'),
			item    = $('.js-studies-item'),
			courses = $('.js-courses'),
			back    = $('.js-courses-back');
		item.on('click', function () {
			studies.hide();
			courses.fadeIn();
			return false;
		});
		back.on('click', function () {
			courses.hide();
			studies.fadeIn();
			return false;
		});
	}());














});