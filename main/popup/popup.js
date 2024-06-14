const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputDate = document.getElementById("input-date");
const submitButton = document.getElementById("popup-submit");

const users = "registeredUsers" in localStorage ? JSON.parse(localStorage.getItem("registeredUsers")) : [];

// const users = JSON.parse(localStorage.getItem("registeredUsers"));

submitButton.addEventListener("click",function() {

    const usernameRegexp = /^\w+$/;
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;    

        if(passwordRegexp.test(inputPassword.value) && usernameRegexp.test(inputUserName.value)) {
            alert("registration done succesfully")
            users.push({
                username: inputUserName.value,
                password: inputPassword.value,
                date: inputDate.value,
                registered: true,
                theme: "ligth",
                tickets: {
                    interstellar: [],
                    dunePartTwo: [],
                    captainMiller: [],
                    theBeekeeper: [],
                    suriyasKanguva: []
                }
            })
            localStorage.setItem("registeredUsers",JSON.stringify(users))
        }
        
        else {
            alert("invalid Registration");
        }
    })

