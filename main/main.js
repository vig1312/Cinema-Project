function onLoad() {
    const users = JSON.parse(localStorage.getItem("registeredUsers"))

    if(users.length) {
        document.querySelector(".logup").style.display = "none";
    }
}