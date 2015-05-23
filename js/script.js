//ToDoList 
	// ¯\_(ツ)_/¯ Hi! I'm Cody, I will help you navigate the code.


/* (ツ)_/¯ Selects toDoButton and when clicked appends the 
						new item to the list */ 

var toDoButton = $( "div#add_todo" );
var list = $( "ul" );
var input = $( ".group-header" );
	
	$( toDoButton ).click(function() {
		var current = $( "input" );
		var value = $( current ).val();
		var item = $('<li>' + value +'</li>');
						if (value) {
				$( list ).append(item);
				$(current).val("");
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


/* Repeats the previous step for the enter key press case ¯\_(ツ) */ 

	$( input ).on('keypress', function(evt) {
    var key = evt.which;
	    if (key === 13) {
		var current = $( "input" );
		var value = $( current ).val();
		var item = $('<li>' + value +'</li>');
			$(current).val("");
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



/* (ツ)_/¯ Click and hold an item on the list in order to perform an action
						like delete or heart it. */ 

// var timeoutId = 0;
// list.on("mousedown", function(evt) {
// 	var item = $(evt.srcElement);
//     timeoutId = setTimeout(function() {
// 			item.addClass("makeBigger");
// 					console.log("down");
//     		}, 250);
// 	}).bind('mouseup', function(evt) {
// 		var item = $(evt.srcElement);
// 		item.removeClass("makeBigger");
//     clearTimeout(timeoutId);
// });


var timeoutId = 0;
var itemSelected = [];
list.on("mousedown", function(evt) {
	var item = $(evt.srcElement);
    timeoutId = setTimeout(function() {
			item.addClass("makeBigger");
					console.log("down");
    		}, 250);
	}).bind('mouseup', function(evt) {
		var item = $(evt.srcElement);
		item.removeClass("makeBigger");
    clearTimeout(timeoutId);
});


	$("[data-type='trash']").click(function() {
		$(this).addClass("click-icon");
		});

$("[data-type='trash']").hover(function() {
		$(this).addClass("grow");
		},

		function() {
		$(this).removeClass("grow");
		});






