// check if user already exists
let regUsers = JSON.parse(localStorage.getItem("regUsers"));
let totalUsers = countUsers();
function countUsers() {
    if (localStorage.getItem("userCount") == null) {
        localStorage.setItem("userCount", regUsers.length);
        return regUsers.length;
    }
    else {
        return Number(localStorage.getItem("userCount"));
    }
}

function userExist(checkedUser) {
    for(let i = 0; i < totalUsers(); i++) { 
        if (regUsers[i].usernam === checkedUser) {
            //user exists
            return true;
        }
    }
    return false;
    //return (localStorage.getItem("regUser", user) === null) ? true : false;
}

// "encrypt" the passwd
function encrPasswd(base) {
    let encoded = "";
    for(let i = base.length; i >= 0; i--) {
        let c = base.charCodeAt(i);
        if (c % 2 == 0) 
            c += 128;
        else 
            c *= 3;
        encoded += String.fromCharCode(c);
    }
    console.log(encoded);
    return encoded;
}
// total users registered


