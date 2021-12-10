//toggle for Video section
$(document).ready(function(){ 
  $('#videoBoxes').hide();
});

$(document).ready(function(){
  $(".videoquote").click(function(){
    $("#videoBoxes").slideToggle();
  });
});

//toggle for About section
$(document).ready(function(){ 
    $('#aboutBoxes').hide();
  });

$(document).ready(function(){
    $(".About").click(function(){
      $("#aboutBoxes").slideToggle();
    });
  });

  //toggle for Education section
$(document).ready(function(){ 
  $('#educationBoxes').hide();
});

$(document).ready(function(){
  $(".Edu").click(function(){
    $("#educationBoxes").slideToggle();
  });
});

  //toggle for Skills section
  $(document).ready(function(){ 
    $('#skillBoxes').hide();
  });
  
  $(document).ready(function(){
    $(".Skills").click(function(){
      $("#skillBoxes").slideToggle();
    });
  });

  //toggle for Languages section
  $(document).ready(function(){ 
    $('#langBox').hide();
  });
  
  $(document).ready(function(){
    $(".Lang").click(function(){
      $("#langBox").slideToggle();
    });
  });

  //toggle for Address section
  $(document).ready(function(){ 
    $('#addressBoxes').hide();
  });
  
  $(document).ready(function(){
    $(".address").click(function(){
      $("#addressBoxes").slideToggle();
    });
  });

  //toggle for contact section
  $(document).ready(function(){ 
    $('#contactBoxes').hide();
  });
  
  $(document).ready(function(){
    $(".contact").click(function(){
      $("#contactBoxes").slideToggle();
    });
  });

  
//shows alert when you hover over the intro text at the top of the webpage
  $(document).ready(function(){
    $(".intro").mouseenter(function(){
      alert("Welcome to my page!");
    });
  });

  //changes field colors in the contact form
  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

 //list of colors for the confetti in the array as string 
var colors = ["grey", "black", "blue", "brown", "white", "green"];
var opacityValue = 1.0;

//variable for storing the function and easier use in html
var Animation = function(){

	for(var i = 0; i < 100; i++){
		//code inside here will run 100 times, creating 100 confetti

		var div = document.createElement("DIV");

        //assign class "cicle" for these confetti div elements
		div.className = "circle";
		div.style.width = "15px";
		div.style.height = "15px";
		div.style.borderRadius = "50%";

        
    //colors.length returns the number of elements in the colors array in random order
		var colorNum = Math.floor(Math.random() * colors.length);
    //sets the color of single confetto div created as one of the randomly generated colors above
		div.style.backgroundColor = colors[colorNum];

    //different width of confetti
		div.style.left = Math.random() * window.innerWidth + "px";

    //randomly assign top value from which confetti will drop
		div.style.top = - Math.random() * 100 - 50 + "px";

    //delay between confetto drops
		div.style.animationDelay = Math.random() * 10 + "s";

    //connect divs to html
		document.body.append(div);
	}
}

var Animation2 = function changeTrans(val){
  //circles variable contains the array of confetti div elements with class "circle"
	var circles = document.getElementsByClassName('circle');

	if(val === "up"){
    //only increase opacityValue if it is less than 1.0
		if(opacityValue < 1.0){
    //increases opacity by 0,5
			opacityValue += 0.5;
		}
	}else{
    //only decrease opacityValue if it is greater than 0.0
		if(opacityValue > 0.0){
    //decreases opacity by 0,5
			opacityValue -= 0.5;
		}
	}
    //use for loop to set opacity of all div elements with class "circle"
    //using value of opacityValue variable
	for(var i = 0; i < circles.length; i++){
		circles[i].style.opacity = opacityValue;
	}
}



