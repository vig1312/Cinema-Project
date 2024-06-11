const captainMiller = {
    year: 2024,
    country: "India",
    genre: "Militants",
    producer: "Arun Mathesvaran",
    writer: "Arun Mathesvaran",
    director: "Arun Matesvaran" 
}
    
document.getElementById("year").innerHTML = captainMiller.year;
document.getElementById("country").innerHTML = captainMiller.country;
document.getElementById("genre").innerHTML = captainMiller.genre;
document.getElementById("director").innerHTML = captainMiller.director;
document.getElementById("producer").innerHTML = captainMiller.producer;
document.getElementById("writer").innerHTML = captainMiller.writer;

let members = JSON.parse(localStorage.getItem("registeredUsers"))
const booking = document.querySelector(".booking");

if(members === null) {
    alert("Register for first")
    throw new Error("Register for First")
} else {
    members[0].tickets.captainMiller = [...members[0].tickets.captainMiller]
}

for (let i = 1; i <= 50; i++) {
    const container = document.createElement("div");
    if((members[0].tickets.captainMiller.includes(i)) ) {
        container.style.backgroundColor = "red"
    }
    container.classList.add("boxes");
    container.innerHTML = `${i}`
    container.addEventListener("click", function(){
        let approve = confirm(`Do you want to buy ${i} ticket?`)

        if (approve && !(members[0].tickets.captainMiller.includes(i))){
            container.style.backgroundColor = "red";
            members[0].tickets.captainMiller.push(i)
            localStorage.setItem("registeredUsers",JSON.stringify(members))
            console.log(members)
            
        }
    
    })
    booking.appendChild(container)
}