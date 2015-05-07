/**
 * Created by Steven Mouret.
 * Accessible collapsible content with jQuery librairie.
 */

$.fn.showHideAria = function(){
	this.each(function(index) {
		var obj = $(this),
		showHideTitle = $('.showHideTitle', obj),
		showHideContent = $('.showHideContent', obj);

		// Add button with aria attributes
		showHideTitle.wrapInner('<button type="button" aria-expanded="false" aria-controls="showHide-' + index + '"></button>');
		var showHideAriaButton = $('.showHideTitle > button', obj);

		// Add aria attributes to content
		showHideContent.attr({
			'id':			'showHide-' + index,
			'aria-hidden':	true
		});

		function showElement() {
			// add class open on showHideAria
			obj.addClass('open');
			// Change aria-expanded to true and aria-hidden to false
			showHideAriaButton.attr('aria-expanded', 'true');
			showHideContent.attr('aria-hidden', 'false');
		}

		function hideElement() {
			// remove class open on showHideAria
			obj.removeClass('open');
			// Change aria-expanded to false and aria-hidden to true
			showHideAriaButton.attr('aria-expanded', 'false');
			showHideContent.attr('aria-hidden', 'true');
		}

		showHideAriaButton.on('click', function(){
			showHideContent.slideToggle(300, function(){
				if (showHideContent.attr('aria-hidden') == 'true'){
					showElement();
				} else {
					hideElement();
				}
			});
		});
	});
};

$(document).ready(function(){
	$(".showHideAria").showHideAria();
});