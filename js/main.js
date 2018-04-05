$.noConflict();

jQuery(window).ready(function () {

            function go_to(id_div = 'index', page_title = 'CampusID', breadcrumb = null) {
                let step1 = '';
                let step2 = '';

                if (breadcrumb) {
                    if (breadcrumb.step1 !== undefined) {
                        step1 = breadcrumb.step1;
                    }
                    if (breadcrumb.step2 !== undefined) {
                        step2 = breadcrumb.step2;
                    }
                }
                else {
                    step1 = 'Bienvenu sur l\'IDBoard';
                }

                $('#fst_step').text(step1);
                $('#snd_step').text(step2);

                $('.right-panel .content').css('display', 'none');
                $('#' + id_div).css('display', 'block');
                $('title').text(page_title);
            }

            go_to();

            $('.menu-link').click(function () {
                go_to(
                    $(this).attr('data-id'),
                    $(this).attr('data-page-title'),
                    {
                        step1: $(this).attr('data-breadcrumb-step1'),
                        step2: $(this).attr('data-breadcrumb-step2')
                    }
                );
            });

        });

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});