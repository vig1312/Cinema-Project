const logOutbtn = document.getElementById("log-out");
const logUp = document.querySelector(".navigation-logup");
const logIn = document.querySelector(".navigation-login");
const logOut =  document.querySelector(".navigation-logout")

const users = JSON.parse(localStorage.getItem("loginUser"))

function onLoad() {

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



const changeRus = document.getElementById("russian");

changeRus.addEventListener("click", function(){
    localStorage.setItem(JSON.stringify("loginuser", users.language = "rus"));
    document.getElementById("main").innerText = rus.header.navigationList.main;
    document.getElementById("topFilms").innerHTML = rus.header.navigationList.topFilms;
    document.getElementById("log-out").innerHTML = rus.header.navigationList.logOut;
    
})

function filmList(film) {
    const container = document.createElement("div");

    container.innerHTML = `
        <a>
            <img src="${film.img}">
            <p>${film.name}</p>
        </a>
    `

    // document.querySelector("img").classList.add("")

    // return container
}

function filmBox(films) {
    const container = document.createElement("div");
    container.classList.add("pics")

    films.map((film) => {
        return filmList(film)
    }).forEach((el) => {
        container.appendChild(el)
    })

    return container;
}

function top5Films() {
    const container = document.createElement("div")

    const top5FilmsData = [
        {
            id:1,
            name: "Interstellar",
            href: "movies/interstellar",
            img: "top5/img 5.jpg",
            
        },
        {
            id:2,
            name: "Captain Miller",
            href: "movies/CaptainMiller",
            img: "top5/img 2.jpg",
            
        },
        {
            id:3,
            name: "The Beekeeper",
            href: "movies/theBeekeeper",
            img: "top5/img 3.jpg",
            
        },
    ]

    container.appendChild(filmBox(top5FilmsData));

    return container;
}

top5Films.appendChild(top5Films())