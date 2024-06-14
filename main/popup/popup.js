const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputDate = document.getElementById("input-date");
const submitButton = document.getElementById("popup-submit");

if(localStorage.getItem("registeredUsers") === null) {
    localStorage.setItem("registeredUsers", JSON.stringify([])); 
}

let users = JSON.parse(localStorage.getItem("registeredUsers"));

submitButton.addEventListener("click", function() {
    return new Promise(function(resolve,reject) {
        const usernameRegexp = /^\w+$/;
        const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setTimeout(function() {
            if(passwordRegexp.test(inputPassword.value) && usernameRegexp.test(inputUserName.value) ) {
                resolve(users.push({
                    username: inputUserName.value,
                    password: inputPassword.value,
                    date: inputDate.value,
                    registered: true,
                    language: "eng",
                    tickets: {
                        interstellar: [],
                        dunePartTwo: [],
                        captainMiller: [],
                        theBeekeeper: [],
                        suriyasKanguva: []
                    }
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


// const regusers = JSON.parse(localStorage.getItem("registeredUsers"));

// if(inputUserName.value == regusers.username && inputPassword.value !== regusers.password ){
//     alert("invalid password")
// }
// console.log(regusers)
