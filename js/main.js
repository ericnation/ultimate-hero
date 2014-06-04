// Author: Eric Nation

(function($) {

	// function used for clearing content when user clicks Do it Again button and clicks Submit twice in row.
	function clear(){
			$('#superhero').html('');
	}

	//Grab Hero and properties out of array in json
	function checkHero(index) {
		$.getJSON("powers.json", function(data) {
			for (var i in data.superheros) {
				var superpower = data.superheros[index].power;
					description = data.superheros[index].description;
					caveats = data.superheros[index].caveats;
					nemesis = data.superheros[index].nemesis;
					badge = data.superheros[index].image;
			}

			$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
				"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
				"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);
		});
	}


	//check which checkboxes are checked and return superhero data depending on the combo of check boxes checked.
	function checkBoxes() {
		$('a.submit').click(function(){
			$('#superhero').html('');
			if ($('#flying').prop("checked") && $('#intelligence').prop("checked") && $('#speed').prop("checked"))  {
				checkHero(16);
			} else if ($('#flying').prop("checked") && $('#intelligence').prop("checked")) {
				checkHero(21);
			} else if ($('#flying').prop("checked") && $('#speed').prop("checked")) {
				checkHero(13);
			} else if ($('#intelligence').prop("checked") &&  $('#speed').prop("checked")) {
				checkHero(19);
			} else if ($('#flying').prop("checked")) {
				checkHero(2);
			} else if ($('#intelligence').prop("checked")) {
				checkHero(11);
			} else if ($('#speed').prop("checked")) {
				checkHero(15);
			} else {
				//returns alert for the user to select a checkbox
				$('<span class="alert">Please select at least one Superhero Attribute. You may select up to all 3.</span>').appendTo('#superhero').hide().fadeIn(600);
			}
			return false;
		});

		$('form').on('reset', clear);

	};

	//Scroll function
	$(function () {
		$('a.submit').click(function() {
			$('html,body').animate({
				scrollTop: $('#superhero').offset().top
			}, 700 );
		});
	});


	//FUNCTION INITIALIZING
	checkBoxes();


})(jQuery);
