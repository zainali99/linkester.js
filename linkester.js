// Linkester.js (C) 2015 by Zain Ali, jsfiler.altervista.org
window.onload = function() {
	var obj = document.querySelectorAll("a"),
		txt1;
	for(var i=0; i < obj.length; i++){
		//add token
		obj[i].token = "token:"+i;
		//cache token and obj
		var cacheToken = obj[i].token,
			o = obj[i],
			element = document.createElement("span");
			getText();
			element.innerHTML = txt1;

			o.appendChild(element);
			
			//log
			console.log(cacheToken);
			getHttps();
		


	}

	function  getHttps() {
		if(o.protocol=="https:"){
			console.log("secure:"+o)
		}
	}

	function getText() {
		if(o.protocol =="https:"){
			txt1 = "<div id='protocol-secure'>"+o.protocol+"</div>"+"<div id='hostname'>"+o.hostname+"</div>"+"<div id='pathname'>"+o.pathname+"</div>"+"<div id='title'></div>";
		}

		else {
			txt1 = "<div id='protocol'>"+o.protocol+"</div>"+"<div id='hostname'>"+o.hostname+"</div>"+"<div id='pathname'>"+o.pathname+"</div>"+"<div id='title'></div>";
		}
	}




};
