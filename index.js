function redirec(value) {
    open(value,"_self")
}

function redic() {
    let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
    <link rel="stylesheet" href="passport gen/index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fill in</title>
</head>
<body>
    <h1 id="document.getElementById("header")">Fill Up This form</h1>
    <div id="container">
    <label id="tag">Name: <input type="text" id="name" class="textfield" placeholder="Input exact Discord username"></label> <br> <br>
    <label id="tag">Nationality: <input type="text" id="nation" class="textfield"></label> <br> <br>
    <label id="tag">Age: <input type="text" id="age" class="textfield"></label> <br> <br>
    <label id="tag">Gender: <input type="text" id="gender" class="textfield"></label> <br> <br>
    <label id="tag">Pfp Description <input type="text" id="pfp" class="textfield"></label> <br> <br>
    <label id="tag">Date: <input type="text" id="date" class="textfield"></label> <br> <br>
    <label id="tag">Rank: <input type="text" id="rank" class="textfield"></label> <br> <br>
    <label id="tag">Sector: <input type="text" id="sector" class="textfield"></label> <br> <br>
    <label id="tag">Authorized By: <input type="text" id="auth" value="N/A" readonly class="textfield"></label>
    </div>
    <br>
    <button id="login" onclick="sendReq()">Send Request</button>
</body>
</html>`
}

function sendReq() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let nation = document.getElementById("nation").value
    let pfp = document.getElementById("pfp").value
    let date = document.getElementById("date").value
    let rank = document.getElementById("rank").value
    let sector = document.getElementById("sector").value

    let webhook = "https://discord.com/api/webhooks/1256889710345977958/SwduEfGz0qa1g2-tpL_Jfsa9IhB_baVusTJDYimbfbOAQncMgNi4oR1Hd-uwJMG6t6rQ"
    const contents = `**${name}** has Requested for a Passport\nDate: **${date}**\nAge: **${age}**\nNation: **${nation}**\nGender: **${gender}**\nPfp Desc: **${pfp}**\nRank: **${rank}**\nSector: **${sector}**\n`
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params))

    let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks</title>
</head>
<body>
    
<h1 class="checkmark">&check;</h1>
<h1 class="header">Thanks!</h1>

</body>
</html>`
}