window.addEventListener("load", function(e) {
    let checkLoggedUser = localStorage.getItem("userInfo");
    if(checkLoggedUser === null) {
        //localStorage.setItem("queso", "cheese");
        window.location.replace("./login.html");
        //localStorage.setItem("queso", "burger");
    }
    else {
        loggedUser = JSON.parse(checkLoggedUser);
        localStorage.setItem("queso", "macca");
        placeAccountBtn();
       // e.preventDefault();
    }
   
}, true);

let loggedUser = {};
const accManageLink = document.getElementById("accManageBtn");

function endSession() {
    localStorage.removeItem("userInfo");
    window.location.replace("./login.html");
}

