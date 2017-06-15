function item(name){
	this.name = name;
	this.getName = function(){
		console.log(this.name);
		return this.name;
	}	
}
