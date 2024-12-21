function update() {
    let username = document.getElementById("username").value
    document.getElementById("header").innerHTML = `USSR Welcomes ${username}`
    setTimeout(update1, 1000)
}

function update1() {
    let username = document.getElementById("username").value
    document.getElementById("header").innerHTML = `USSR Welcomes ${username}|`
    setTimeout(update, 500)
}



let otp = Math.floor(Math.random() * 10000000)

function sendOTP() {
    let webhook = "https://discord.com/api/webhooks/1258051727001784423/-1_PbtxYV1MVmaUbNou8zax5vujpRf0VLIn4gSn3T-CHB_L09PpD2b8RQgEp2m8jglx0"

    const contents = `Someone is Trying to Login,\n Here's an OTP: **${otp}**`
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params))
    document.getElementById("send").innerHTML = "Sended"
    document.getElementById("send").style.opacity = "50%"
    document.getElementById("send").onclick = nothere()
}

function nothere() {
    console.log("null")
}

function login() {
    let username = document.getElementById("username").value
    let otptoreg = document.getElementById("otptoreg").value
    let password = btoa(document.getElementById("password").value)

    let webhook1 = "https://discord.com/api/webhooks/1258052141277253772/yjvp1iWO3L_ZbyH4M_OKBBEXEP59-D0Jdaxj3Mi5gPzb581MdCQNyGbJRNCXeNXNXGb9"

    if(username == "Justa" && password == "TGFibGFja3NoZWVwODcw" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
    <link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`
return
    }
    if(username == "Student" && password == "c3R1ZGVudDEyMw==" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`
return


    
    }
    if(username == "Nevi" && password == "TmV2aUJldnk5NzA3" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`
return


    
    }
    if(username == "Bishal" && password == "TWF6YTg4OTA=" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`

return


    
    }
    if(username == "mazafachek" && password == "a29uc3RhbnRpbm92MTItLQ==" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`

return

    
    }
    if(username == "Frank Ocean" && password == "ZW5kbGVzc29jZWFuNjk2OQ==" && otptoreg == otp) {
        const contents = `**${username}** Logged in!`
        const request = new XMLHttpRequest();
        request.open("POST", webhook1);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            content: contents
        }
        request.send(JSON.stringify(params))
        let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USSR | Dashboard</title>
</head>
<body>
    
    <br>
    <br>
    <br>
<h1 id="document.getElementById("header")">Welcome to the Dashboard ${username}</h1> 

<div id="container">
    <button class="btn" onclick="redirect('${username}')">Create Passport</button>
</div>

<br>

<img src="coa.png" width="15%" alt="">

</body>
</html>`

return

    
    }
    else{
        alert("An Error Occured Check if your USERNAME, PASSWORD and OTP are correct")
        console.error("Error, Contact Nevi");
    }
    
    
}

function redirect(username) {
    let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en" id="meta">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fill in</title>
</head>
<body>
    <h1 id="document.getElementById("header")">Fill Up This form</h1>
    <div id="container">
    <label id="tag">Name: <input type="text" id="name" class="textfield"></label> <br> <br>
    <label id="tag">Nationality: <input type="text" id="nation" class="textfield"></label> <br> <br>
    <label id="tag">Age: <input type="text" id="age" class="textfield"></label> <br> <br>
    <label id="tag">Gender: <input type="text" id="gender" class="textfield"></label> <br> <br>
    <label id="tag">Pfp Description <input type="text" id="pfp" class="textfield"></label> <br> <br>
    <label id="tag">Date: <input type="text" id="date" class="textfield"></label> <br> <br>
    <label id="tag">Rank: <input type="text" id="rank" class="textfield"></label> <br> <br>
    <label id="tag">Sector: <input type="text" id="sector" class="textfield"></label> <br> <br>
    <label id="tag">Authorized By: <input type="text" id="auth" value="${username}" readonly class="textfield"></label>
    </div>
    <br>
    <button id="login" onclick="gen('${username}')">Generate</button>
</body>
</html>`
}

function gen(username) {

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let nation = document.getElementById("nation").value
    let pfp = document.getElementById("pfp").value
    let date = document.getElementById("date").value
    let rank = document.getElementById("rank").value
    let sector = document.getElementById("sector").value

    let page = document.getElementById("meta").innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" type="image/x-icon" href="star.png">
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passport For ${name}</title>
</head>
<body>
    
<div class="disc">
    <h1 class="ccp">CCCP</h1>
    <img src="coa.png" width="50%" alt="">
    <h1 class="ccp">Passport</h1>
</div>

<br>

<div class="discW">
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1 class="ccpw">CCP</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>

<br>

<div class="discW">
    <img src="coa.png" width="50%" alt="">
    <h1 class="ccpw">Passport</h1>
    <input type="text" class="textfield1" readonly value="${name}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${age}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${nation}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${gender}"> 
</div>

<br>

<div class="discW">
    <input type="text" class="textfield1" readonly value="${pfp}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${date}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${rank}"> <br> <br>
    <input type="text" class="textfield1" readonly value="${sector}"> <br> <br>
    <input type="text" class="textfield1" readonly value="Auth by: ${username}"> <br> <br>
    <img src="coa.png" width="50%" alt="">
</div>

</body>
</html>`


let gen1 = "https://discord.com/api/webhooks/1258052571969486919/YiQRbeR5p4W-sRaF9z8mF6WK67u_FhDb-6wOZ_CoazIrHQWgFQ-JKM9k76-kCsI4l3tD"
const contents = `A New Passport Was Generated\nName: **${name}**\nAge: **${age}**\nNation: **${nation}**\nGender: **${gender}**\nPfp Desc: **${pfp}**\nRank: **${rank}**\nSector: **${sector}**\nAuth/Gen By: **${username}**\n`
const request = new XMLHttpRequest();
request.open("POST", gen1);
request.setRequestHeader('Content-type', 'application/json');
const params = {
    content: contents
}
request.send(JSON.stringify(params))

}