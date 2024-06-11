function onLoad() {
    const users = JSON.parse(localStorage.getItem("registeredUsers"))
    if(users.length !== 0 ) {
        document.querySelector(".navigation-logup").style.display = "none";
    }
}