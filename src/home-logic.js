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
        accManageBtn.textContent += loggedUser.username;
       // e.preventDefault();
    }
   
}, true);

const projects = document.getElementById("project-container");
const accManageBtn = document.getElementById("accManageBtn");
let loggedUser = {};

function fillProjectsGrid(){
    projectsInfo.forEach(item => {
        projects.innerHTML += '<div class="project-item"> <a href="' + item.link + '" target="_blank"> <h5>' + item.name + '</h5><img src="' + item.image + '" alt="' +item.name + '"></img></a></div>';       
    });
}

function endSession() {
    localStorage.removeItem("userInfo");
    window.location.replace("./login.html");
}

//https://pw-docs.ctdesarrollo-sdr.org/sysadmin/monitoreo/