window.addEventListener("load", function(e) {
    //check if logged in & redirect
    totalUsers = countUsers();
    fillProjectsGrid();
    let logInCred = localStorage.getItem("userInfo");
    /*if(logInCred === null) {
        window.location.replace("./login.html");
    }
    */
}, false);

const projects = document.getElementById("project-container");

function fillProjectsGrid(){
    projectsInfo.forEach(item => {
        projects.innerHTML += '<div class="project-item"> <h6>' + item.name + '</h6><img src="' + item.image + '"></img></div>';
    });
}