
function onLoad() {
    let users = JSON.parse(localStorage.getItem("registeredUsers"))
    console.log(users.length)
    if(users.length !== 0 ) {
        document.querySelector(".navigation-logup").style.display = "none";
    }
}