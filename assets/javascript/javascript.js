jQuery(function () {
	//! Có lỗi ở đây
	jQuery(document).ready(function () {
		window_width = jQuery(window).width();
		window_height = jQuery(window).height();
		main_content_height = jQuery('.main-content').height();
		if (
			window_width > 768 &&
			window_height > 450 &&
			main_content_height < 728
		) {
			jQuery('.site-footer').addClass('position-absolute');
		} else {
			if (jQuery('.site-footer').hasClass('position-absolute')) {
				jQuery('.site-footer').removeClass('position-absolute');
			}
		}
		jQuery(window).resize(function () {
			window_width = jQuery(window).width();
			window_height = jQuery(window).height();
			main_content_height = jQuery('.main-content').height();
			if (window_width > 768 && main_content_height < 728) {
				jQuery('.site-footer').addClass('position-absolute');
			} else {
				if (jQuery('.site-footer').hasClass('position-absolute')) {
					jQuery('.site-footer').removeClass('position-absolute');
				}
			}
		});
	});
	// jQuery(window).on('click', function () {
	// 	alert(jQuery('.main-content').height());
	// });
	jQuery(window).on('scroll', function () {
		scrollTop = jQuery(window).scrollTop();
		window_height = jQuery(window).height();
		// alert(scrollTop);
		// &&
		if (scrollTop >= 200) {
			jQuery('#scrollTop').show();
		} else {
			jQuery('#scrollTop').hide();
		}

		if (window_height > 937) {
			if (scrollTop <= 50) {
				jQuery('.site-header').removeClass('scroll-active');
			} else {
				jQuery('.site-header').addClass('scroll-active');
			}
		} else {
		}
	});
	// scroll
	jQuery('#scrollTop').on('click', function () {
		jQuery('html, body').stop().animate({ scrollTop: 0 }, 800);
		return false;
	});

	// slider
	if (jQuery('#list-slider-promotion').length) {
		jQuery('#list-slider-promotion').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}
});
function slick() {
	if (jQuery('.list-item_slide.list-item_promotion').length) {
		jQuery('.list-item_slide.list-item_promotion').slick({
			slidesToShow: 3,
			arrows: false,
			dots: false,
			autoplay: false,
		});
	}
}

jQuery(document).ready(function () {
	slick();
});
jQuery(window).resize(function () {
	if (jQuery(window).width() < 767) {
		jQuery('.list-item_slide.list-item_promotion').slick('unslick');
	} else {
		jQuery('.list-item_slide.list-item_promotion').slick({
			slidesToShow: 3,
			arrows: false,
			dots: false,
			autoplay: false,
		});
	}
});
