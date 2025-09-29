let userField = document.getElementById("user");
let passwdField = document.getElementById("passwd");
let msgL = document.getElementById("msgL"); //message in Login

// checks if user & passwd match
// if match returns the position, otherwise -1
function verifyLogin() { 
    regUsers = JSON.parse(localStorage.getItem("regUsers"));
    totalUsers= countUsers();
    for(let i = 0; i < totalUsers; i++) { 
        if ((regUsers[i].username === userField.value) && (regUsers[i].passwd === encrPasswd(passwdField.value))) {
            //user exists, return index
            return i;
        }
    }
    return -1;
}

let loggedUser = "";
function displayMessage() {
    let i = verifyLogin();
    if(i != -1) {
        loggedUser = regUsers[i];
        localStorage.setItem("userInfo", JSON.stringify(loggedUser));
        window.location.assign("./home.html");  // redirect to home
    }
    else {
        msgL.hidden = false;
        msgL.textContent = "Wrong password or username";
    }
}
/*let testingUser = new UserInfo(0, "krennic");
// load in a test user*/
window.addEventListener("load", function(e) {
    let inititalUsers = [
        { "username": "krennic", "passwd": encrPasswd("Hola123")},
        { "username": "dooku8", "passwd": encrPasswd("Geonosis22")}
    ];
    localStorage.setItem("regUsers", JSON.stringify(inititalUsers));
    if(localStorage.getItem("userInfo") !== null)
        window.location.replace("./home.html");
});


