let userField = document.getElementById("user");
let passwdField = document.getElementById("passwd");
let msgL = document.getElementById("msgL"); //message in Login

// checks if user & passwd match
// if match returns the position, otherwise -1
function verifyLogin() { 
    for(let i = 0; i < countUsers(); i++) { 
        if (localStorage.getItem("regUser" + i) == userField.value) {
           return (localStorage.getItem("regPasswd" + position) == encrPasswd(passwdField.value)) ? i :-1;
        }
    }
    return -1;
}

let loggedUser = "";
function displayMessage() {
    
    if(verifyLogin() != -1) {
        loggedUser = new UserInfo(userField.value, verifyLogin());
        localStorage.setItem("userInfo", loggedUser);
        window.location.replace("./home.html");  // redirect to home
    }
    else {
        msgL.hidden = false;
        msgL.textContent = "Wrong password or username";

    }
}
let testingUser = new UserInfo(0, "krennic");
// load in a test user
window.addEventListener("load", function(e) {
	localStorage.setItem("regUser0", testingUser.username);
	localStorage.setItem("regPasswd0", encrPasswd("Hola123"));
});