let boardUrl = "http://localhost:5000/board";
var board = [[], [], [], [], [], [], [], []]; //could potentially eliminate

function click_play()
{
    chat = document.getElementById("chat")
    chat.value += "Please select difficulty.\n";
}

function set_magnus()
{
    chat = document.getElementById("chat")
    chat.style.fontFamily = "Courier";
    chat.style.fontWeight = "900";
    chat.value = "\nFish: Now we're talkin'.\n";
    chat.value += "Game has started.\n";
    chat.style.color = "red";
    init();
}

function init()
{
    var x = 0;
    var y = 0;
    for (var i = 0; i < 8; i++)
    {
        for (var j = 0; j < 8; j++)
        {
            var pos = String.fromCharCode(i + 97).concat(String(8 - j));
            const newDiv = document.createElement("div".concat(pos));
            newDiv.style.position = "relative";
            /*
            newDiv.style.left = x + "px";
            newDiv.style.top = y + "px";
            */

            const newImg = document.createElement("img")
            newImg.setAttribute("id", "img".concat(pos));
            newImg.setAttribute("id", "img".concat(pos));
            newDiv.appendChild(newImg);

            const newBtn = document.createElement("button")
            newBtn.setAttribute("id", "btn".concat(pos));
            newDiv.appendChild(newBtn);

            const currentDiv = document.getElementById("board");
            currentDiv.appendChild(newDiv);
            board[i][j] = newDiv;
            x += 64;
        }
        y += 64;
    }
    console.log(board);

    for (var i = 0; i < 8; i++)
    {
        for (var j = 0; j < 8; j++)
        {
            var pos = String.fromCharCode(i + 97).concat(String(8 - j));
            img = document.getElementById("img".concat(pos));
            img.src = "textures/bKnight.png";
        }
    }
    
    //post_board();
}

async function get_board()
{
    const response = await fetch(boardUrl, {method: "GET", credentials: "same-origin"});
    const data = await response.json();
    return data
}

async function post_board()
{
    var ref = {"None": "textures/None.png", "bBishop": "textures/bBishop.png", "bKing": "textures/bKing.png", "bKnight": "textures/bKnight.png", "bPawn": "textures/bPawn.png", "bQueen": "textures/bQueen.png", "bRook": "textures/bRook.png", "wBishop": "textures/wBishop.png", "wKing": "textures/wKing.png", "wKnight": "textures/wKnight.png", "wPawn": "textures/wPawn.png", "wQueen": "textures/wQueen.png", "wRook": "textures/wRook.png", }
    const data = await get_board();
    for (let tile in data)
    {
        console.log(tile[0], tile[2], ref[data[tile]]);
    }
}

function move(pos)
{
    console.log("move request from");
    console.log(pos);
    // link w python
}

function disable_all_buttons()
{
    buttons = document.getElementById("buttons");
    for (var i = 0; i < buttons.childNodes.length; i++)
    {
        buttons.childNodes[i].disabled = true;
    }
    buttons.style.display = "none";
}

function show_button()
{
    console.log('blah');
}

function get_board_old()
{
    fetch(boardUrl).then(res => res.json()).then(
        data =>
        {
            document.getElementById("display").innerHTML = data["0,0"];
            holder = data
            for (let tile in data)
            {
                console.log(data[tile]);
            }
        }
    )
}

function set_easy()
{
    document.getElementById("chat").style.fontFamily = "Comic Sans MS, Comic Sans, Cursive";
    document.getElementById("chat").value = "Fish: u scared bro?\n";
    document.getElementById("chat").value += "Game was not started.\n\n";
    document.getElementById("buttonL1").disabled = true;
    document.getElementById("buttonL1").style.color = "red";
}

function set_mid()
{
    document.getElementById("chat").style.fontFamily = "Comic Sans MS, Comic Sans, Cursive";
    document.getElementById("chat").value += "Fish: fight me fr\n";
    document.getElementById("chat").value += "Game was not started.\n\n";
    document.getElementById("buttonL2").disabled = true;
    document.getElementById("buttonL2").style.color = "red";
}