<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="main.css" />
        <script src="https://code.jquery.com/jquery-3.0.0.js"></script>
        <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="item.js?n=0.0.1"></script>	
        <script type="text/javascript" src="main.js?n=0.0.1"></script>	

    </head>
    <body>
        <div id="header">
            <button onclick="changePage('island')">Island</button>
            <button onclick="changePage('changelog')">Changelog</button>
        </div>
        <div id="island" style="display:initial">
            <?php
            include_once "core/db.php";
            ?>
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
            <canvas id="inventory" height=250 width=250></canvas><br />
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
        </div>
        <div id="changelog" style="display:none">TEST
            <p>
            <h3>Version 0.0.1</h3>
            <ul>
                <li>Inventory algorithm with alignment and invenory matrix storage
                <li>Item DB with loot source and drop chance, description, etc.
                <li>Assigned N pictures to items (kneel before mighty Orik)
                <li>Mode to switch page on one html/php page
                <li>HP/Hunger Bar
                <li>Game event log
                <li>Status check
                <li>And lot of more...
            </ul>
            <p>
        </div>
    </body>
</html>