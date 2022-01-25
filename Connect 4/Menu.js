function Menu(){
	var _this = this;
	this.menuWrapper=
		$("<div></div>")
		.attr({"id":"wrapper"})
		.css({"width":"1300","height":"700","position":"absolute","left":"10","top":"10"});		
	$("body").append(this.menuWrapper);
//MAIN MENU	
	this.gameTitle = $("<div></div>")
		.attr({"id":"gameTitle", "class":"mainmenuItems"})
		.html("CONNECT 4")
		.css({"background-color":"lemonchiffon", "width":"500","height":"100","position":"absolute","left":"200","top":"125", "fontFamily":"Arial","fontSize":"80", "textAlign":"center"});		
	$(this.gameTitle).css('box-shadow', '10px 8px 20px #333');	
	this.selectMenu = $("<div></div>")
		.attr({"id":"selectMenu","class":"mainmenuItems"})
		.css({"background-color":"lemonchiffon", "width":"400","height":"280","position":"absolute","left":"250","top":"275"});	
	$(this.selectMenu).css('box-shadow', '10px 8px 20px #333');	
	this.playButton =  $("<div></div>")
		.attr({"id":"playButton"})
		.html("PLAY")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"370","height":"80","position":"absolute","left":"15","top":"10","fontFamily":"Arial","fontSize":"65", "textAlign":"center"})
		.hover(function(){
			$("#playButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#playButton").css("background-color", "LightCoral");
			})
		.click(function(){
			$(".mainmenuItems").hide();
			$("#canvas").hide();
			$(".gamemodeButtons").show();
			$("#backButton").show();
			$("#backButton")[0].style.width="380px";
			$("#backButton")[0].style.left="800px";
			$("#backButton")[0].style.top="550px";
			background=new Background([50,10],[729,625]);
			background.wrapper.show();
		});
		
	this.controlsButton = $("<div></div>")
		.attr({"id":"controlsButton"})
		.html("HOW TO PLAY")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"370","height":"80","position":"absolute","left":"15","top":"100","fontFamily":"Arial","fontSize":"50", "textAlign":"center"})
		.hover(function(){
			$("#controlsButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#controlsButton").css("background-color", "LightCoral");
			})
		.click(function(){
			$(".mainmenuItems").hide();
			$("#controlsText").show();
			$("#backButton").show();
			$("#backButton")[0].style.width="380px";
			$("#backButton")[0].style.left="285px";
			$("#backButton")[0].style.top="600px";
		});	
		
	this.scoreButton = $("<div></div>")
		.attr({"id":"scoreButton"})
		.html("This Does Nothing")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"370","height":"80","position":"absolute","left":"15","top":"190","fontFamily":"Arial","fontSize":"40", "textAlign":"center"})
		.hover(function(){
			$("#scoreButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#scoreButton").css("background-color", "LightCoral");
			})
		.click(function(){
			alert("THIS DOES NOTHING!");
		});
	
//GAME OVER WINDOW
	this.gameoverWindow = $("<div></div>")
		.attr({"id":"gameoverWindow"})
		.css({"fontWeight":"bold","display":"none","background-color":"bisque", "width":"800","height":"600","position":"absolute","left":"50","top":"50","fontFamily":"Arial","fontSize":"60", "textAlign":"center","zIndex":"1"});
		$(this.gameoverWindow).css('box-shadow', '10px 10px 15px #333');
	this.gameoverWindowTitle=
		$("<div></div>")
			.attr({"id":"gameoverWindowTitle"})
			.html("Game Over!")
			.css({"width":800,"fontWeight":"bold","fontFamily":"Arial","fontSize":"60", "textAlign":"center","position":"absolute"});
	this.trophyName=
		$("<div></div>")
			.attr({"id":"trophyName"})
			.html("#1")
			.css({"zIndex":3,"top":450,"left":152,"width":160,"fontWeight":"bold","fontFamily":"Arial","fontSize":"30", "textAlign":"center","position":"absolute"});

	this.trophyDisplay=$("<img></img>")
		.attr({"id":"trophyDisplay","src":"trophy.png","alt":"File not found"})
		.css({"position":"absolute","top":70,"left":30,"width":400,"height":450});
	this.crown=$("<img></img>")
		.attr({"id":"crown","src":"crown.png","alt":"File not found"})
		.css({"display":"none","zIndex":"3","position":"absolute","top":260,"left":430,"width":100,"height":100});
	this.scoreDisplay = $("<div></div>")
		.attr({"id":"scoreDisplay"})
		.html("Result Goes Here")
		.css({"background-color":"lightblue", "width":"300","height":"450","position":"absolute","left":"470","top":"70","fontFamily":"Arial","fontSize":"50", "textAlign":"center","zIndex":"2"});				
	this.quitButton2 = $("<div></div>")
		.attr({"id":"quitButton2"})
		.html("BACK TO MENU")
		.css({"cursor":"pointer","padding":2,"background-color":"LightCoral", "width":"400","height":"50","position":"absolute","left":"20","top":"540","fontFamily":"Arial","fontSize":"40", "textAlign":"center", "zIndex":"2"})
		.hover(function(){
				$("#quitButton2").css("background-color", "#9DC679");
			}, function(){
				$("#quitButton2").css("background-color", "LightCoral");
			}
		)
		.click(function(){
				$("#gameoverWindow").hide();
				$(".mainmenuItems").show();
				_this.menuWrapper.show();
		});	
	this.playagainButton = $("<div></div>")
		.attr({"id":"playagainButton"})
		.html("PLAY AGAIN")
		.css({"cursor":"pointer","padding":2,"background-color":"LightCoral", "width":"340","height":"50","position":"absolute","left":"440","top":"540","fontFamily":"Arial","fontSize":"40", "textAlign":"center", "zIndex":"2"})
		.hover(function(){
				$("#playagainButton").css("background-color", "#9DC679");
			}, function(){
				$("#playagainButton").css("background-color", "LightCoral");
			}
		)
		.click(function(){
			$("#gameoverWindow").hide();
			$("#backButton").show();
			$("#backButton")[0].style.width="380px";
			$("#backButton")[0].style.left="800px";
			$("#backButton")[0].style.top="550px";
			background=new Background([50,10],[729,625]);
			background.wrapper.show();
		});	

//CONTROLS WINDOW	
	this.controlsText = $("<div></div>")
		.attr({"id":"controlsText"})
		.html("Left click on a column to put down your piece. Who ever gets to connect 4 peices in a row wins.")
		.css({"padding":5,"background-color":"bisque","width":"600","height":"620", "padding":"5","position":"absolute","left":"150","top":"50","fontFamily":"Arial","fontSize":"60"});
		$(this.controlsText).css('box-shadow', '10px 10px 15px #333');
	

//BACK BUTTON
	this.backButton = $("<div></div>")
		.attr({"id":"backButton"})
		.html("BACK TO MENU")
		.css({"cursor":"pointer","padding":15,"background-color":"LightCoral", "width":"380","height":"30","position":"absolute","left":"250","top":"600","fontFamily":"Arial","fontSize":"32", "textAlign":"center"})
		.hover(function(){
				$("#backButton").css("background-color", "#9DC679");
			}, function(){
				$("#backButton").css("background-color", "LightCoral");
			}
		)
		.click(function(){
			$("#backButton").hide();
			$(".gamemodeButtons").hide();
			$("#controlsText").hide();
			$(".mainmenuItems").show();	
			background.wrapper.hide();			
		});	
		$(this.backButton).css('box-shadow', '10px 8px 20px #333');
		
// APPENDING	
		$("#wrapper").append(this.gameoverWindow);
		$("#wrapper").append(this.gameTitle);
		$("#wrapper").append(this.selectMenu);
		$("#selectMenu").append(this.playButton);
		$("#selectMenu").append(this.controlsButton);
		$("#selectMenu").append(this.scoreButton);
		
		$("#wrapper").append(this.classicmodeButton);
		$("#wrapper").append(this.multiplayermodeButton);
		$(".gamemodeButtons").hide();
		
		$("#gameoverWindow").append(this.quitButton2);
		$("#gameoverWindow").append(this.crown);
		$("#gameoverWindow").append(this.trophyDisplay);
		$("#gameoverWindow").append(this.gameoverWindowTitle);
		$("#gameoverWindow").append(this.playagainButton);
		$("#gameoverWindow").append(this.trophyName);
		$("#gameoverWindow").append(this.scoreDisplay);
		
		$("#wrapper").append(this.controlsText);
		$("#controlsText").hide();
		
		$("#wrapper").append(this.backButton);
		$("#backButton").hide();
}
