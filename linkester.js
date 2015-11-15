// Linkester.js 0.2 (C) 2015 by Zain Ali, http://zainali99.github.io

var linkester = (function() {
var txt, 
		  cacheToken, element,
		  o;
	

	function  getHttps() {
		if(o.protocol=="https:"){
			
			console.log("token_SECURE_href: "+o)
		}
		
	}

	function getText() {
    var linkStart = "<div id='linkester-js-element'>";
    var pStart = "<span id='protocol'>"+o.protocol;
    var psStart = "<span id='protocol-secure'>"+o.protocol;
    var hnStart = "<span id='hostname'>//"+o.hostname;
    var pnStart = "<span id='pathname'>"+o.pathname;
    var pmStart = "<span id='protocol-mailto'>"+o.protocol;
    var ftpStart = "<span id='protocol-ftp'>"+o.protocol;
    var closeDiv = "</div>";
    var closeSpan = "</span>";
    
    
		if(o.protocol =="https:"){
			txt = linkStart + psStart + closeSpan + hnStart + closeSpan + pnStart + closeSpan + closeDiv;
		}
        else if(o.protocol =="mailto:"){
        	txt = linkStart + pmStart + closeSpan + hnStart + closeSpan + pnStart + closeSpan + closeDiv;
        }
        else if(o.protocol =="ftp:"){
        	txt = linkStart + ftpStart + closeSpan + hnStart + closeSpan + pnStart + closeSpan + closeDiv;
        }
        
        

		else {
			txt = linkStart + pStart + closeSpan + hnStart + closeSpan + pnStart + closeSpan + closeDiv;
		}
	}
  
  
  return {
    applyTo: function(element) {
      
      //0.2
      var where = document.querySelector(element);
      var obj = where.querySelectorAll("a");
        
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
    },
  
    
    getSecureConnections: function() {
      if(o.protocol=="https:"){
			console.log("token_SECURE_href: "+o);
		  }
    }
    
  },
  
  getTitle: function(page) {
  	var xhr = new XMLHttpRequest();
	xhr.open("GET", page, true);
	xhr.onreadystatechange = function() { 
  	if (xhr.readyState == 4) {
    	var title = (/<title>(.*?)<\/title>/m).exec(xhr.responseText)[1];
  	}
	
	}
	xhr.send();
	return title;
	 }
    
  
})();


 
