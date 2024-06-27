const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputDate = document.getElementById("input-date");
const submitButton = document.getElementById("popup-submit");

const users = "registeredUsers" in localStorage ? JSON.parse(localStorage.getItem("registeredUsers")) : [];


submitButton.addEventListener("click",function() {

    const usernameRegexp = /^\w+$/;
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;    

        if(passwordRegexp.test(inputPassword.value) && usernameRegexp.test(inputUserName.value)) {
            alert("registration done succesfully")
            users.push({
                username: inputUserName.value,
                password: inputPassword.value,
                date: inputDate.value,
                isRegistered: true,
                theme: "ligth",
                language: "eng",
                tickets: {

                }
            })

            localStorage.setItem("registeredUsers",JSON.stringify(users))
            document.location.href = "../login/login.html"

        }
        
        else {
            alert("invalid Registration");
            
        }
    })

