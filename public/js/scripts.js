$(document).ready(function() {

	$('#formContact').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			textarea: {
				required: true,
				minlength: 10
			}
		}
	});

});

