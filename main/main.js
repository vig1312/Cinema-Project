const logOut = document.getElementById("log-out")

function onLoad() {
    const users = JSON.parse(localStorage.getItem("loginUser"))
    
    if((users !== null) && users.length) {
        document.querySelector(".navigation-logup").style.display = "flex";
        document.querySelector(".navigation-login").style.display = "none";
        document.querySelector(".navigation-logout").style.display = "flex";
    } 

    if(users === null) {
        document.querySelector(".navigation-logup").style.display = "flex";
        document.querySelector(".navigation-login").style.display = "flex";
        document.querySelector(".navigation-logout").style.display = "none";
    }
}


logOut.addEventListener("click",function() {
    localStorage.removeItem("loginUser")
})