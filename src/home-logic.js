window.addEventListener("load", function(e) {
    //check if logged in & redirect
    
    
    let checkLoggedUser = localStorage.getItem("userInfo");
    if(checkLoggedUser === null) {
        //localStorage.setItem("queso", "cheese");
        window.location.replace("./login.html");
        //localStorage.setItem("queso", "burger");
    }
    else {
        loggedUser = JSON.parse(checkLoggedUser);
        localStorage.setItem("queso", "macca");
        fillProjectsGrid();
        placeAccountBtn();
       // e.preventDefault();
    }
   
}, true);

const projects = document.getElementById("project-container");
let loggedUser = {};
const accManageLink = document.getElementById("accManageBtn");


//https://pw-docs.ctdesarrollo-sdr.org/sysadmin/monitoreo/