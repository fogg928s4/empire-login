const userField = document.getElementById("user");
const passwdField = document.getElementById("passwd");
let msgL = document.getElementById("msgL"); //message in Login

let checkUsers = [];
// checks if user & passwd match
// if match returns the position, otherwise -1
function verifyLogin() { 
    regUsers = JSON.parse(localStorage.getItem("regUsers"));
    checkUsers = regUsers.filter((a) => {
        return (a.username === userField.value) && (a.passwd === encrPasswd(passwdField.value));
    });
    return checkUsers.length === 0;
     
}

function displayMessage(event) {
    
    let loggedUser = {};    
    if(!verifyLogin()) {
        loggedUser = checkUsers[0];
        localStorage.setItem("userInfo", JSON.stringify(loggedUser));
        window.location.assign("./home.html");  // redirect to home
    }
    else {
        msgL.hidden = false;
        msgL.textContent = "Contraseña o usuario incorrecto";
    }
}

// load in a test user*/
window.addEventListener("load", function(e) {
    let temp = localStorage.getItem("regUsers")
    if(temp === null) {
        let inititalUsers = [
            { "username": "krennic", "passwd": encrPasswd("Hola123")},
            { "username": "dooku8", "passwd": encrPasswd("Geonosis22")}
        ];
        localStorage.setItem("regUsers", JSON.stringify(inititalUsers));
    }
    else {
        regUsers = JSON.parse(temp);
        totalUsers = regUsers.length;
        localStorage.setItem("userCount", totalUsers);
    }
    
     if(localStorage.getItem("userInfo") !== null)
        window.location.replace("./home.html");
});