//ToDoList 
	// ¯\_(ツ)_/¯ Hi! I'm Cody, I will help you navigate the code.


/* (ツ)_/¯ Selects toDoButton and when clicked appends the 
						new item to the list */ 

var toDoButton = $("div#add_todo");
var list = $("ul");
var input = $(".group-header");
	
	$( toDoButton ).click(function() {
		var current = $( "input" );
		var value = $( current ).val();
		var item = $('<li>' + value +'</li>');
						if (value) {
				$( list ).append(item);
				$(current).val("");
				$(item).addClass("wobble");
				$(input).addClass("green");

				setTimeout(function(){
	        				$(input).removeClass("green");
	        				$(item).removeClass("wobble")
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
	        				$(item).removeClass("wobble")
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
var item;
var itemSelected = [];
list.mousedown(function(evt) {
	item = $(evt.srcElement);
    setTimeout(function() {
   		if(item.hasClass("makeBigger")) {
   			item.removeClass("makeBigger");
   			var toRemove = itemSelected.indexOf(item[0]);
    		itemSelected.splice(toRemove, 1);
   		} else {
			item.addClass("makeBigger");
					itemSelected.push(item[0]);
			}//ifStatement
    }, 100)
});


	var heart = $("[data-type='heart']");
	heart.click(function() {
				var items = $(itemSelected);
				if(items.hasClass("makeRed")) {
						items.removeClass("makeBigger");
						items.removeClass("makeRed");
						itemSelected = [];
				} else {
						items.addClass("makeRed");
						items.removeClass("makeBigger");
						itemSelected = [];
				}
			});

	var trash = $("[data-type='trash']");
		trash.click(function() {
				var lis = document.querySelectorAll("li")
				var index = $(lis).index(item)-1;
				$(itemSelected).remove();
				$( "li:gt("+ index +")" ).addClass("wobble");
				setTimeout(function(){
	        				$( "li:gt("+ index +")" ).removeClass("wobble");
	    					}, 600);
				itemSelected = [];
		});


	trash.click(function() {
		$(this).addClass("click-icon");
		});

$("[data-type='trash']").hover(function() {
		$(this).addClass("grow");
		},

		function() {
		$(this).removeClass("grow");
		});






