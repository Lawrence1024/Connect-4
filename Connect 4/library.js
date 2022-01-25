function drop(hole,column){
	var background=hole.background;
	var bottom=5;
	for(var i=0;i<background.occupiedPositions.length;i++){
		if(background.occupiedPositions[i][0]==column){
			bottom--;
		}
	}
	if(bottom>=0){
		var tempChip=new Chip(hole.background,[column,bottom],"actual");
		chips.push(tempChip);
		tempChip.drop();
		background.occupiedPositions.push([column,bottom]);
		if(tempChip.color=="yellow"){
			background.yellowPositions.push([column,bottom]);
		}else{
			background.redPositions.push([column,bottom]);
		}
		background.holes[column+bottom*7].color=tempChip.elem[0].style.backgroundColor;
		winner=checkIfWin([column,bottom],background,tempChip);
		if(winner){
			setTimeout(function(){
				alert(winner+" wins");
				endGame(winner);
			},910);
		}
		if(background.occupiedPositions.length==42){
			setTimeout(function(){
				alert("There is a tie.");
				endGame("tie");
			},910);
		}
	}
}

function checkIfWin(position,background,chip){
	var rowCheck=0;
	var columnCheck=0;
	var dUp=0;
	var dDown=0;
	var whoWins="";
	var keepChecking=true;
	if(chip.color=="yellow"){
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]+k,position[1]].join()==background.yellowPositions[i].join()){
					rowCheck++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]-k,position[1]].join()==background.yellowPositions[i].join()){
					rowCheck++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0],position[1]+k].join()==background.yellowPositions[i].join()){
					columnCheck++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0],position[1]-k].join()==background.yellowPositions[i].join()){
					columnCheck++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]+k,position[1]+k].join()==background.yellowPositions[i].join()){
					dDown++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]-k,position[1]-k].join()==background.yellowPositions[i].join()){
					dDown++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]+k,position[1]-k].join()==background.yellowPositions[i].join()){
					dUp++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.yellowPositions.length;i++){
				if([position[0]-k,position[1]+k].join()==background.yellowPositions[i].join()){
					dUp++;i=100;
				}else if(i==background.yellowPositions.length-1){k=100};
			}
		}
	}else{
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]+k,position[1]].join()==background.redPositions[i].join()){
					rowCheck++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]-k,position[1]].join()==background.redPositions[i].join()){
					rowCheck++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0],position[1]+k].join()==background.redPositions[i].join()){
					columnCheck++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0],position[1]-k].join()==background.redPositions[i].join()){
					columnCheck++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]+k,position[1]+k].join()==background.redPositions[i].join()){
					dDown++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]-k,position[1]-k].join()==background.redPositions[i].join()){
					dDown++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]+k,position[1]-k].join()==background.redPositions[i].join()){
					dUp++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
		for(var k=1;k<8;k++){
			for(var i=0;i<background.redPositions.length;i++){
				if([position[0]-k,position[1]+k].join()==background.redPositions[i].join()){
					dUp++;i=100;
				}else if(i==background.redPositions.length-1){k=100};
			}
		}
	}
	if(rowCheck>=3 || columnCheck>=3 || dUp>=3 || dDown>=3){
		whoWins=chip.color;
		return whoWins;
	}else{
		return "";
	}
}
function endGame(winner){
	//_this.endWord.elem[0].style.display="none";
	//backgroundMusic.aC.channel.pause();
	$("#gameoverWindow").show();
	background.wrapper.hide();
	$("#backButton").hide();
	$("#trophyName")[0].innerHTML=winner;
	if(winner=="tie"){
		$("#scoreDisplay")[0].innerHTML="There is a tie!";
	}else{
		$("#scoreDisplay")[0].innerHTML="The winner is "+winner+"!";
	}
	background.holes=[];
	background=null;
	for(var i=0;i<chips.length;i++){
		chips[i].elem[0].style.display="none";
	}
}
function checkIfFull(_this){
	for(var i=0;i<_this.background.occupiedPositions.length;i++){
		if([_this.position[0],0].join()==_this.background.occupiedPositions[i].join()){
			return true;
		}
	}
	return false;
}











