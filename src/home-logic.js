document.getElementsByTagName("body").addEventListener("load", function(e) {
    //check if logged in & redirect
    
    
    let logInCred = localStorage.getItem("userInfo");
    if(logInCred === null) {
        localStorage.setItem("queso", "cheese");
        window.location.replace("./login.html");
        localStorage.setItem("queso", "burger");
    }
    else {
        localStorage.setItem("queso", "macca");
        fillProjectsGrid();
        e.preventDefault();
    }
   
}, true);

const projects = document.getElementById("project-container");

function fillProjectsGrid(){
    projectsInfo.forEach(item => {
        projects.innerHTML += '<div class="project-item"> <h5>' + item.name + '</h5><img src="' + item.image + '" alt="' +item.name + '"></img></div>';
       
    });
}

function endSession() {
    localStorage.removeItem("userInfo");
    window.location.replace("./login.html");
}