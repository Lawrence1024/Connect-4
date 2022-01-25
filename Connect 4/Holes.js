function Hole(bG,position,gap){
	var _this=this;
	this.background=bG;
	this.position=position;
	this.color="";
	this.num=_this.position[0]+_this.position[1]*7;
	this.elem=
		$("<img>")
			.attr({"id":"hole"+(_this.position[0]+_this.position[1]*7),"src":"background.png"})
			.css({"position":"absolute","left":_this.position[0]*104,"top":_this.position[1]*104,
					"width":104,"height":104,"zIndex":3})
			.click(function(){
				var full=checkIfFull(_this);
				if(!full){
					drop(_this,_this.position[0]);
					_this.tempChip.elem.hide();
					var full2=checkIfFull(_this);
					if(!full2){
						_this.tempChip=new Chip(_this.background,[_this.position[0],0],"hover");
					}
				}
			})
			.hover(function(){
				var full=checkIfFull(_this);
				if(!full){
					_this.tempChip=new Chip(_this.background,[_this.position[0],0],"hover");
				}
			},function(){
				var full=checkIfFull(_this);
				if(!full){
					_this.tempChip.elem.hide();
				}
			});
	this.background.wrapper.append(this.elem);
}