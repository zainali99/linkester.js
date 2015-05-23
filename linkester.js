// Linkester.js (C) 2015 by Zain Ali, jsfiler.altervista.org
window.l = function() {

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
			txt = "<div id='linkester-js-element'><span id='protocol-secure'>"+o.protocol+"</span>"+"<span id='hostname'>//"+o.hostname+"</span>"+"<span id='pathname'>"+o.pathname+"</span>"+"<span id='title'></span></span>";
		}
        else if(o.protocol =="mailto:"){
        	txt = "<div id='linkester-js-element'><span id='protocol-mailto'>"+o.protocol+"</span>"+"<span id='hostname'>//"+o.hostname+"</span>"+"<span id='pathname'>"+o.pathname+"</span>"+"<span id='title'></span></span>";
        }
        else if(o.protocol =="ftp:"){
        	txt = "<div id='linkester-js-element'><span id='protocol-ftp'>"+o.protocol+"</span>"+"<span id='hostname'>//"+o.hostname+"</span>"+"<span id='pathname'>"+o.pathname+"</span>"+"<span id='title'></span></span>";
        }
        
        

		else {
			txt = "<div id='linkester-js-element'><span id='protocol'>"+o.protocol+"</span>"+"<span id='hostname'>//"+o.hostname+"</span>"+"<span id='pathname'>"+o.pathname+"</span>"+"<span id='title'></span></span>";
		}
	}




}
/*
l(); event-starter.
*/
