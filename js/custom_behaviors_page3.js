$(document).ready(function() {
					
	// VARIABLES ////////////////////////////////////////////////////////////////////////////////////
// _______________________ QUERY _____________________________________	
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfSecond", searchString);
	var scoreCounter = getQueryParam("valueOfThird", searchString);
	var pageThreeElements = new Array(".logoCircle",".logoCircle h1","#scoreBoard","#userName","#footerButtonsList li");
	
	
// _______________________ GLYPH ARRAYS _____________________________________	
	var prevGlyphArray = $("#prevGlyphList").find("li");
	var glyphLetterArray = $("#prevGlyphList").find("h2");
	var glyphValueArray = $("#prevGlyphList").find("h3");
	
	
	// EVENT HANDLERS ////////////////////////////////////////////////////////////////////////////////////
// _______________________ FOOTER BUTTON HOVER _____________________________________
	$("#footerButtonsList a").hover(
		function(){
			$(this).stop(true).animate({opacity:.7}, 500);
		},
		function(){
			$(this).stop(true).animate({opacity:1}, 500);
	});	
	
	
// _______________________ REPLAY BUTTON _____________________________________
	$("#replayButton").on("click", function(event){
		event.preventDefault();
		window.location = "glyphs2.html?valueOfFirst="+incomingFirstName;
	});
	

// _______________________ HOME BUTTON _____________________________________	
	$("#homeButton").on("click", function(event){
		event.preventDefault();
		// FADE EVERYTHING OUT
		window.location = "index.html";
	});
	
	// FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////
// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeIncomingWord(){
		var incomingUserWord = getQueryParam("valueOfFirst", searchString);
		
		writeTextToPage(incomingUserWord,".logoCircle h1");
		writeTextToPage(incomingFirstName+"'s Glyphs","#userName");
		writeTextToPage(scoreCounter+" POINTS","#scoreBoard");
	};
		

// _______________________ WRITE QUERY STRING TO PAGE _____________________________________
	function writeTextToPage(textToWrite, destination){
		$(destination).html(textToWrite);
		
	};
	
	
// _______________________ GET QUERY STRING _____________________________________
	function getQueryParam(parameter, qs) {
		qs = "&" + qs.replace(/%20/gi, ' ' );
		var p = escape(unescape(parameter));
		var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
	   
		var match = regex.exec(qs);
		var value = "";
		if (match != null) {
			value = match[1];
		};
		return value;
	};	
	
	
// _______________________ RANDOM NUMBER -> LETTER _____________________________________
	function getGlyphLetter(){
		
			writeTextToPage(getQueryParam("glyphOne", searchString),glyphLetterArray[0]);
			writeTextToPage(getQueryParam("glyphTwo", searchString),glyphLetterArray[1]);
			writeTextToPage(getQueryParam("glyphThree", searchString),glyphLetterArray[2]);
			writeTextToPage(getQueryParam("glyphFour", searchString),glyphLetterArray[3]);
			writeTextToPage(getQueryParam("glyphFive", searchString),glyphLetterArray[4]);
			writeTextToPage(getQueryParam("glyphSix", searchString),glyphLetterArray[5]);
			writeTextToPage(getQueryParam("glyphSeven", searchString),glyphLetterArray[6]);
			writeTextToPage(getQueryParam("glyphEight", searchString),glyphLetterArray[7]);
			writeTextToPage(getQueryParam("glyphNine", searchString),glyphLetterArray[8]);
			writeTextToPage(getQueryParam("glyphTen", searchString),glyphLetterArray[9]);
		
			writeTextToPage(getQueryParam("pointOne", searchString),glyphValueArray[0]);
			writeTextToPage(getQueryParam("pointTwo", searchString),glyphValueArray[1]);
			writeTextToPage(getQueryParam("pointThree", searchString),glyphValueArray[2]);
			writeTextToPage(getQueryParam("pointFour", searchString),glyphValueArray[3]);
			writeTextToPage(getQueryParam("pointFive", searchString),glyphValueArray[4]);
			writeTextToPage(getQueryParam("pointSix", searchString),glyphValueArray[5]);
			writeTextToPage(getQueryParam("pointSeven", searchString),glyphValueArray[6]);
			writeTextToPage(getQueryParam("pointEight", searchString),glyphValueArray[7]);
			writeTextToPage(getQueryParam("pointNine", searchString),glyphValueArray[8]);
			writeTextToPage(getQueryParam("pointTen", searchString),glyphValueArray[9]);
	};
	
	
// _______________________ ANIMATE GLYPHS _____________________________________
	function animateGlyphs(){
		for(i=0;i<prevGlyphArray.length;i++){
			$(prevGlyphArray[i]).stop(true).css("visibility", "visible");						
			$(prevGlyphArray[i]).stop(true).delay(140*i).animate({
				opacity:1
			},750)	
		};	
	};	
	
	
// _______________________ ANIMATE PAGE _____________________________________
	function animatePage(){
		for(i=0;i<pageThreeElements.length;i++){
			$(pageThreeElements[i]).stop(true).css("visibility", "visible");						
			$(pageThreeElements[i]).stop(true).delay(200*i).animate({
				opacity:1
			},1000)	
		};	
		
		animateGlyphs();
	};
	
	
	
	
	// INITIALIZATION ////////////////////////////////////////////////////////////////////////////////////
	writeIncomingWord();
	getGlyphLetter();
	animatePage();
	
});