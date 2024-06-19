const filmName = window.location.hash.slice(1);
const currYear = document.getElementById("year");    
const currCountry = document.getElementById("country");
const currGenre = document.getElementById("genre");   
const currDirector = document.getElementById("director")
const currProducer = document.getElementById("producer")
const currWriter = document.getElementById("writer");  
const currPic = document.getElementById("film-img");
const currDescription = document.getElementById("film-desc");
const currIframe = document.getElementById("iframe");
   
const moviesData = [
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

]
    


// console.log(filmName);
// console.log(moviesData[1]);

// function currentFilm(arr, film) {
//     return arr.find(el => el.name === film)
// }
// console.log(currentFilm(moviesData, filmName));

const currentFilm = moviesData.find(el => el.name === filmName)


const {name, img, description, year, director, producer, writer, trailerURL, country, genre} = currentFilm

document.body.style.backgroundImage = `url("${img}")`
currCountry.innerHTML = country;
currGenre.innerHTML = genre;
currDirector.innerHTML = director;
currProducer.innerHTML = producer;
currWriter.innerHTML = writer;
currYear.innerHTML = year;
currPic.src = img;
currDescription.innerHTML = description;
currIframe.src = trailerURL;