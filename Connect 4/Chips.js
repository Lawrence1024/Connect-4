var colorNum=0;
function Chip(bG,position,type){
	var _this=this;
	this.position=position;
	this.background=bG;
	this.type=type;
	if(colorNum%2==0){
		this.color="yellow";
	}else if(colorNum%2==1){
		this.color="red";
	}else{
		alert("something went wrong");
	}
	if(type=="actual"){colorNum++;}
	this.elem=
		$("<div></div>")
			.css({"position":"absolute","backgroundColor":_this.color,
					"left":_this.position[0]*104+9,"top":10,
					"width":86,"height":86,"borderRadius":200,"zIndex":2});
	this.drop=function(){
		this.elem.animate({"top":_this.position[1]*104+10},700,"linear");
		this.elem.animate({"top":_this.position[1]*104-30},100,"linear");
		setTimeout(function(){
			_this.elem.animate({"top":_this.position[1]*104+10},100,"linear");
		},750);
	}
	this.background.wrapper.append(this.elem);
	
}








