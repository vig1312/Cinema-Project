const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputDate = document.getElementById("input-date");
const submitButton = document.getElementById("popup-submit");

let users = [];

submitButton.addEventListener("click",function() {
    return new Promise(function(resolve,reject) {
        const usernameregexp = /^\w+$/;
        const passwordregexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setTimeout(function() {
            if(passwordregexp.test(inputPassword.value) && usernameregexp.test(inputUserName.value) ) {
                resolve(users.push({
                    username: inputUserName.value,
                    password: inputPassword.value,
                    date: inputDate.value,
                    registered: true
                }))
            } else {
                reject("invalid Registration")
            }
        },1000)
    })

    .then(function(result) {
        localStorage.setItem("registeredUsers",JSON.stringify(users))
        alert("Registration done succesfully")
    }).catch(error => alert(error))
})

