var toDoButton = document.querySelector("#add_todo");
var list = document.querySelector("ul");
var input = document.querySelector("input");
	
	toDoButton.addEventListener("click", function(evt) {
		evt.preventDefault();
		var item = document.createElement("LI")
		var current = document.querySelector("input");
		var value = current.value;
			if (value !== "") {
				list.appendChild(item).innerHTML = value;
				current.value = "";
			}//ifStatement
	});//click 

	input.addEventListener('keypress', function(evt) {
    var key = evt.which;
    if (key === 13) {
    	evt.preventDefault();
				var item = document.createElement("LI");
				var input = document.querySelector("input");
				var value = input.value;
					if (value !== "") {
						list.appendChild(item).innerHTML = value;
						input.value = "";
					}//ifStatement
		}//ifStatement
	});



	list.addEventListener("click", function(evt) {
		var item = evt.srcElement;
		item.className = "completed";
	});

