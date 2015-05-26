//ToDoList 
	// ¯\_(ツ)_/¯ Hi! I'm Cody, I will help you navigate the code.


	var bubbleSecondShown = true;
	var bubbleThirdShown = true;
	var bubbleFourthShown = true;

if (document.cookie !== "ToDoList=FirstVisit") {
	bubbleFirst();
	var bubbleSecondShown = false;
	var bubbleThirdShown = false;
	var bubbleFourthShown = false;
}


/* if bubbleFirst.cookie doesn't exist show first hint bubble. Also defining functions
		for the other bubbles which will come later on  ¯\_(ツ) */ 
function bubbleFirst() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints" id="first">'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3 rotate" id="x">');
			$(".hints").append('<img src="img/step1.png" alt="Step1 hints" class="XL3 L3 M3 S3 float" id="firstBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$("div#first").remove();
					}
				});
			$("div#first").click(function() {
					$(this).remove();
				});

				$("input").click(function() {
					$("div#first").remove();
				})
}//bubbleFirst


function bubbleSecond() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints" id="second"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3 rotate" id="x">');
			$(".hints").append('<img src="img/step2.png" alt="Step2 hints" class="float XL2 L2 M2 S2" id="secondBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$("div#second").remove();
					}
				});
			
			$("#secondBubble").click(function() {
					$("div#second").remove();
				})
}//bubbleSecond


function bubbleThird() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints" id="third"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3 rotate" id="x">');
			$(".hints").append('<img src="img/step3.png" alt="Step3 hints" class="float XL4 L4 M4 S4" id="thirdBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$("div#third").remove();
					}
				});
			
			$("#thirdBubble").click(function() {
					$("div#third").remove();
				})
}//bubbleSecond


function bubbleFourth() {
	var body = $("body");
	var exit = false;
		body.prepend($('<div class="hints" id="fourth"></div>'));
			$(".hints").prepend('<img src="img/xIcon.png" class="XL3 rotate" id="x">');
			$(".hints").append('<img src="img/step4.png" alt="Step4 hints" class="float XL3 L3 M3 S3 XS2" id="fourthBubble">');
			$("#x").click(function() {
				exit = true;
					if(exit === true) {
						$("div#fourth").remove();
					}
				});
			
			$("#fourthBubble, ul").click(function() {
					$("div#fourth").remove();
				})
}//bubbleSecond


/* (ツ)_/¯ Selects toDoButton and when clicked appends the 
						new item to the list ~ also check if there is any local Storage
						available and load any content from it (around line 110) */ 

var toDoButton = $("div#add_todo");
var list = $("ul");
var input = $(".group-header");
var myStorage = localStorage;
var nextIndex = []

	var keyNum = function() {
		var num = 0;
	if (myStorage.length !== 0) {
			nextIndex = Object.keys(myStorage);
			num = parseInt(nextIndex.pop()) + 1;
		}//ifStatement
		return num;
	}//keyNum

if (myStorage.length !== 0) {
	for(key in myStorage) {
		list.append(myStorage.getItem(key));
	}//forLoop
}//ifStatement

	
	$( toDoButton ).click(function() {
	    		if(!bubbleSecondShown) {
	    		bubbleSecond();
	    		bubbleSecondShown = true;
	    }//ifStatement

		var current = $("input");
		var value = $(current).val();
		var item = $('<li>' + value +'</li>');
			if (value) {
				$(list).append(item);
				$(current).val("");
				$(item).addClass("wobble");
				$(input).addClass("green");
				$(item).attr("id", keyNum());

				myStorage.setItem(keyNum(), item[0].outerHTML);

				setTimeout(function(){
	        				$(input).removeClass("green");
	        				$(item).removeClass("wobble")
	    					}, 400);
			} else {
				$(input).addClass("red");
				setTimeout(function(){
	        				$(input).removeClass("red");
	    					}, 400);
			}//ifStatement
	});//toDoButton.click 

/* Repeats the previous step for the enter key press case ¯\_(ツ) */ 

$(input).on('keypress', function(evt) {
  var key = evt.which;

    if (key === 13) {
    		if(!bubbleSecondShown) {
    		bubbleSecond();
    		bubbleSecondShown = true;
    }//ifStatement

	var current = $("input");
	var value = $(current).val();
	item = $('<li>' + value +'</li>');
		$(current).val("");
		if (value) {
			$( list ).append(item);
			current.value = "";
			$(item).attr("id", keyNum());

			myStorage.setItem(keyNum(), item[0].outerHTML);


			$(item).addClass("wobble")
			$(input).addClass("green");

			setTimeout(function(){
        				$(input).removeClass("green");
        				$(item).removeClass("wobble")
    					}, 400);
		} else {
			$(input).addClass("red");
			setTimeout(function(){
        				$(input).removeClass("red");
    					}, 400);
		}//ifStatement
	}//ifStatement
});//input.on'keypress'



/* (ツ)_/¯ Click an item on the list in order to perform an action
						like delete or heart it. */ 
var item;
var itemSelected = [];
var textSelected;

list.mousedown(function(evt) {
	item = $(evt.srcElement);
			$("div#second").remove();

			 	if(!bubbleThirdShown) {
	    		bubbleThird();
	    		bubbleThirdShown = true;
	    }//ifStatement

   		if(item.hasClass("makeBigger")) {
   			item.removeClass("makeBigger");
   			var toRemove = itemSelected.indexOf(item[0]);
    		itemSelected.splice(toRemove, 1);
   		} else {
			item.addClass("makeBigger");
					itemSelected.push(item[0]);
			}//ifStatement	
});

var heart = $("[data-type='heart']");

heart.click(function() {

			$("div#third").remove();
		
		 	if(!bubbleFourthShown) {
    		bubbleFourth();
    		bubbleFourthShown = true;
    }//ifStatement

     var items = $(itemSelected);

			if(items.hasClass("makeRed")) {
					items.removeClass("makeBigger");
					items.removeClass("makeRed");
			} else {
					items.addClass("makeRed");
					items.removeClass("makeBigger");
			}//ifStatement	

			for(var i=0; i<itemSelected.length; i++) {
				var indexItem = itemSelected[i].id;
				myStorage.setItem(indexItem, items[i].outerHTML);
			}

		 itemSelected = [];
});

var trash = $("[data-type='trash']");
	trash.click(function() {
		$("div#third").remove();
		$(this).removeClass("grow");
		
		 	if(!bubbleFourthShown) {
    		bubbleFourth();
    		bubbleFourthShown = true;
    }//ifStatement
    
			var lis = document.querySelectorAll("li")
			var index = $(lis).index(item)-1;
		
			for(var i=0; i<itemSelected.length; i++) {
				var indexItem = itemSelected[i].id;
				myStorage.removeItem(indexItem);
			}

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
});


$("[data-type='trash']").hover(function() {
		$(this).addClass("grow");
		},
		function() {
		$(this).removeClass("grow");
		});


document.cookie = "ToDoList=FirstVisit";

