const logOut = document.getElementById("log-out")
const users = JSON.parse(localStorage.getItem("loginUser"));
const raw = localStorage.getItem("registeredUsers")
const person = JSON.parse(raw)
function onLoad() {
   
    
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



const changeRus = document.getElementById("russian");

changeRus.addEventListener("click", function(){
    person[0].language = "rus";
    document.getElementById("main").innerText = rus.header.navigationList.main;
    document.getElementById("topFilms").innerHTML = rus.header.navigationList.topFilms;
    document.getElementById("log-up").innerHTML = rus.header.navigationList.logUp;
    
})
