var Class = function (methods) {
    var clss = function () {
        this.initialize.apply(this, arguments);
    };

    for (var property in methods) {
        clss.prototype[property] = methods[property];
    }

    if (!clss.prototype.initialize)
        clss.prototype.initialize = function () {};

    return clss;
};

var Item = Class({
    initialize: function (name) {
        this.iconSize = 64;
        this.inventoryX = 0;
        this.inventoryY = 0;
        this.name = name;
        //this.object = null;
        this.object = document.createElement("img");
        this.object.setAttribute("src", "test.png");
        this.object.setAttribute("class", "position:absolute;");
        this.setDroppable(this.object);
        document.getElementById('island').appendChild(this.object);
    },
    toString: function () {
        return "My name is " + this.name + ".";
    },
    setDroppable: function (elemID) {
        console.log(elemID);
        $(elemID).draggable({
            start: function (event, ui) {
                console.log("dragging" + elemID);
                //TODO: Event for returning item back in case bad handling
                //ui.draggable.draggable('option','revert',true); event which returns old possition
                $("#inventory").droppable({
                    accept: elemID,
                    tolerance: "touch",
                    drop: function (event, ui) {
                        console.log("dropped");
                        var g = getElementCoords(elemID);
                        var inv = getElementCoords(document.getElementById("inventory"));
                        firstOccurrence = false;
                        //ui.draggable.draggable('option','revert',true); event which returns old possition
                        for (i = 1; i <= Math.floor(inventoryX / iconSize) + 1; i++) {
                            for (j = 1; j <= Math.floor(inventoryY / iconSize) + 1; j++) {
                                if (!firstOccurrence) {
                                    if ((g[0] + iconSize / 2 <= i * iconSize + inv[0]) && (g[1] + iconSize / 2 <= j * iconSize + inv[1])) {
                                        firstOccurrence = true;
                                        k = (Math.floor(inventoryX / iconSize) + 1) * (j - 1) + (i - 1);
                                        inventoryArray[k] = elemID;
                                        elemID.style.position = "absolute";
                                        elemID.style.left = (inv[0] + (i - 1) * iconSize) + "px";
                                        elemID.style.top = (inv[1] + (j - 1) * iconSize) + "px";
                                        console.log(inventoryArray);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });
    }
});