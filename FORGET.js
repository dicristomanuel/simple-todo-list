//ToDoList 
	// ¯\_(ツ)_/¯ Hi! I'm Cody, I will help you navigate the code.


/* (ツ)_/¯ Selects toDoButton and when clicked appends the 
						new item to the list */ 

var toDoButton = $( "div#add_todo" );
var list = $( "ul" );
var input = $( "input" );
	
	$( toDoButton ).click(function() {
		var current = $("input");
		var value = $( current ).val();
		var item = $('<li><img src="img/trash.png" class="icon right" data-type="trash">' + value +'</li>');
						if (value) {
				$( list ).append(item);
				current.value = "";
				$(item).addClass("wobble")
				$(input).addClass("green");

				setTimeout(function(){
	        				$(input).removeClass("green");
	    					}, 600);
			} else {
				$(input).addClass("red");
				setTimeout(function(){
	        				$(input).removeClass("red");
	    					}, 600);
			}//ifStatement
	});//click 


/* Repeats the previous step for when the enter key gets pressed ¯\_(ツ) */ 

	$( input ).on('keypress', function(evt) {
    var key = evt.which;
	    if (key === 13) {
		var current = $( "input" );
		var value = $( current ).val();
		var item = $( "<li>" + value +"</li>" );
			if (value) {
				$( list ).append(item);
				current.value = "";
				$(item).addClass("wobble")
				$(input).addClass("green");

				setTimeout(function(){
	        				$(input).removeClass("green");
	    					}, 600);
			} else {
				$(input).addClass("red");
				setTimeout(function(){
	        				$(input).removeClass("red");
	    					}, 600);
			}//ifStatement
		}//ifStatement
	});


/* (ツ)_/¯ When a task is completed user clicks on it and I add the 
						completed class which will change its appereance */ 
	list.addEventListener("click", function(evt) {
		var item = evt.srcElement;
		if($(item).hasClass("completed")) {
			$(item).removeClass("completed");
		} else {
		$(item).addClass("completed");
	}
	});


/* Interacting with the side icons in the list elements ¯\_(ツ) */ 

	$('*[data-type="heart"]').hover(
		function() {
    $( this ).attr("src", "img/heart-hover.png")
  },
    
    function() {
    	$(this).attr("src", "img/heart.png");
    }
);

		$('*[data-type="heart"]').click(
		function() {
    $(this).attr("src", "img/heart-lit.png")
    $(this).unbind('mouseenter mouseleave');
  }
);


	$('*[data-type="trash"]').hover(
		function() {
    $(this).attr("src", "img/trash-hover.png")},
    
    function() {
    	$(this).attr("src", "img/trash.png");
    }
);




