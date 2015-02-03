/**
 * Created by Steven Mouret.
 * Accessible collapsible content with jQuery librairie.
 */

$.fn.showHideAria = function(){
	this.each(function(index) {
		var obj = $(this);

		// Add button with aria attributes
		var showHideTitleContent = $('.showHideTitle', obj).html(),
			newShowHideTitleContent = '<button type="button" aria-expanded="false" aria-controls="showHide-' + index + '">' + showHideTitleContent + '</button>';

		$('.showHideTitle', obj)[0].innerHTML = newShowHideTitleContent;

		// Add aria attributes to content
		var showHideContent = $('.showHideContent', obj);
		showHideContent.attr({
			'id':			'showHide-' + index,
			'aria-hidden':	true
		});

		var showHideAriaButton = $('.showHideTitle > button', obj);

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
					hideElement()
				}
			});
		});
	});
};

$(document).ready(function(){
	$(".showHideAria").showHideAria();
});