//ToDoList 
	// ¯\_(ツ)_/¯ Hi! I'm Cody, I will help you navigate the code.


// if (document.cookie !== "ToDoList=markFirstVisit") {
// 	bubbleFirst();
// 	var bubbleSecondShown = false;
// 	var bubbleThirdShown = false;
// 	var bubbleFourtShown = false;
// } else {
// 	var bubbleSecondShown = true;
// 	var bubbleThirdShown = true;
// 	var bubbleFourtShown = true;
// }

bubbleFirst();

/* if bubbleFirst.cookie doesn't exist show first hint bubble. Also defining functions
		for the other bubbles which will come later on  ¯\_(ツ) */ 
function bubbleFirst() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints">'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3 rotate" id="x">');
			$(".hints").append('<img src="img/step1.png" alt="Step1 hints" class="XL3 L3 M3 S3 float" id="firstBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$(".hints").remove();
					}
				});
			$(".hints").click(function() {
					$(this).remove();
				})

			$(".group-header").click(function() {
					$(".hints").remove();
				})
}//bubbleFirst


var bubbleSecondShown = false;
var bubbleThirdShown = false;

function bubbleSecond() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3"rotate" id="x">');
			$(".hints").append('<img src="img/step2.png" alt="Step1 hints" class="float XL2 L2 M2 S2" id="secondBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$(".hints").remove();
					}
				});
			
			$("#secondBubble").click(function() {
					$(".hints").remove();
				})
}//bubbleSecond


function bubbleThird() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3"rotate" id="x">');
			$(".hints").append('<img src="img/step3.png" alt="Step1 hints" class="float XL4 L4 M4 S4" id="thirdBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$(".hints").remove();
					}
				});
			
			$("#thirdBubble").click(function() {
					$(".hints").remove();
				})
}//bubbleSecond


function bubbleFourth() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3"rotate" id="x">');
			$(".hints").append('<img src="img/step3.png" alt="Step1 hints" class="float XL4 L4 M4 S4" id="thirdBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$(".hints").remove();
					}
				});
			
			$("#thirdBubble").click(function() {
					$(".hints").remove();
				})
}//bubbleSecond


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

			// if (document.cookie !== "ToDoList=bubbleSecond") {
				bubbleSecond();
			// }//ifStatement  
	});//click 


/* Repeats the previous step for the enter key press case ¯\_(ツ) */ 

	$( input ).on('keypress', function(evt) {
    var key = evt.which;
	    if (key === 13) {
	    	
	    	if(!bubbleSecondShown) {
	    		bubbleSecond();
	    		bubbleSecondShown = true;
	    }//ifStatement

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



/* (ツ)_/¯ Click an item on the list in order to perform an action
						like delete or heart it. */ 
var item;
var itemSelected = [];
list.mousedown(function(evt) {
	item = $(evt.srcElement);
			$(".hints").remove();
			
			 	if(!bubbleThirdShown) {
	    		bubbleThird();
	    		bubbleThirdShown = true;
	    }//ifStatement

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
				console.log(index);
				if(index > 0) {
				$(itemSelected).remove();
				$( "li:gt("+ index +")" ).addClass("wobble");
				setTimeout(function(){
	        				$( "li:gt("+ index +")" ).removeClass("wobble");
	    					}, 600);
			} else {
				$(itemSelected).remove();
				$( "li" ).addClass("wobble");
				setTimeout(function(){
	        				$( "li" ).removeClass("wobble");
	    					}, 600);
			}//ifStatement

				itemSelected = [];
		});


	trash.click(function() {
		$(this).removeClass("grow");
		});

$("[data-type='trash']").hover(function() {
		$(this).addClass("grow");
		},

		function() {
		$(this).removeClass("grow");
		});


// document.cookie = "ToDoList=markFirstVisit";

