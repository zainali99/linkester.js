// Linkester.js (C) 2015 by Zain Ali, jsfiler.altervista.org
window.onload = function() {
	var obj = document.querySelectorAll("a"),
		txt, newTrigger, browser,
		cacheToken, element,
		o;
        
	for(var i=0; i < obj.length; i++){
		obj[i].token = "token:"+i+"_href:"+obj[i];
		cacheToken= obj[i].token;
		o = obj[i];
		element = document.createElement("span");
		getText();

o.insertAdjacentHTML ("afterEnd", txt);
//log
			console.log(cacheToken);
			getHttps();
			


	}

	function  getHttps() {
		if(o.protocol=="https:"){
			
			console.log("token_SECURE_href: "+o)
		}
		
	}

	function getText() {
		if(o.protocol =="https:"){
			txt = "<div id='linkester-js-element'><div id='protocol-secure'>"+o.protocol+"</div>"+"<div id='hostname'>//"+o.hostname+"</div>"+"<div id='pathname'>"+o.pathname+"</div>"+"<div id='title'></div></div>";
		}
        
        
        

		else {
			txt = "<div id='linkester-js-element'><div id='protocol'>"+o.protocol+"</div>"+"<div id='hostname'>//"+o.hostname+"</div>"+"<div id='pathname'>"+o.pathname+"</div>"+"<div id='title'></div></div>";
		}
	}




};
