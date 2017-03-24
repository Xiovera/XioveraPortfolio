$(document).ready(function(){
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
  $('.carousel').carousel({
  interval: 2000
	})
});