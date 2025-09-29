let newUser = document.getElementById("newUser");
let newPasswd = document.getElementById("newPasswd");
let newPasswdRpt = document.getElementById("newPasswdRpt");
let message = document.getElementById("msg");
let submitBtn = document.getElementById("regSubmit");

//checker for checking
let isUserChecked = false;
let isPasswdChecked = false;

submitBtn.addEventListener("click", verifyNewRegister);

function verifyNewRegister() {
    if(!userExist(newUser.value) || !isUserChecked){
        message.textContent = "EL usuario ya existe o es inválido";
        
    }
    //user doesnt exist & is OK
    else if (isUserChecked && isPasswdChecked) {
        //total users adds a key value to know if it exists
        //localStorage.setItem("regUser" + totalUsers, newUser.value);
        //localStorage.setItem("regPasswd" + totalUsers, encrPasswd(newPasswd.value));
        let temp = { "username": newUser.value, "passwd": encrPasswd(newPasswd.value)};
        totalUsers = regUsers.push(temp)
                
        localStorage.setItem("regUsers", JSON.stringify(regUsers));
        countUsers();
        message.textContent("El usuario fue registrado con éxito. Bienvenido al Imperio.")
        console.log("si");
        
    }
}


// Verify fields
newUser.addEventListener("input", (event) => {
    //const regExpUser = /\b\w{6,12}\b/g; <= que
    message.hidden = false;
    if(event.target.value.length < 6 || event.target.value. length > 12) {
        message.textContent = "El usuario debe de tener entre 6 y 12 caracteres";
        //console.log(encrPasswd(event.target.value)); small test
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
    const regExPasswd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "i");
    if(!regExPasswd.test(event.target.value)) {
        message.textContent = "La contraseña debe de incluir al menos una mayúscula, un número y al menos 6 caracteres";
        console.log(event.target.value);
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



