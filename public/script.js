var i = 100;
var interval = setInterval(function(){
	var h1 = document.getElementById("message");
	h1.innerHTML = i--;
	if (i === 0){
		h1.innerHTML = "What do you want?"
		clearInterval(interval);
	}
},40);