function Background(position,size){
	var _this=this;
	this.wrapper=
		$("<div></div>")
			.attr({"id":"background"})
			.css({"position":"absolute","width":size[0],"height":size[1],
					"left":position[0],"top":position[1],"display":"none"});
					
	this.holes=[];
	this.occupiedPositions=[];
	this.redPositions=[];
	this.yellowPositions=[];
	for(var i=0;i<7;i++){
		for(var k=0;k<6;k++){
			var tempHole=new Hole(_this,[i,k]);
			_this.holes.push(tempHole);
		}
	}
	
	$("body").append(this.wrapper);
}