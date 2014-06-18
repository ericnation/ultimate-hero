// Author: Eric Nation

document.addEventListener('DOMContentLoaded', function() {

	//Grab Hero and properties out of array in json
	function checkHero() {
		request = new XMLHttpRequest();
		request.open('GET', 'powers.json', true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400){
		    // Success!
		    jsonObj = JSON.parse(request.responseText);
		  } else {
		    // We reached our target server, but it returned an error
		  }
		};

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
	}

	function getHero(index) {
		var data  = jsonObj;
		for (var i in data.superheros) {
			var superpower = data.superheros[index].power;
				description = data.superheros[index].description;
				caveats = data.superheros[index].caveats;
				nemesis = data.superheros[index].nemesis;
				badge = data.superheros[index].image;
		}
		
		var heroContent = "<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" +
			"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" +
			"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>";
		
		var heroNode = document.getElementById("superhero").innerHTML = heroContent;
		
	}


	//check which checkboxes are checked and return superhero data depending on the combo of check boxes checked.
	function checkBoxes() {
		var check1 = document.getElementById("flying"),
			check2 = document.getElementById("intelligence"),
			check3 = document.getElementById("speed");

		var el = document.getElementsByClassName('submit');
			el[0].addEventListener("click", function() {
				document.getElementById("superhero").innerHTML = '';
				if ((check1.checked) && (check2.checked) && (check3.checked))  {
					getHero(16);
				} else if ((check1.checked) && (check2.checked)) {
					getHero(21);
				} else if ((check1.checked) && (check3.checked)) {
					getHero(13);
				} else if ((check2.checked) &&  (check3.checked)) {
					getHero(19);
				} else if (check1.checked) {
				 	getHero(2);
				} else if (check2.checked) {
					getHero(11);
				} else if (check3.checked) {
					getHero(15);
				} else {
					//returns alert for the user to select a checkbox
					var errorAlert = "<span class=\"alert\">Please select at least one Superhero Attribute. You may select up to all 3.</span>";
					document.getElementById("superhero").innerHTML = errorAlert;
					
				}
			}, false);
			
		//Function to clear content 
		[].forEach.call(document.querySelectorAll('form'), function(el) {
			el.addEventListener('reset', function() {
				var superhero = document.getElementById('superhero').innerHTML = '';
			}, false);
		});
	}


	checkBoxes();
	checkHero();
	//smooth scroll credit to github.com/cferdinandi/smooth-scroll
    smoothScroll.init();
});
