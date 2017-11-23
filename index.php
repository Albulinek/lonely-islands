<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="main.css" />
        <script src="https://code.jquery.com/jquery-3.0.0.js"></script>
        <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="item.js"></script>	
        <script type="text/javascript" src="main.js"></script>	

    </head>
    <body>
        <?php
        include_once "./core/db.php";
        ?>
        <div id="header">
            <button onclick="changePage('island')">Island</button>
            <button onclick="changePage('changelog')">Changelog</button>
        </div>
        <div id="island" style="display:initial">
            <?php
            include_once "./index_page/island.php";
            ?> 
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