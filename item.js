function item(name) {

    this.setAttri

    this.init = function () {
        this.name = name;
        new item();
    }

    this.getName = function () {
        console.log(this.name);
        return this.name;
    }
    this.setDroppable = function () {
        g = document.createElement("img");
        g.setAttribute("src", "test.png");
        g.setAttribute("class", "position:absolute;");
        setDroppableToInv(g);
        document.getElementById('island').appendChild(g);
    }
    
    this.init();
}
