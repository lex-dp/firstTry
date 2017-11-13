$(document).ready(function() {
	//active modal window
	function modalOpen() {
		$('.modal').addClass('fadeIn show');

		setTimeout(function() {
			$('.modal').addClass('fadeOut');
		}, 2000);

		setTimeout(function() {
			$('.modal').removeClass('fadeIn');
			$('.modal').removeClass('fadeOut');
			$('.modal').removeClass('show');
		}, 3200);
	}

	//when user try register and insert already exist datas. Get data.error from server and search where exactly user insert repeat datas
	function getInput(formName, inputName) {
		var form = document.forms[formName];
		var name = form.elements[inputName];

		return name;
	}


	/*Contact Page*/
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


	$("#formContact").submit(function(e) {
		var isValid = $("#formContact").valid();//checked form is valid or not
		if (!isValid) {
			return false;
		}

		e.preventDefault();
		var formContact = document.forms["formContact"];

		//get values of fields
		var name = formContact.elements["name"].value;
		var email = formContact.elements["email"].value;
		var phone = formContact.elements["phone"].value;
		var textarea = formContact.elements["textarea"].value;
		var newsletter = formContact.elements["newsletter"].checked;

		$.ajax({
			type: "POST",
			url: "/formContact",
			data: JSON.stringify({
				name: name,
				email: email,
				phone: phone,
				textarea: textarea,
				newsletter: newsletter
			}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){
				/*modal window animate*/
				$('#contactFormModal').addClass('fadeIn show');

				setTimeout(function() {
					$('#contactFormModal').addClass('fadeOut');
				}, 2000);

				setTimeout(function() {
					$('#contactFormModal').removeClass('fadeIn');
					$('#contactFormModal').removeClass('fadeOut');
					$('#contactFormModal').removeClass('show');
				}, 3200);

				/*clear value of fields*/
				formContact.elements["name"].value = '';
				formContact.elements["email"].value = '';
				formContact.elements["phone"].value = '';
				formContact.elements["textarea"].value = '';
				formContact.elements["newsletter"].checked = false;

			},
			error: function() {
				alert('Sorry, server error. Try later.');
			}
		});

	});

	//close button on modal window
	$('.close').on('click', function() {
		var modal = $(this).closest('.modal');

		if (modal.hasClass('hide')) {
			modal.removeClass('hide');
		}
		if (modal.hasClass('show')) {
			modal.removeClass('show');
		}

		modal.addClass('hide');
	});

	/*End of Contact Page*/


	/*SIGN IN / SIGN UP Page*/

	$('#formRegister').validate({
		rules: {
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true
			},
			confirmPassword: {
				required: true,
				equalTo: "#registerPass"
			}
		}
	});


	$("#formRegister").submit(function(e) {
		var isValid = $("#formRegister").valid();//checked form is valid or not
		if (!isValid) {
			return false;
		}

		e.preventDefault();
		var formRegister = document.forms["formRegister"];

		//get values of fields
		var firstName = formRegister.elements["firstName"].value;
		var lastName = formRegister.elements["lastName"].value;
		var email = formRegister.elements["email"].value;
		var password = formRegister.elements["password"].value;

		var data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		};

		$.post('/formRegister', data, function(data) {
			if (data.error) {
				console.log(data.error);
				var errorTarget = getInput("formRegister", data.error);
				errorTarget.classList.add('error');
				console.log(errorTarget);

			}else {
				$('.modal h5').text('Your request has been confirmed.');
				$('.modal p').text('You have successfully registered!');
				modalOpen();
			}
		}).error(function(data) {
			$('.modal h5').text('Server Error. ');
			$('.modal p').text('Please try later.');
			modalOpen();
		});

	});



});

