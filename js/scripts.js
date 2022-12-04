$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Врачи
	const doctorsSliders = []

	$('.doctors .swiper').each(function (i) {
		$(this).addClass('doctors_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			}
		}

		doctorsSliders.push(new Swiper('.doctors_s' + i, options))
	})


	// Фотогаллерея
	const photoGallerySliders = []

	$('.photo_gallery .swiper').each(function (i) {
		$(this).addClass('photo_gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				768: {
					spaceBetween: 12,
					slidesPerView: 1,
					grid: {
						rows: 1
					}
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2,
					grid: {
						rows: 2
					}
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3,
					grid: {
						rows: 2
					}
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3,
					grid: {
						rows: 2
					}
				}
			}
		}

		photoGallerySliders.push(new Swiper('.photo_gallery_s' + i, options))
	})


	// Отзывы
	const reviewsSliders = []

	$('.reviews .swiper').each(function (i) {
		$(this).addClass('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Фотогаллерея
	const photosSliders = []

	$('.photos .swiper').each(function (i) {
		$(this).addClass('photos_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 24,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				}
			}
		}

		photosSliders.push(new Swiper('.photos_s' + i, options))
	})


	// Услуги
	const servicesSliders = []

	$('.services_info .swiper').each(function (i) {
		$(this).addClass('services_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 2
				}
			}
		}

		servicesSliders.push(new Swiper('.services_s' + i, options))
	})


	// Статьи
	const articlesSliders = []

	$('.articles .swiper').each(function (i) {
		$(this).addClass('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
						'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
					)
				},
				resize: swiper => {
					$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
						'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
					)
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Кейсы
	const casesSliders = []

	$('.cases .swiper').each(function (i) {
		$(this).addClass('cases_s' + i)

		let options = {
			loop: false,
			speed: 750,
			spaceBetween: 24,
			slidesPerView: 1,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		}

		casesSliders.push(new Swiper('.cases_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})

	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		// Thumbs: {
		// 	autoStart: false,
		// }
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function (e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Поиск
	$('header .search .btns .btn').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let filter = $(this).data('filter')

			$('header .search .btns .btn').removeClass('active')
			$(this).addClass('active')

			$('header .search .result .section').hide()
			$('header .search .result').find(filter).fadeIn(300)
		}
	})


	// Сортировка
	$('.sort .mini_modal .btn').click(function (e) {
		e.preventDefault()

		let text = $(this).find('span').text(),
			parent = $(this).closest('.sort')

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')

		$('.sort .mini_modal .btn').removeClass('active')
		$(this).addClass('active')

		parent.find('> .btn span').text(text)
	})


	// Моб. город
	$('header .mob_links .location_btn, .mob_location .btn').click((e) => {
		e.preventDefault()

		if (!$('header .mob_links .location_btn').hasClass('active')) {
			$('header .mob_links .location_btn').addClass('active')
			$('body').addClass('menu_open')
			$('.mob_location').addClass('show')
			$('.overlay').fadeIn(300)
		} else {
			$('header .mob_links .location_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('.mob_location').removeClass('show')
			$('.overlay').fadeOut(200)
		}
	})


	// Моб. меню
	$('.mob_panel .menu_btn').click((e) => {
		e.preventDefault()

		if (!$('.mob_panel .menu_btn').hasClass('active')) {
			$('.mob_panel .menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('.mob_menu').addClass('show')
			$('.overlay').fadeIn(300)
		} else {
			$('.mob_panel .menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('.mob_menu').removeClass('show')
			$('.overlay').fadeOut(200)
		}
	})

	$('.mob_menu .menu_item > a.sub_link').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$('.mob_menu .menu_item > a').removeClass('active')
			$('.mob_menu .sub_menu').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		} else {
			$(this).removeClass('active').next().slideUp(300)
		}
	})


	// Выбор города
	$('header .location .mini_modal .btn').click(function (e) {
		e.preventDefault()

		$('header .location .mini_modal .btn').removeClass('active')

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')

		$(this).addClass('active')

		$('header .location > .btn span').text($(this).text())
	})


	$('.overlay').click((e) => {
		e.preventDefault()

		$('.mob_panel .menu_btn, header .mob_links .location_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('.mob_menu, .mob_location').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	// Кнопка 'Вверх'
	$('.buttonUp button').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	// Кастомный select
	$('select').niceSelect()

	// Фокус при клике на название поля
	$('body').on('click', '.form .label', function () {
		$(this).closest('.line').find('.input, textarea').focus()
	})

	// Выбор файла
	$('body').on('change', '.form input[type=file]', function (e) {
		$(this).closest('.file').find('label span').text($(this).val())
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .menu .sub_menu').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})


		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
			} else if (ts < te - 50) {
				// Свайп слева на право
				$('.mob_panel .menu_btn, header .mob_links .location_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('.mob_menu, .mob_location').removeClass('show')
				$('.overlay').fadeOut(200)
			}
		})
	}


	// Отправка форм
	$('.form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})
})



$(window).on('scroll', () => {
	// Кнопка 'Вверх'
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})