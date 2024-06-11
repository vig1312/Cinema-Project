let interstellar = {
    year: 2014,
    country: "USA",
    genre: "fantasy",
    producer: "Emma Thomas",
    writer: "Jonathan Nolan",
    director: "Christopher Nolan" 
}
    
document.getElementById("year").innerHTML = interstellar.year;
document.getElementById("country").innerHTML = interstellar.country;
document.getElementById("genre").innerHTML = interstellar.genre;
document.getElementById("director").innerHTML = interstellar.director;
document.getElementById("producer").innerHTML = interstellar.producer;
document.getElementById("writer").innerHTML = interstellar.writer;

let members = JSON.parse(localStorage.getItem("registeredUsers"))
const booking = document.querySelector(".booking");

if(members === null) {
    alert("Register for first")
    throw new Error("Register for First")
} else {
    members[0].tickets.interstellar = [...members[0].tickets.interstellar]
}

for (let i = 1; i <= 50; i++) {
    const container = document.createElement("div");
    if((members[0].tickets.interstellar.includes(i)) ) {
        container.style.backgroundColor = "red"
    }
    container.classList.add("boxes");
    container.innerHTML = `${i}`
    container.addEventListener("click", function(){
        let approve = confirm(`Do you want to buy ${i} ticket?`)

        if (approve && !(members[0].tickets.interstellar.includes(i))){
            container.style.backgroundColor = "red";
            members[0].tickets.interstellar.push(i)
            localStorage.setItem("registeredUsers",JSON.stringify(members))
            console.log(members)
            
        }
    
    })
    booking.appendChild(container)
}

