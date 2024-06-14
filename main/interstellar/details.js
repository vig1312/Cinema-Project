const interstellar = {
    year: 2014,
    country: "USA",
    genre: "fantasy",
    producer: "Emma Thomas",
    writer: "Jonathan Nolan",
    director: "Christopher Nolan" 
}

const {year, country, genre, producer, writer, director} = interstellar;
    
document.getElementById("year").innerHTML = year;
document.getElementById("country").innerHTML = country;
document.getElementById("genre").innerHTML = genre;
document.getElementById("director").innerHTML = director;
document.getElementById("producer").innerHTML = producer;
document.getElementById("writer").innerHTML = writer;

function onLoad() {
    const users =  JSON.parse(localStorage.getItem("loginUser"))

    if(users.length !== 0 ) {
        document.querySelector(".navigation-logup").style.display =  "none";
    }
}

const members = JSON.parse(localStorage.getItem("loginUser"))
const booking = document.querySelector(".booking");

if(members === null) {
    alert("Register for first")
    throw new Error("Register for First")
} else {
    members.tickets.interstellar = [...members.tickets.interstellar]
}

for (let i = 1; i <= 50; i++) {
    const container = document.createElement("div");

    if((members.tickets.interstellar.includes(i)) ) {
        container.style.backgroundColor = "red"
    }

    container.classList.add("boxes");
    container.innerHTML = `${i}`
    container.addEventListener("click", function(){
        
        const approve = confirm(`Do you want to buy ${i} ticket?`)

        if (approve && !(members.tickets.interstellar.includes(i))){

            container.style.backgroundColor = "red";
            members.tickets.interstellar.push(i)
            localStorage.setItem("loginUser",JSON.stringify(members))
        }
    
    })
    booking.appendChild(container)
}

