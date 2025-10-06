const regForm = document.getElementById("registerForm");
const [newUser, newPasswd, newPasswdRpt] = regForm;
let message = document.getElementById("msg");

// let newUser = document.getElementById("newUser");
// let newPasswd = document.getElementById("newPasswd");
// let newPasswdRpt = document.getElementById("newPasswdRpt");
// let submitBtn = document.getElementById("regSubmit");

//checker for checking
let isUserChecked = false;
let isPasswdChecked = false;

submitBtn.addEventListener("click", verifyNewRegister);

regForm.addEventListener("submit", verifyNewRegister, true);

function verifyNewRegister(event) {
    
    regUsers = JSON.parse(localStorage.getItem("regUsers"));

    if(!isUserChecked){
        message.textContent = "El usuario ya existe o es inválido";
        localStorage.setItem("si", "no");
    }
    //user doesnt exist & is OK
    else if (!isPasswdChecked) {
        message.textContent = "Las contraseñas no coinciden";
        localStorage.setItem("no", "si");
    }
    else {
        localStorage.setItem("tal", "vez");
        let temp = { "username": newUser.value, "passwd": encrPasswd(newPasswd.value)};
        totalUsers = regUsers.push(temp);
        localStorage.removeItem("regUsers");
        localStorage.setItem("regUsers", JSON.stringify(regUsers));

        totalUsers = regUsers.length;
        message.textContent = "El usuario fue registrado con éxito. Bienvenido al Imperio.";
    }
}


// Verify fields
newUser.addEventListener("input", (event) => {
    //const regExpUser = /\b\w{6,12}\b/g; <= que
    message.hidden = false;
    if(event.target.value.length < 6 || event.target.value.length > 12) {
        message.textContent = "El usuario debe de tener entre 6 y 12 caracteres";
        //console.log(encrPasswd(event.target.value)); small test
        isUserChecked = false;
    }
    else if (userExist(event.target.value)){
        message.textContent = "El usuario ya existe";
        isUserChecked = false;
    }
    else {
        message.textContent = "";
        isUserChecked = true;
    }
        
});

// verfiy password field
newPasswd.addEventListener("input", (event) => {
    //regex to include caps, & num
    message.hidden = false;
    const regExPasswd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "i");
    if(!regExPasswd.test(event.target.value)) {
        message.textContent = "La contraseña debe de incluir al menos una mayúscula, un número y al menos 6 caracteres";
        console.log(event.target.value);
        isPasswdChecked = false;
        isPasswdChecked = false;
    }  // test whatever is being fed
    else {
        console.log(event.target.value + ">:D"); // test thing
        message.textContent = "";
        isPasswdChecked = true;
    }
}, false);

newPasswdRpt.addEventListener("input", (event) => {
    console.log(newPasswd.value);
    if(event.target.value === newPasswd.value)  {
        message = "";
        isPasswdChecked = true;
    }
    else {
        message = "Las contraseñas deben de ser iguales";
        isPasswdChecked = false;
    }
});

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

