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


	$("#formContact input[type='submit']").click(function(){
		console.log('Ajax request started');
		$.ajax({
			type: "POST",
			url: "/formAjax",
			data: $('#formContact').serialize(),
			success: function(data){
				console.log(data);
			}
		});
	});

	$("#formContact").submit(function(e) {

		e.preventDefault();
		var formContact = document.forms["formContact"];

		var name = formContact.elements["Name"].value;
		var email = formContact.elements["Email"].value;
		var phone = formContact.elements["Phone"].value;
		var message = formContact.elements["textarea"].value;
		var newsletter = formContact.elements["newsletter"].value;

		$.ajax({
			type: "POST",
			url: "/user",
			data: JSON.stringify({
				name: name,
				email: email,
				phone: phone,
				message: message,
				newsletter: newsletter
			}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){
				console.log(data);
			}
		});
	});


});

