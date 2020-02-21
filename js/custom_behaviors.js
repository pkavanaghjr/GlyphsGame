$(document).ready(function() {
					
	// VARIABLES ////////////////////////////////////////////////////////////////////////////////////
	var pageOneElements = new Array(".logoCircle",".logoCircle h1","#titlePage h2","#titleForm input[type=text]","#titleForm input[type=submit]","#copyright p");
	
	// EVENT HANDLERS ////////////////////////////////////////////////////////////////////////////////////
// _______________________ SUBMIT FORM _____________________________________
	$("#titleForm").on("submit", function(event){
		event.preventDefault();
		
		var firstTextField = $("#titleForm input[type=text]").val();
		window.location = "glyphs2.html?valueOfFirst="+firstTextField;
	});	
	
// _______________________ TEXT FORM FOCUS _____________________________________
	$("#titleForm input[type=text]").on("focus",function(){

		if(this.value == "- NAME -"){
			this.value = "";	
		} else{
			//this.value	
		 }		
		$(this).addClass("hasFocus");
	});
		
	
// _______________________ TEXT FORM BLUR _____________________________________
	$("#titleForm input[type=text]").on("blur",function(){
		if(this.value == ""){
			this.value = "- NAME -";	
		} else{
			//this.value	
		 }	
		$(this).removeClass("hasFocus");

	});
	
// _______________________ SUBMIT FORM HOVER _____________________________________
	$("#titleForm input[type=submit]").hover(
		function(){
			$(this).stop(true).animate({opacity:.7}, 500);
		},
		function(){
			$(this).stop(true).animate({opacity:1}, 500);
	});
	
		

	// FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////
// _______________________ ANIMATE GLYPHS _____________________________________
	function animatePage(){
		for(i=0;i<pageOneElements.length;i++){
			$(pageOneElements[i]).stop(true).css("visibility", "visible");						
			$(pageOneElements[i]).stop(true).delay(200*i).animate({
				opacity:1
			},1000)	
		};	
		animateInput();
	};


	function animateInput(){
		$('#titleForm input[type=text]').delay(200).animate({opacity:.5},750).delay(200).animate({opacity:1},500);
		$('#titleForm input[type=text]').delay(200).animate({opacity:.5},750).delay(200).animate({opacity:1},500);
	}
	



	// INITIALIZATION ////////////////////////////////////////////////////////////////////////////////////
	animatePage();
});