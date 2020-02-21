$(document).ready(function() {
					
	// VARIABLES ////////////////////////////////////////////////////////////////////////////////////
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var pageTwoElements = new Array("#nameHolder","#headerText","#rulesList li","#pageTwo h4","#multiplierList li","#wordForm input[type=text]","#wordForm input[type=submit]","#footerButtonsList li");
	
	
// _______________________ GLYPH ARRAYS _____________________________________
	var glyphArray = $("#glyphList").find("li");
	var glyphLetterArray = $("#glyphList").find("h2");
	var glyphValueArray = $("#glyphList").find("h3");
	var alphabetArray = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
	var savedGlyphArray = new Array();
	var savedValueArray = new Array();
	
	
	// EVENT HANDLERS ////////////////////////////////////////////////////////////////////////////////////
// _______________________ TEXT FORM FOCUS _____________________________________
	$("#wordForm input[type=text]").on("focus",function(){
		if(this.value == "- ENTER WORD -"){
			this.value = "";	
		} else{
			//this.value	
		 }	
		$(this).removeClass("invalidInput");
		$(this).addClass("hasFocus");
	});
		
	
// _______________________ TEXT FORM BLUR _____________________________________
	$("#wordForm input[type=text]").on("blur",function(){
		if(this.value == ""){
			this.value = "- ENTER WORD -";	
		} else{
			//this.value	
		 }	
		 
		$(this).removeClass("hasFocus");
	});		
	
	
// _______________________ SUBMIT FORM HOVER _____________________________________
	$("#wordForm input[type=submit]").hover(
		function(){
			$(this).stop(true).animate({opacity:.7}, 500);
		},
		function(){
			$(this).stop(true).animate({opacity:1}, 500);
	});
	
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
		$(this).stop(true).css("visibility", "visible");						
		$(this).animate({
				opacity:1
			},1000)
		$(glyphArray).css("visibility", "hidden");
		$(glyphArray).css("opacity", "0");
		savedGlyphArray = [];
		getGlyphLetter();
		animateGlyphs();
	});
	

// _______________________ HOME BUTTON _____________________________________	
	$("#homeButton").on("click", function(event){
		event.preventDefault();
		// FADE EVERYTHING OUT
		window.location = "index.html";
//		console.log("xXx");
//		console.log("xXx");
	});

	
// _______________________ SUBMIT FORM _____________________________________
	$("#wordForm").on("submit", function(event){
		event.preventDefault();
		
		var wordTextField = $("#wordForm input[type=text]").val().toUpperCase();
				
		for(i=0;i<glyphValueArray.length;i++){
			savedValueArray.push($(glyphValueArray[i]).html());				
		}	
	
	
// SCOREBOARD		
		var userWordArray = wordTextField.split("");

		var scoreCounter = 0;
		
		for(i=0;i<userWordArray.length;i++){

			if(userWordArray[i] == "A"){

				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "B"){
				scoreCounter = scoreCounter+3;
			} else if(userWordArray[i] == "C"){
				scoreCounter = scoreCounter+3;
			} else if(userWordArray[i] == "D"){
				scoreCounter = scoreCounter+2;
			} else if(userWordArray[i] == "E"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "F"){
				scoreCounter = scoreCounter+4;
			} else if(userWordArray[i] == "G"){
				scoreCounter = scoreCounter+2;
			} else if(userWordArray[i] == "H"){
				scoreCounter = scoreCounter+4;
			} else if(userWordArray[i] == "I"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "J"){
				scoreCounter = scoreCounter+8;
			} else if(userWordArray[i] == "K"){
				scoreCounter = scoreCounter+5;
			} else if(userWordArray[i] == "L"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "M"){
				scoreCounter = scoreCounter+3;
			} else if(userWordArray[i] == "N"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "O"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "P"){
				scoreCounter = scoreCounter+3;
			} else if(userWordArray[i] == "Q"){
				scoreCounter = scoreCounter+10;
			} else if(userWordArray[i] == "R"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "S"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "T"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "U"){
				scoreCounter = scoreCounter+1;
			} else if(userWordArray[i] == "V"){
				scoreCounter = scoreCounter+4;
			} else if(userWordArray[i] == "W"){
				scoreCounter = scoreCounter+4;
			} else if(userWordArray[i] == "X"){
				scoreCounter = scoreCounter+8;
			} else if(userWordArray[i] == "Y"){
				scoreCounter = scoreCounter+4;
			} else if(userWordArray[i] == "Z"){
				scoreCounter = scoreCounter+10;

			}

		}

			
			if(userWordArray.length == 4){
				scoreCounter = scoreCounter * 2;
			} else if(userWordArray.length == 5){
				scoreCounter = scoreCounter * 4;
			} else if(userWordArray.length == 6){
				scoreCounter = scoreCounter * 6;
			} else if(userWordArray.length == 7){
				scoreCounter = scoreCounter * 8;
			} else if(userWordArray.length == 8){
				scoreCounter = scoreCounter * 10;
			} else if(userWordArray.length == 9){
				scoreCounter = scoreCounter * 10;
			} else if(userWordArray.length == 10){
				scoreCounter = scoreCounter * 10;
			}
			
			

		var valid = false;
		var counter = 0;
		
		for(i=0;i<userWordArray.length;i++){
			
			for(j=0;j<savedGlyphArray.length;j++){
				
				if(userWordArray[i] == savedGlyphArray[j]){					
					// good letter
					counter++
					console.log("match")
					letterMatch = true;
					break;
				} else {			
					
				};
			}console.log(counter)	
		}
				
		if(counter == userWordArray.length){
			valid = true;
			console.log("true")
		} else {
			valid = false;
			console.log("false")
		}
		
		
		var spellCheck = false;
		if($Spelling.BinSpellCheckFields('all')){
				
			spellCheck = true;
		
		}else{
				
			$Spelling.SubmitFormById  = '"#wordForm input[type=text]';
				
			spellCheck = false;
		
		};
		
		if(valid == true && spellCheck == true){console.log("SUBMIT")
			window.location = "glyphs3.html?valueOfFirst="+wordTextField+"&valueOfSecond="+incomingFirstName+"&valueOfThird="+scoreCounter+"&glyphOne="+savedGlyphArray[0]+"&glyphTwo="+savedGlyphArray[1]+"&glyphThree="+savedGlyphArray[2]+"&glyphFour="+savedGlyphArray[3]+"&glyphFive="+savedGlyphArray[4]+"&glyphSix="+savedGlyphArray[5]+"&glyphSeven="+savedGlyphArray[6]+"&glyphEight="+savedGlyphArray[7]+"&glyphNine="+savedGlyphArray[8]+"&glyphTen="+savedGlyphArray[9]+"&pointOne="+savedValueArray[0]+"&pointTwo="+savedValueArray[1]+"&pointThree="+savedValueArray[2]+"&pointFour="+savedValueArray[3]+"&pointFive="+savedValueArray[4]+"&pointSix="+savedValueArray[5]+"&pointSeven="+savedValueArray[6]+"&pointEight="+savedValueArray[7]+"&pointNine="+savedValueArray[8]+"&pointTen="+savedValueArray[9];
		}else{
			console.log("NO GO")
			$("#wordForm input[type=text]").addClass("invalidInput");
		}
	});	
	
	// FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////
	
// _______________________ WRITE USERNAME INPUT _____________________________________
	function startParty(){
		incomingFirstName = getQueryParam("valueOfFirst", searchString);
				
		writeTextToPage(incomingFirstName+",","#nameHolder");
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
				
	
	
// _______________________ RANDOM -> LETTER _____________________________________
	function getGlyphLetter(){
		
// RANDOM NUMBER
		var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
			ranNums = [],
			k = nums.length,
			j = 0;
		
		while (k--) {
			j = 1+Math.floor(Math.random() * (k)-1);
			ranNums.push(nums[j]);
			nums.splice(j,1);
		}			

	
// NUMBER > LETTER		
		for(i=0;i<glyphArray.length;i++){
			var randomGlyph = alphabetArray[ranNums[i]];
			writeTextToPage(randomGlyph,glyphLetterArray[i]);
			
			
			if(randomGlyph == "A"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "B"){
				writeTextToPage("3",glyphValueArray[i]);
			} else if(randomGlyph == "C"){
				writeTextToPage("3",glyphValueArray[i]);
			} else if(randomGlyph == "D"){
				writeTextToPage("2",glyphValueArray[i]);
			} else if(randomGlyph == "E"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "F"){
				writeTextToPage("4",glyphValueArray[i]);
			} else if(randomGlyph == "G"){
				writeTextToPage("2",glyphValueArray[i]);
			} else if(randomGlyph == "H"){
				writeTextToPage("4",glyphValueArray[i]);
			} else if(randomGlyph == "I"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "J"){
				writeTextToPage("8",glyphValueArray[i]);
			} else if(randomGlyph == "K"){
				writeTextToPage("5",glyphValueArray[i]);
			} else if(randomGlyph == "L"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "M"){
				writeTextToPage("3",glyphValueArray[i]);
			} else if(randomGlyph == "N"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "O"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "P"){
				writeTextToPage("3",glyphValueArray[i]);
			} else if(randomGlyph == "Q"){
				writeTextToPage("10",glyphValueArray[i]);
			} else if(randomGlyph == "R"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "S"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "T"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "U"){
				writeTextToPage("1",glyphValueArray[i]);
			} else if(randomGlyph == "V"){
				writeTextToPage("4",glyphValueArray[i]);
			} else if(randomGlyph == "W"){
				writeTextToPage("4",glyphValueArray[i]);
			} else if(randomGlyph == "X"){
				writeTextToPage("8",glyphValueArray[i]);
			} else if(randomGlyph == "Y"){
				writeTextToPage("4",glyphValueArray[i]);
			} else if(randomGlyph == "Z"){
				writeTextToPage("10",glyphValueArray[i]);
			}	
				
			savedGlyphArray.push(randomGlyph);
		};	
	};
	
	
// _______________________ ANIMATE GLYPHS _____________________________________
	function animateGlyphs(){
		for(i=0;i<glyphArray.length;i++){
			$(glyphArray[i]).stop(true).css("visibility", "visible");						
			$(glyphArray[i]).stop(true).delay(140*i).animate({
				opacity:1
			},750)	
		};			
		
	};
	

// _______________________ ANIMATE PAGE _____________________________________
	function animatePage(){
		var counter = 0;
		for(i=0;i<pageTwoElements.length;i++){
			$(pageTwoElements[i]).stop(true).css("visibility", "visible");						
			$(pageTwoElements[i]).stop(true).delay(200*i).animate({
				opacity:1
			},1000)		
			counter++;		
		};	
		animateGlyphs();	
		animateInput();	
	};
	
	function animateInput(){
		$('#wordForm input[type=text]').delay(200).animate({opacity:.5},750).delay(200).animate({opacity:1},500);
		$('#wordForm input[type=text]').delay(200).animate({opacity:.5},750).delay(200).animate({opacity:1},500);
	}



	// INITIALIZATION ////////////////////////////////////////////////////////////////////////////////////

	startParty();
	getGlyphLetter();
	animatePage()
});
