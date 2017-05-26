var cookies = 0;
var HP = 100;
var hunger = 0;
var alive = true;
var iconSize = 64;
var inventoryX = 0;
var inventoryY = 0;
var inventoryArray = null;
var myConsole = null;


function cookieClick(number) {
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
}
;

var cursors = 0;

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));     //works out the cost of this cursor
    if (cookies >= cursorCost) {                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    }
    ;
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user

    showHidden(document.getElementById('upgrades'));
    move();
}
;

function showHidden(element) {
    element.style.visibility = 'visible';
}

function startGame() {
    window.setInterval(function () {
        cookieClick(cursors);
        autoRaiseHunger(20);
        isAlive();
        changeInElem("alive", alive);
        appendText(rollDice(6));
    }, 1000);
}

function isAlive() {
    if (HP <= 0) {
        alive = false;
    } else {
        alive = true;
    }
}

$(document).ready(function () {
    myConsole = document.getElementById("console");
    //INIT: Inventory
    var canvas = $("#inventory");
    inventoryX = canvas.width();
    inventoryY = canvas.height();
    createInventory(inventoryX, inventoryY);
    createInventoryArray(inventoryX, inventoryY);
    console.log(getElementCoords(document.getElementById("progressBar_HP")));
    //INIT: Game
    startGame();
});


function getElementCoords(elem) {
    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();
    return [elemRect.left - bodyRect.left, elemRect.top - bodyRect.top];
}


function appendText(text) {
    var total = ((myConsole.value ? myConsole.value + "\n" : "") + (text)).split("\n");
    if (total.length > 10)
        total = total.slice(total.length - 10);
    myConsole.value = total.join("\n");
    $(myConsole).scrollTop($(myConsole)[0].scrollHeight);
}

function createInventoryArray(x, y) {
    lenght = (Math.floor(x / iconSize) + 1) * (Math.floor(y / iconSize) + 1);
    console.log(lenght);
    inventoryArray = new Array(lenght);
    inventoryArray.fill(null);
    console.log(inventoryArray);
}


function createInventory(x, y) {
    var c = document.getElementById('inventory').getContext("2d");
    if (x / iconSize > 1) {
        for (i = 1; i <= Math.floor(x / iconSize) + 1; i++) {
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(i * iconSize + 0.5, 0);
            c.lineTo(i * iconSize + 0.5, y);
            c.stroke();
        }
    }
    if (y / iconSize > 1) {
        for (i = 1; i <= Math.floor(y / iconSize) + 1; i++) {
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(0, i * iconSize + 0.5);
            c.lineTo(x, i * iconSize + 0.5);
            c.stroke();
        }
    }
}

$(function () {

});

function setDroppableToInv(elemID) {
    $(elemID).draggable({});
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
                            console.log(inventoryArray);
                        }
                    }
                }
            }

            console.log(g);
        }
    });
    $(elemID).droppable({
        greedy: true,
        tolerance: 'touch'

    }
    );
}


function catchFood() {
    roll = rollDice(2);
    appendText("ROLL");
    g = document.createElement("img");
    g.setAttribute("src", "test.png");
    g.setAttribute("class", "position:absolute;");
    setDroppableToInv(g);
    console.log(g);
    document.body.appendChild(g);

}



function autoRaiseHunger(number) {
    if (hunger <= 100) {
        hunger = hunger + number;
        if (hunger > 100) {
            hunger = 100;
            changeHP(-20);
        }
    }
    raiseHungerBar();
}

function rollDice(faces) {
    return Math.floor((Math.random() * faces) + 1);
}

function changeHP(number) {
    if (HP > 0) {
        HP = HP + number;
        if (HP < 0) {
            HP = 0;
        }
    }
    raiseHPBar();
}

function changeInElem(elemID, variable) {
    var elem = document.getElementById(elemID);
    elem.innerHTML = variable;
}

function raiseHungerBar() {
    var elem = document.getElementById("progressBar_Hunger");
    elem.style.width = hunger + '%';
    elem.innerHTML = hunger * 1 + '%';
}

function raiseHPBar() {
    var elem = document.getElementById("progressBar_HP");
    elem.style.width = HP + '%';
    elem.innerHTML = HP * 1 + '%';
} 