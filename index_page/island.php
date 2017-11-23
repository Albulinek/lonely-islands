
<div id="progressBar_wrapper">
    <div id="progressBar_HP">100%</div>
</div>
<div id="progressBar_wrapper">
    <div id="progressBar_Hunger">0%</div>
</div>
Alive: <span id="alive">true</span>
<br />
<button onclick="cookieClick(1)">Click Me!</button>
<button onclick="catchFood(1)">Catch food!</button>
<br />
Cookies: <span id="cookies">0</span>
<br />
<button onclick="buyCursor()">Buy Cursor</button>
<br />
Cursors: <span id="cursors">0</span>
<br />
Cursor Cost: <span id="cursorCost">10</span>
<br>
Upgrades: 
<span id="upgrades" style="visibility:hidden">
    <ul>
        <li>Prdel
        <li>Prdel 2
    </ul>
</span>
<br />
<canvas id="inventory" height=257 width=257></canvas><br />
x:<div class="x"></div> y:<div class="y"></div>
<div class="divTable">
    <div class="divTableBody">
        <div class="divTableRow">
            <div class="divTableCell"><img src="test.png" id="testDrop" style="z-index:9999; position:relative;"></img></div>
            <div class="divTableCell">&nbsp;</div>
            <div class="divTableCell">&nbsp;</div>
        </div>
        <div class="divTableRow">
            <div class="divTableCell">&nbsp;</div>
            <div class="divTableCell">&nbsp;</div>
            <div class="divTableCell">&nbsp;</div>
        </div>
        <div class="divTableRow">
            <div class="divTableCell">&nbsp;</div>
            <div class="divTableCell">&nbsp;</div>
            <div class="divTableCell">&nbsp;</div>
        </div>
    </div>
</div>
<textarea readonly id="console">START:&#013;&#010;------&#013;&#010;</textarea>

