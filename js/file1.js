// ぽよん
$(function () {
    $('.modal-new-open').on('click', function () {
        $('.modal-new').fadeIn();
        return false;
    });
    $('.modal-new-close').on('click', function () {
        $('.modal-new').fadeOut();
        return false;
    });
});

// here
$(function () {
    $('.modal-here-open').on('click', function () {
        $('.modal-here').fadeIn();
        return false;
    });
    $('.modal-here-close').on('click', function () {
        $('.modal-here').fadeOut();
        return false;
    });
});

// form
$(function () {
    $('.modal-form-open').on('click', function () {
        $('.modal-form').fadeIn();
        return false;
    });
    $('.modal-form-close').on('click', function () {
        $('.modal-form').fadeOut();
        return false;
    });
});


$(function () {
    $('.modal-m-open').on('click', function () {
        $('.modal-menu').fadeIn();
        return false;
    });
    $('.modal-m-close').on('click', function () {
        $('.modal-menu').fadeOut();
        return false;
    });
});

// --------------------------------------------
// スクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top -150;
        var speed = 600;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});


// --------------------------------------------
// 色変更
jQuery(function(){
	var header = jQuery('#header');
    var tablecon5 =jQuery('.tablecon5');
    var p = document.getElementById('drink_con4');
    var o = p.getBoundingClientRect();
    var s= o.top;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() < s) { 
            tablecon5.addClass('con5');
		} else { 
            tablecon5.removeClass('con5');
		}
	});
        console.log(s);
});

jQuery(function(){
	var header = jQuery('#header');
    var tablecon4 =jQuery('.tablecon4');
    var p = document.getElementById('drink_con4');
    var o = p.getBoundingClientRect();
    var s = o.top;
        var i = document.getElementById('drink_con3');
    var t = i.getBoundingClientRect();
    var n = t.top;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > s-150 && jQuery(this).scrollTop() <=n) { 
            header.addClass('con4');
            tablecon4.addClass('con4');
		} else { 
			header.removeClass('con4');
            tablecon4.removeClass('con4');
		}
	});
    console.log(s);
});

jQuery(function(){
	var header = jQuery('#header');
    var tablecon3 =jQuery('.tablecon3');
    var p = document.getElementById('drink_con3');
    var o = p.getBoundingClientRect();
    var s = o.top;
        var i = document.getElementById('drink_con2');
    var t = i.getBoundingClientRect();
    var n = t.top;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > s-150 && jQuery(this).scrollTop() <=n) { 
			header.addClass('con3');
            tablecon3.addClass('con3');
		} else { 
			header.removeClass('con3');
            tablecon3.removeClass('con3');
		}
	});
        console.log(s);
});

jQuery(function(){
	var header = jQuery('#header');
    var tablecon2 =jQuery('.tablecon2');
    var p = document.getElementById('drink_con2');
    var o = p.getBoundingClientRect();
    var s = o.top;
        var i = document.getElementById('drink_con1');
    var t = i.getBoundingClientRect();
    var n = t.top;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > s-150 && jQuery(this).scrollTop() <=n) { 
            header.addClass('con2');
            tablecon2.addClass('con2');
		} else { 
			header.removeClass('con2');
            tablecon2.removeClass('con2');
		}
	});
});

jQuery(function(){
	var header = jQuery('#header');
    var tablecon1 =jQuery('.tablecon1');
    var p = document.getElementById('drink_con1');
    var o = p.getBoundingClientRect();
    var s= o.top;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > s-150) { 
            header.addClass('con1');
            tablecon1.addClass('con1');
		} else { 
			header.removeClass('con1');
            tablecon1.removeClass('con1');
		}
	});
});