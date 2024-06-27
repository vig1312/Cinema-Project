const logOutbtn = document.getElementById("log-out");
const logUp = document.querySelector(".navigation-logup");
const logIn = document.querySelector(".navigation-login");
const logOut =  document.querySelector(".navigation-logout")
const topFilms = document.querySelector(".top-5-films")
const user = JSON.parse(localStorage.getItem("loginUser")) 
const regUsers = JSON.parse(localStorage.getItem("registeredUsers"))
const darkMode = document.getElementById("darkMode");
const nav = document.getElementById("nav-list");
const searchParams = new URLSearchParams(window.location.search);

//searchParams.set("lan", "rus");
//window.location.search = searchParams.toString();
const language = [
    {
        lang: "rus",
        main: "Меню",
        topFilms: "Лучшие Фильмы",
        advacedFilms: "Продвинутые Фильмы",
        more: "Более...",
        logOut: "Выйти"
    },
    {
        lang: "eng",
        main: "Main",
        topFilms: "Top Films",
        advacedFilms: "Advaced Films",
        more: "More..."
    }
];

const pageLan = searchParams.get("lan");
const currObj = language.find(item => item.lang === pageLan);
const container = document.createElement("div");
container.classList.add("navigation-lists");
container.innerHTML = `
    <ul>
        <li><a href="#">${currObj.main}</a></li>
        <li><a href="#">${currObj.topFilms}</a></li>
        <li><a href="#">${currObj.advacedFilms}</a></li>
        <li><a href="#">${currObj.more}</a></li>
    </ul>

`
nav.appendChild(container);

const btnRus = document.getElementById("rus");
btnRus.addEventListener("click", function() {
    
    searchParams.set("lan", "rus");
    window.location.search = searchParams.toString();
    
   
    
})

const btnEng = document.getElementById("eng");
btnEng.addEventListener("click", function() {
    searchParams.set("lan", "eng");
    window.location.search = searchParams.toString();
})


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
    localStorage.removeItem("loginUser")
})

function filmList(film) {
    return`
        <a href="movies.html#${film.href}#${pageLan}" class="films-href" film-data-id="${film.id}">
            <img src="${film.img}" class="faw-pic">
            <p>${film.name}</p>
        </a>
    `
}

function filmBox(films) {
    const container = document.createElement("div");
    container.classList.add("pics");

    films.forEach((film) => {
        container.innerHTML += filmList(film)
    })

    return container;
}

function top5Films() {
    const container = document.createElement("div");
    container.classList.add("popular-img");

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
            href: "CaptainMiller",
            img: "top5/img 2.jpg",
            
        },
        {
            id:3,
            name: "The Beekeeper",
            href: "theBeekeeper",
            img: "top5/img 3.jpg",
            
        },
        {
            id:4,
            name: "Suriya's Kanguva",
            href: "SuriyasKanguva",
            img: "top5/img 4.jpg",
            
        },
        {
            id:5,
            name: "Interstellar",
            href: "Interstellar",
            img: "top5/img 5.jpg",
            
        }
    ]

    container.appendChild(filmBox(top5FilmsData))

    return container;
}

topFilms.appendChild(top5Films())

darkMode.addEventListener("click", function() {
    const element = document.body;
    element.classList.toggle("dark-mode");
})