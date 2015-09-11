// JavaScript Document

/*********************************************************/

function sendForm(form) 
{
	var data = 
	{
		name: $(form).find('input[name="name"]').val(),
		phone: $(form).find('input[name="phone"]').val(),
		doctor: $(form).find('input[name="doctor"]').val(),
		usl: $(form).find('input[name="usl"]').val()
	}

	switch (form.id) 
	{
		case 'DOCForm': data['form'] = 'DOCForm'; break;
		case 'USForm': data['form'] =  'USForm'; break;
		case 'WBForm': data['form'] =  'WBForm'; break;
	}

   $.ajax({
		type: 'POST',
		url: 'mailer.php',
		data: data,
		success: function() {

			$(form).find('input,textarea').each(function(){$(this).val('')});

			$("#dim").fadeOut('fast', function() {

				$("#dim2").fadeIn();

				setTimeout(function() {
					$("#dim2").fadeOut();
				}, 5000);

			});
		}		
   });

}

/******************************************************************************************************************/

$(function() 
{
	
    $("#DOCForm").validate({
	
		rules: {
			name:  {required: true,},
			phone:   {required: true,}
		},
		messages: {
			name:  {required: false,},
			phone:   {required: false,}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});
	
	
    $("#USForm").validate({
	
		rules: {
			name:  {required: true,},
			phone:   {required: true,}
		},
		messages: {
			name:  {required: false,},
			phone:   {required: false,}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});
	
	
    $("#WBForm").validate({
	
		rules: {
			name:  {required: true,},
			phone:   {required: true,}
		},
		messages: {
			name:  {required: false,},
			phone:   {required: false,}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});
	
	
});

/******************************************************************************************************************/	