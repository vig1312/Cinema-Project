const logOutbtn = document.getElementById("log-out");
const logUp = document.querySelector(".navigation-logup");
const logIn = document.querySelector(".navigation-login");
const logOut =  document.querySelector(".navigation-logout")

function onLoad() {
    const users = JSON.parse(localStorage.getItem("loginUser"))
    
    if((users !== null)) {
        logUp.style.display = "none";
        logIn.style.display = "none";
        logOut.style.display = "flex";
    } else {
        logUp.style.display = "flex";
        logIn.style.display = "flex";
        logOut.style.display = "none";
    }
}

logOutbtn.addEventListener("click",function() {
    localStorage.removeItem("loginUser")
})