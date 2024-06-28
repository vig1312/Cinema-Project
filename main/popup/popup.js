const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputDate = document.getElementById("input-date");
const submitButton = document.getElementById("popup-submit");
const message = document.getElementById("message") 
message.classList.add("err-message")

const users = "registeredUsers" in localStorage ? JSON.parse(localStorage.getItem("registeredUsers")) : [];


inputUserName.addEventListener("input",function() {
    const usernameRegexp = /^[0-9A-Za-z]{6,16}$/;

    try {
        if (!usernameRegexp.test(inputUserName.value)) {
            inputUserName.style.border = "1px solid red"
            throw new Error("Username must contain <br> UpperCase and LowerCase letters and numbers <br> min 6 characters")
        } else {
            inputUserName.style.border = "none"
            message.innerHTML = ""
        }
    } catch(err) {
        message.innerHTML = err
    }
})

inputPassword.addEventListener("input",function() { 
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    try {
        if (!passwordRegexp.test(inputPassword.value)) {
            inputPassword.style.border = "1px solid red"
            throw new Error("Password must contain Upercase LowerCase and Numbers,min 8 characters")
        } else {
            message.innerHTML = ""
            inputPassword.style.border = ""
        }
    } catch(err) {
        message.innerHTML = err
    }
})


submitButton.addEventListener("click",function() {

    try {

      const usernameRegexp = /^\w+$/;
      const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (passwordRegexp.test(inputPassword.value) && usernameRegexp.test(inputUserName.value)) {

            if (users.find(member => member.username === inputUserName.value) !== undefined) {
                throw Error(`${inputUserName.value} is already exist`)
            } 

              else {
                alert("registration done succesfully")

                users.push({
                    username: inputUserName.value,
                    password: inputPassword.value,
                    date: inputDate.value,
                    isRegistered: true,
                }) 

            }
            
            localStorage.setItem("registeredUsers",JSON.stringify(users))
            document.location.href = "../login/login.html"

            } 
        }
        
        catch (error) {
          message.innerHTML = error;

        }

     }
    )

