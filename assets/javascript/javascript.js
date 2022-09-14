$(function () {
	//! Có lỗi ở đây
	// Footer
	function footer_fix() {
		window_width = $(window).width();
		window_height = $(window).height();
		main_content_height = $('.main-content').height();
		if (
			window_width > 768 &&
			window_height > 450 &&
			main_content_height < 728
		) {
			$('.site-footer').addClass('position-absolute');
		} else {
			if ($('.site-footer').hasClass('position-absolute')) {
				$('.site-footer').removeClass('position-absolute');
			}
		}
	}
	$(document).ready(function () {
		footer_fix();
	});

	$(window).on('scroll click resize', function () {
		footer_fix();
	});

	$('.nav-pills a').on('shown.bs.tab', function (event) {
		footer_fix();
	});
	// scroll
	var winHeight = window.innerHeight;
	var scrollTop = $(window).scrollTop();

	function checkScroll(scrollTop, winHeight) {
		// alert(scrollTop);
		if (scrollTop >= winHeight / 2) {
			$('#scrollTop').fadeIn(300);
			// $('#scrollTop').show();
		} else {
			$('#scrollTop').fadeOut(300);
			// $('#scrollTop').hide();
		}
		if (scrollTop > 15) {
			$('.site-header').addClass('scroll-active');
		} else {
			$('.site-header').removeClass('scroll-active');
		}
	}

	$(window).on('resize', function () {
		var winHeight = window.innerHeight;
		var scrollTop = $(window).scrollTop();
		checkScroll(scrollTop, winHeight);
	});

	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();
		checkScroll(scrollTop, winHeight);
	});

	// scroll click
	$('#scrollTop').on('click', function () {
		$('html, body').stop().animate({ scrollTop: 0 }, 800);
		return false;
	});

	// slider
	if ($('#list-slider-promotion').length) {
		$('#list-slider-promotion').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}

	function slick() {
		if ($('.list-item_slide.list-item_promotion').length) {
			$('.list-item_slide.list-item_promotion').slick({
				slidesToShow: 3,
				arrows: false,
				dots: false,
				autoplay: false,
			});
		}
	}

	$(document).ready(function () {
		slick();
		if ($(window).width() < 767) {
			$('.list-item_slide.list-item_promotion').slick('unslick');
		} else {
			slick();
		}
	});

	$(window).resize(function () {
		if ($(window).width() < 767) {
			$('.list-item_slide.list-item_promotion').slick('unslick');
		} else {
			slick();
		}
	});

	if ($('.kpth-list.slider').length) {
		$('.kpth-list.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	}
	if ($('.article-summary.slider').length) {
		$('.article-summary.slider').slick({
			slidesPerRow: 1,
			rows: 3,
			arrows: false,
			dots: true,
			autoplay: false,
		});
	}

	// VIDO YOUTOBE

	$('#kpth-video').on('click', '.kpth-item', function () {
		$('#kpth_vid .kpth-wrap').hide();
		$('body').addClass('ovf-hidden');
		var href = $(this).data('url');
		var vidUrl =
			'https://www.youtube.com/embed/' +
			href +
			'?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=1&amp;lopp=1&amp;iv_load_policy=3';
		$('#kpth_detail').attr('src', vidUrl);
		$('#kpth_vid .kpth-wrap').show();
		$('#kpth_vid').fadeIn(500);
	});

	$('#kpth_vid .layer-mask, #kpth_vid .close-btn').on('click', function () {
		$('#kpth_vid').hide();
		$('body').removeClass('ovf-hidden');
		$('#kpth_detail').attr('src', '');
	});
	//
	$(document).ready(function () {
		$('.kpth-item').each(function () {
			var src = $(this).data('url');
			var vid_imgUrl =
				'https://img.youtube.com/vi/' + src + '/maxresdefault.jpg';
			$(this).children('.kpth-item_img').attr('src', vid_imgUrl);
		});
	});
});
/** popup detail */
$('.click-detail').on('click', function () {
	// var id = $(this).data('post-id');
	$('#loading-post').show();
	// var url = new URL(location.href);
	// var url_path = window.location.href;
	// window.history.pushState(url_path, '', '?id=' + id);
	// jQuery.ajax({
	// 	url: ajax_url,
	// 	data: { id: id, action: 'tat_show_post', security: security_ },
	// 	success: function (response) {
	// 		$('#loading-post').hide();
	// 		if (response['error'] == '1') {
	// 			jQuery('#modalTitle').html('Error');
	// 			jQuery('#modalBody').html('No post found! Sorry :(');
	// 		} else {
	// 			jQuery('#modalTitle').html(response['post_title']);
	// 			//jQuery('#modalDate').html(response['post_date']);
	// 			jQuery('#modalBody').html(response['post_content']);
	// 		}
	// jQuery('#detailModal').modal('show');
	// 		return;
	// 	},
	// });
	if ($('.modal').addClass('in')) {
		$('#loading-post').hide();
	}
});
