const inputUserName2 = document.getElementById("input-username-2");
const inputPassword2 = document.getElementById("input-password-2");
const submitButton2 = document.getElementById("popup-submit-2");


submitButton2.addEventListener("click",function() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            let loginUser = regUsers.filter((member) => {

                if(member.username == inputUserName2.value && member.password == inputPassword2.value) {
                    return true
                } else {
                    return false
                }

            })

            if(loginUser.length !== 0) {
                localStorage.setItem("loginUser",JSON.stringify(loginUser))
                resolve(`Log in done Succesfully,Hello ${loginUser[0].username}`)
            } else {
                reject("Not correct login or Password");
            }

        },1000)
    })

    .then(function(result) {
        alert(result)
    }).catch(error => alert(error))
})