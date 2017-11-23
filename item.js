var Class = function(methods) {   
    var clss = function() {    
        this.initialize.apply(this, arguments);          
    };  
    
    for (var property in methods) { 
       clss.prototype[property] = methods[property];
    }
          
    if (!clss.prototype.initialize) clss.prototype.initialize = function(){};      
    
    return clss;    
};

var Item = Class({ 
    initialize: function(name) {
        this.name = name;
        this.object  = null;
    },
    toString: function() {
        return "My name is "+this.name+".";
    },
    setDroppable: function () {
        this.object = document.createElement("img");
        this.object.setAttribute("src", "test.png");
        this.object.setAttribute("class", "position:absolute;");
        setDroppableToInv(this.object);
        document.getElementById('island').appendChild(this.object);
    }
}); 