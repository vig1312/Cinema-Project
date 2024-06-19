const logOutbtn = document.getElementById("log-out");
const logUp = document.querySelector(".navigation-logup");
const logIn = document.querySelector(".navigation-login");
const logOut =  document.querySelector(".navigation-logout")
const topFilms = document.querySelector(".top-5-films")
const user = JSON.parse(localStorage.getItem("loginUser")) 


function onLoad() {

    if((user !== null)) {
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
    const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    const regUserIndex = regUsers.findIndex((member) => 
        member.username == user.username && member.password == user.password
    )
    regUsers[regUserIndex] = user

    localStorage.setItem("registeredUsers",JSON.stringify(regUsers))
    localStorage.removeItem("loginUser")
})


// Creating top 5 films list 

function filmList(film) {
    const container = document.createElement("div");

    container.innerHTML = `
        <a href="" class="films-href">
            <img src="${film.img}" class="faw-pic">
            <p>${film.name}</p>
        </a>
    `

    return container
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
    container.classList.add("popular-img")

    const top5FilmsData = [
        {
            id:1,
            name: "Dune: Part Two",
            href: "DunePartTwo",
            img: "top5/img 1.jpg",
            
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
        {
            id:4,
            name: "Suriya's Kanguva",
            href: "movies/SuiriyasKanguva",
            img: "top5/img 4.jpg",
            
        },
        {
            id:5,
            name: "Interstellar",
            href: "movies/Interstellar",
            img: "top5/img 5.jpg",
            
        }
    ]

    container.appendChild(filmBox(top5FilmsData))

    return container;
}

topFilms.appendChild(top5Films())