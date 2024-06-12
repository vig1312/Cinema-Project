const captainMiller = {
    year: 2024,
    country: "India",
    genre: "Militants",
    producer: "Arun Mathesvaran",
    writer: "Arun Mathesvaran",
    director: "Arun Matesvaran" 
}

const {year, country, genre, producer, writer, director} = captainMiller

document.getElementById("year").innerHTML = year;
document.getElementById("country").innerHTML = country;
document.getElementById("genre").innerHTML = genre;
document.getElementById("director").innerHTML = director;
document.getElementById("producer").innerHTML = producer;
document.getElementById("writer").innerHTML = writer;

// checking if person is registered or not

 function onLoad() {
    const users =  JSON.parse(localStorage.getItem("registeredUsers"))

    if(users.length !== 0 ) {
        document.querySelector(".navigation-logup").style.display =  "none";
    }
}

//creating the tickets container 

const members = JSON.parse(localStorage.getItem("registeredUsers"))
const booking = document.querySelector(".booking");

if(members === null) {
    alert("Register for first")
    throw new Error("Register for First")
} else {
    members[0].tickets.captainMiller = [...members[0].tickets.captainMiller]
}

for (let i = 1; i <= 50; i++) {
    const container = document.createElement("div");
    
    if((members[0].tickets.captainMiller.includes(i))) {
        container.style.backgroundColor = "red"
    }
    
    container.classList.add("boxes");
    container.innerHTML = `${i}`
    container.addEventListener("click", function(){
        const approve = confirm(`Do you want to buy ${i} ticket?`)

        if (approve && !(members[0].tickets.captainMiller.includes(i))) {
            container.style.backgroundColor = "red";
            members[0].tickets.captainMiller.push(i)
            localStorage.setItem("registeredUsers",JSON.stringify(members))
        }
    
    })
    booking.appendChild(container)
}