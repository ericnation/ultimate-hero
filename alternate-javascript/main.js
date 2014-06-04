(function($) {

	//selected checkbox holder
	var selected = [];

	//load json request to namespace
	var jqxhr = $.getJSON("powers.json", function (data){
		return data.superheros;
	});

	//reset method
	function clear(){
		selected = [];
		$("#result").html("");
	}

	//get superheros
	function checkBoxes() {
		$('a.submit').on('click', function(){
			clear();

			$('input:checked').each(function (){
				selected.push(this.name);
			});
			
			//if there are checkboxes, check them against the traits of superheros
			//if the selected match the traits, show the info for that hero
			//else alert user
			if(selected.length){
				var heros = jqxhr.responseJSON.superheros,
					len = heros.length,
					i = 0;
				for(i; i<len; i++){
					if(selected.toString() === heros[i].traits.toString()){
						var superpower = heros[i].power,
						 	description = heros[i].description,
						 	caveats = heros[i].caveats,
						 	nemesis = heros[i].nemesis,
						 	badge = heros[i].image;
						$("<h4>Your Ultimate Superhero Power is <br/>" + "<span>"+ superpower + "</span>" + "</h4>" + 
						"<img src='" + badge + "'>" +  "<p>" + description + "!" + "<br/>" + caveats + "<br/>" + 
						"Your nemesis is " + nemesis + "!</p>" + "<br/>" + "<button type=\"reset\" class=\"btn\">Do it Again!</button>").appendTo("#result");
					}
				}
			}else{
				$('<span class="alert">Please select at least one Superhero Attribute. You may select up to all 3.</span>').appendTo('#result');
			}
		});

		$('form').on('reset', clear);
	};

	// I GOT THIS SNIPPET FOR SMOOTH SCROLL FROM CSS-TRICKS - http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	//FUNCTION INITIALIZING
	checkBoxes();
	
})(jQuery);