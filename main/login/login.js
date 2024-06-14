const inputUserName2 = document.getElementById("input-username-2");
const inputPassword2 = document.getElementById("input-password-2");
const submitButton2 = document.getElementById("popup-submit-2");


submitButton2.addEventListener("click",function() {

    const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));

    const loginUser = regUsers.find((member) => {
        return member.username == inputUserName2.value && member.password == inputPassword2.value
    })

        if(loginUser) {
            localStorage.setItem("loginUser",JSON.stringify(loginUser))
            alert(`Log in done Succesfully,Hello ${loginUser.username}`)
        } 
            else {
                alert("Not correct login or Password");
            }

    })