// Author: Eric Nation 6/2/2014

(function($) {

	// function used for clearing content when user clicks Do it Again button and clicks Submit twice in row.
	function clear(){
        $('#superhero').html('');
    }

	//check which checkboxes are checked and return superhero data depending on the combo of check boxes checked.
	function checkBoxes() {
		$('a.submit').click(function(){
			$('#superhero').html('');
			if ($('#flying').prop("checked") && $('#intelligence').prop("checked") && $('#speed').prop("checked"))  {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[16].power;
						 	description = data.superheros[16].description;
						 	caveats = data.superheros[16].caveats;
						 	nemesis = data.superheros[16].nemesis;
						 	badge = data.superheros[16].image;
					}
					// returns INDESTRUCTIBLE
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);
				});
			} else if ($('#flying').prop("checked") && $('#intelligence').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[21].power;
						 	description = data.superheros[21].description;
						 	caveats = data.superheros[21].caveats;
						 	nemesis = data.superheros[21].nemesis;
						 	badge = data.superheros[21].image;
					}
					// returns TELEKINESIS
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);

				});
			} else if ($('#flying').prop("checked") && $('#speed').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[13].power;
						 	description = data.superheros[13].description;
						 	caveats = data.superheros[13].caveats;
						 	nemesis = data.superheros[13].nemesis;
						 	badge = data.superheros[13].image;
					}
					// returns TIME CONTROL
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);

				});
			} else if ($('#intelligence').prop("checked") &&  $('#speed').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[19].power;
						 	description = data.superheros[19].description;
						 	caveats = data.superheros[19].caveats;
						 	nemesis = data.superheros[19].nemesis;
						 	badge = data.superheros[19].image;
					}
					// returns TELEPORTATION
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);

				});

			} else if ($('#flying').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[2].power;
						 	description = data.superheros[2].description;
						 	caveats = data.superheros[2].caveats;
						 	nemesis = data.superheros[2].nemesis;
						 	badge = data.superheros[2].image;
					}
					// returns FLIGHT
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);

				});
			} else if ($('#intelligence').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[11].power;
						 	description = data.superheros[11].description;
						 	caveats = data.superheros[11].caveats;
						 	nemesis = data.superheros[11].nemesis;
						 	badge = data.superheros[11].image;
					}
					// returns MASTERMIND
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);
				});

			} else if ($('#speed').prop("checked")) {
				$.getJSON("powers.json", function(data) {
					for (var i in data.superheros) {
						var superpower = data.superheros[15].power;
						 	description = data.superheros[15].description;
						 	caveats = data.superheros[15].caveats;
						 	nemesis = data.superheros[15].nemesis;
						 	badge = data.superheros[15].image;
					}
					// returns SUPER SPEED
					$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#superhero").hide().fadeIn(1000);
				});

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
