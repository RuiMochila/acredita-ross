
$( document ).ready(function(){

	$("#content").hide();

	$("#know_more").click(function(){
	  $("#content").show();
	  $('html,body').animate({
   		scrollTop: $("#content").offset().top
		});
	  // this.hide();
	});

	$('#u_identifier').val(makeid());
	// #u_identifier

	var form = $('form');
	$("form").on("submit",function( event ) {
  		// event.preventDefault();
  		
  		// if($('#idea_description').val().length > 300){
  		// 	event.preventDefault();	
  		// 	console.log("indeia maior que 300 chars");
  		// }
  		var errors = [];

  		if($('#email').val() != $('#email_confirmation').val()){
			// event.preventDefault();	
  			console.log("Emails não são iguais");
  			errors.push("Os Emails não são iguais.");
  		}
  		
  		if($('#password').val().length < 8){
			// event.preventDefault();	
  			console.log("Password pequena de mais.");
  			errors.push("Password pequena. Introduza uma com 8 caractaeres ou mais.");
		}

  		if($('#password').val() != $('#password_confirmation').val()){
			// event.preventDefault();	
  			console.log("Passwords não são iguais");
  			errors.push("As passwords não são iguais");
  		}

  		if (errors.length > 0) {
  			event.preventDefault();
  			var error_text = "";
	  		for (var i = errors.length - 1; i >= 0; i--) {
	  			error_text += errors[i];
	  			error_text += "\n";
	  		};
	  		window.alert(error_text);	
  		};

  		// console.log("not");
  		// $.ajax({
    //         type: form.attr('method'),
    //         url: form.attr('action'),
    //         data: form.serialize(),
    //         dataType: 'json',
    //         success: function (data) {
    //         	console.log(data);
    //         },
    //         error: function(err){
    //         	console.log(err);	
    //         }
    //     });


		 //    $.ajax({
			// url: 'https://www51.e-goi.com/api/public/commons/ping',
			// contentType: 'application/json',
			// type: 'POST',
			// dataType: 'json',
			// data: JSON.stringify({
			// 	foo: "This text is left of",
			// 	bar: "this text..."
			// }),
			// success: function(data) {
			// 	var output = data.responseText;
			// 	console.log(output);
			// 	// ... do something useful
			// }
			// });
		 //  		// Submit ajax form and treat answer.

		 // event.preventDefault();
	});


	$('input:radio[name="campoe_308_114"]').on('change',
	    function(){
	    	console.log("changed");
	    	if ($(this).is(':checked') && $(this).val() == 'juntar outra equipa') {
	    		console.log("é equipa");
        		$("#idea_description").prop('disabled', true);
        		$('#idea_description').removeAttr("required");
    		}else{
				console.log("n é equipa");
        		$("#idea_description").prop('disabled', false);
        		$('#idea_description').prop('required',true);
    		}
	        // if ($(this).val() == 'Yes') {
	        //     $(appended).appendTo('body');
	        // }
	        // else {
	        //     $(appended).remove();
	        // }
	    }
	);


  	// 	$('#ideia_equipa').on('change', function(){
			// $("#idea_description").prop('disabled', true);
  	// 	});



  		// $('#idea_description').removeAttr("required");
  		// $('#idea_description').prop('required',true);

});


	function makeid()
	{
    	var text = "";
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    	for( var i=0; i < 15; i++ )
        	text += possible.charAt(Math.floor(Math.random() * possible.length));

    	return text;
	}