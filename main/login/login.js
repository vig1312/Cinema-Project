const inputUserName2 = document.getElementById("input-username-2");
const inputPassword2 = document.getElementById("input-password-2");
const submitButton2 = document.getElementById("popup-submit-2");

const films = [
    {   
        id:1,
        name: "DunePartTwo",
        img: "top5/img 1.jpg",
        description: "Paul cannot forgive himself for the death of his loved ones and seeks ways to take revenge on his attackers. The Fremen do not welcome the young man very warmly, but he manages to earn respect with his skills and valor. Visions appear in which the enemies win, and all the newly-made allies lose. The protagonist understands that it is necessary to unite all the tribes that are nearby and act as a single army. This is the only way to win, no one will follow the newcomer, but Chani supports him, a romantic relationship arises between the couple. Paul sees a version of the future in which he remains alone and loses his beloved, so he is very worried and does not want to allow this. The negotiations were successful, it remains to attack Shaddam and defeat his army, cruelly avenging the criminal, but he is prepared for the fight.",
        year: "2024",
        director: "Deny Vilnov",
        producer: "Mary Parent",
        writer: "Denis Vilenueve",
        trailerURL: "https://www.youtube.com/embed/Way9Dexny3w?si=b1Y0RAIHJcdBjlIT",
        country : "USA",
        genre: "Science"
        
    },
    {
        id:2,
        name: "Interstellar",
        img: "top5/img 5.jpg",
        description: "Interstellar is a 2014 epic science fiction drama film directed by Christopher Nolan, who co-wrote it with his brother Jonathan.It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, and Matt Damon. Set in a dystopianfuture where Earth is suffering from catastrophic blight and famine,the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.The screenplay had its origins in a script Jonathan developed in 2007, and was originally set to be directed by Steven Spielberg.Theoretical physicist Kip Thorne was an executive producer and scientific consultant on the film, and wrote the tie-in book The Scienceof Interstellar.Cinematographer Hoyte van Hoytema shot it on 35 mm movie film in the Panavision anamorphic format and IMAX 70 mm. Filming began inlate 2013 and took place in Alberta,Klaustur, and Los Angeles. Interstellar uses extensive practical and miniature effects,and the company DNEG created additional digital effects.",
        year: "2014",
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        writer: "Jonathan Nolan",
        trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E?si=aK_Lwig1G8jDKMq_",
        country: "USA",
        genre: "Mility"
        
    },
    {
        id:3,
        name: "theBeekeeper",
        img: "top5/img 3.jpg",
        description: "An action-packed thriller about a mysterious avenger who wants to find and destroy his offenders. He doesn't care about the people around him at all, because Mr. Glue only pursues his own interests. And he is ready to do anything to make his enemies answer for their crimes as they deserve. The hero's life changes dramatically when dangerous people learn about his past. It turns out that the man was once...",
        year: "2024",
        director: "	David Ayer",
        producer: "Bill Block,Jason Statham",
        writer: "Kurt Wimmer",
        trailerURL: "https://www.youtube.com/embed/CHKn-yDCE2w?si=W0fObRklGrab1Kel",
        country: "USA",
        genre: "thriller"
        
    },
    {
        id:4,
        name: "SuiriyasKanguva",
        img: "top5/img 4.jpg",
        description: "The film was reannounced in August that year with the tentative title Suriya 42 as it became Suriya's 42nd film in a leading role. Principal photography commenced that month in Chennai and ended in January 2024. It was filmed in various locations including Goa, Kerala, Kodaikanal and Rajahmundry. The title Kanguva was announced in April 2023. The technical crew includes Devi Sri Prasad, Vetri Palanisamy and Nishadh Yusuf, as music composer, cinematographer and editor, respectively. Made on a budget of around ₹300–350 crore, Kanguva is one of the most expensive Indian films to date",
        year: "2024",
        director: " Siva",
        producer: "	K. E. Gnanavel Raja",
        writer: "Adi Narayana",
        trailerURL: "https://www.youtube.com/embed/oBlxdr1KbEA?si=NRzx7IIjVg8W-T_m",
        country: "India",
        genre: "fantasy"
        
    },
    {
        id:5,
        name: "CaptainMiller",
        img: "top5/img 2.jpg",
        description: "The film was reannounced in August that year with the tentative title Suriya 42 as it became Suriya's 42nd film in a leading role. Principal photography commenced that month in Chennai and ended in January 2024. It was filmed in various locations including Goa, Kerala, Kodaikanal and Rajahmundry. The title Kanguva was announced in April 2023. The technical crew includes Devi Sri Prasad, Vetri Palanisamy and Nishadh Yusuf, as music composer, cinematographer and editor, respectively. Made on a budget of around ₹300–350 crore, Kanguva is one of the most expensive Indian films to date",
        year: "2024",
        director: "Arun Matheswaran",
        producer: "Sendhil Thyagarajan",
        writer: "Arun Matheswaran",
        trailerURL: "https://www.youtube.com/embed/ujhWbKP1rKA?si=SXDa0xkFnbCp5S",
        country: "India",
        genre: "action,adventure"
        
    }
]


submitButton2.addEventListener("click",function() {

    const regUsers = JSON.parse(localStorage.getItem("registeredUsers"));

    const loginUser = regUsers.find((member) => {
        return member.username == inputUserName2.value && member.password == inputPassword2.value
    })

        if(loginUser) {
            // creating all the exist films array in logged user object

            if(Object.keys(loginUser.tickets).length === 0) {
  
                    films.forEach(film => Object.defineProperty(loginUser.tickets,`${film.name}`, {

                        value: [],
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }  
                )
              ) 
            } 

            localStorage.setItem("loginUser",JSON.stringify(loginUser))
            
            alert(`Log in done Succesfully,Hello ${loginUser.username}`)

            // redirect to new locationz

             document.location.href = "../main.html"

            
        } 
        else {
            alert("Not correct login or Password");
        }

    })