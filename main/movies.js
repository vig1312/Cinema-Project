const pageLocation = window.location.hash.split("#").slice(1);
const filmName = pageLocation[0];
const urlLanguage = pageLocation[1];
const currYear = document.getElementById("year-value");    
const currCountry = document.getElementById("country-value");
const currGenre = document.getElementById("genre-value");   
const currDirector = document.getElementById("director-value")
const currProducer = document.getElementById("producer-value")
const currWriter = document.getElementById("writer-value");  
const currPic = document.getElementById("film-img");
const currDescription = document.getElementById("film-desc-value");
const tableYear = document.getElementById("year");
const tableCountry = document.getElementById("country");
const tableGenre = document.getElementById("genre");
const tableDirector = document.getElementById("director");
const tableProducer = document.getElementById("producer");
const tableWriter = document.getElementById("writer");
const descHeader = document.getElementById("description");
const nav = document.getElementById("nav");
const currIframe = document.getElementById("iframe");
const booking = document.getElementById("booking")
const loggedUserData = JSON.parse(localStorage.getItem("loginUser"))
const reservedTickets = JSON.parse(localStorage.getItem("reservedTickets"))

loggedUserData !== null ? document.querySelector(".navigation-logup").style.display = "none" : document.querySelector(".navigation-logup").style.display = "flex"
const tableProperty = [
    {
        lan: "rus",
        yearTable: "Год :",
        countryTable: "Страна :",
        genreTable: "Жанр :",
        directorTable: "Директор :",
        producerTable: "Продюсер :",
        writerTable: "Сценарий :",
        descriptionTable: "описание"
    },
    {
        lan: "eng",
        yearTable: "Year :",
        countryTable: "Country :",
        genreTable: "Genre :",
        directorTable: "Director :",
        producerTable: "Producer :",
        writerTable: "Writer :",
        descriptionTable: "description"
    }
]

const language = [
    {
        lang: "rus",
        main: "Меню",
        topFilms: "Лучшие Фильмы",
        advacedFilms: "Продвинутые Фильмы",
        more: "Более...",
        
    },
    {
        lang: "eng",
        main: "Main",
        topFilms: "Top Films",
        advacedFilms: "Advaced Films",
        more: "More..."
    }

]

const currObj = language.find(item => item.lang === urlLanguage);
const container = document.createElement("div");
container.classList.add("navigation-lists");

container.innerHTML = `
    <ul>
        <li><a href="#" onclick="history.back()">${currObj.main}</a></li>
        <li><a href="#">${currObj.topFilms}</a></li>
        <li><a href="#">${currObj.advacedFilms}</a></li>
        <li><a href="#">${currObj.more}</a></li>
    </ul>

`
nav.appendChild(container);

const moviesData = [
    {   
        id:1,
        language: "eng",
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
        id:1,
        language: "eng",
        name: "DunePartTwo",
        language: "rus",
        img: "top5/img 1.jpg",
        description: "«Дю́на: Часть втора́я» (англ. Dune: Part Two) — эпический научно-фантастический фильм 2024 года, снятый по мотивам романа Фрэнка Герберта «Дюна». Продолжение фильма «Дюна» (2021) и часть медиафраншизы с тем же названием. Режиссёром фильма выступил Дени Вильнёв, а сценарий в соавторстве с ним написал Джон Спэйтс. Главные роли сыграли Тимоти Шаламе, Зендея, Ребекка Фергюсон, Хавьер Бардем, Джош Бролин, Дейв Батиста, Стеллан Скарсгард.",
        year: "2024",
        director: "Дени Вильнёв",
        producer: "Патрик МакКормик",
        writer: "Дени Вильнёв",
        trailerURL: "https://www.youtube.com/embed/Way9Dexny3w?si=b1Y0RAIHJcdBjlIT",
        country : "США",
        genre: "фантастика"
        
    },
    {
        id:2,
        name: "Interstellar",
        language: "eng",
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
        id:2,
        name: "Interstellar",
        language: "rus",
        img: "top5/img 5.jpg",
        description: "«Интерсте́ллар» (англ. Interstellar — «Межзвёздный»[5][6]) — научно-фантастический фильм 2014 года, поставленный Кристофером Ноланом по собственному сценарию. Главные роли исполнили Мэттью Макконахи, Энн Хэтэуэй, Джессика Честейн, Билл Ирвин, Эллен Бёрстин, Майкл Кейн и Мэтт Деймон. Действие кинокартины разворачивается в недалёком будущем, где людям на всей планете угрожают катастрофические изменения климата и массовый голод, и рассказывает о группе астронавтов, которые отправляются в космос в поисках нового дома для человечества.",
        year: "2014",
        director: "Кристофер Нолан",
        producer: "Эмма Томас",
        writer: "Джонатан Нолан",
        trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E?si=aK_Lwig1G8jDKMq_",
        country: "США",
        genre: "драма"

    },
    {
        id:3,
        name: "theBeekeeper",
        language: "eng",
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
        id:3,
        name: "theBeekeeper",
        language: "rus",
        img: "top5/img 3.jpg",
        description: "«Пчеловод» (англ. The Beekeeper) — американский боевик-триллер. Фильм режиссёра Дэвида Эйера. Главные роли исполнили Джейсон Стэйтем, Джереми Айронс и Джош Хатчерсон. В США фильм вышел 12 января 2024 года.Учительница на пенсии Элоиз Паркер становится жертвой фишинг-атаки и лишается, помимо личных сбережений, ещё и 2 млн $ пенсионного фонда, за который отвечала. Не выдержав ответственности, она кончает жизнь самоубийством. Её сосед, отставной военный Адам Клей, оказывается бывшим сотрудником сверхсекретной службы, члены которой именуют себя «пчеловодами» и «ульем». Организация стоит над правительством и обеспечивает порядок и справедливость режима в стране. Подключив старые связи, Адам выходит на мошенников.",
        year: "2024",
        director: "Дэвид Эйер",
        producer: "Джейсон Стэтхэм",
        writer: "Курт Уиммер",
        trailerURL: "https://www.youtube.com/embed/CHKn-yDCE2w?si=W0fObRklGrab1Kel",
        country: "США",
        genre: "триллер"
        
    },
    {
        id:4,
        name: "SuriyasKanguva",
        language: "eng",
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
        id:4,
        name: "SuriyasKanguva",
        language: "rus",
        img: "top5/img 4.jpg",
        description: "В августе того же года фильм был повторно анонсирован под предварительным названием «Сурья 42», поскольку он стал 42-м фильмом Сурьи в главной роли. Основные съемки начались в том же месяце в Ченнаи и завершились в январе 2024 года. Съемки проводились в различных местах, включая Гоа, Кералу, Кодайканал и Раджамандри. Название «Кангува» было объявлено в апреле 2023 года. В техническую команду входят Деви Шри Прасад, Ветри Паланисами и Нишад Юсуф в качестве композитора, оператора и редактора соответственно. «Кангува», снятый с бюджетом около 300–350 крор фунтов стерлингов, является одним из самых дорогих индийских фильмов на сегодняшний день.",
        year: "2024",
        director: " Сива Кумар",
        producer: "К.Е. Гнанавел",
        writer: "Ади Нарьяна",
        trailerURL: "https://www.youtube.com/embed/oBlxdr1KbEA?si=NRzx7IIjVg8W-T_m",
        country: "Индия",
        genre: "фэнтези"
        
    },
    {
        id:5,
        name: "CaptainMiller",
        language: "eng",
        img: "top5/img 2.jpg",
        description: "The film was reannounced in August that year with the tentative title Suriya 42 as it became Suriya's 42nd film in a leading role. Principal photography commenced that month in Chennai and ended in January 2024. It was filmed in various locations including Goa, Kerala, Kodaikanal and Rajahmundry. The title Kanguva was announced in April 2023. The technical crew includes Devi Sri Prasad, Vetri Palanisamy and Nishadh Yusuf, as music composer, cinematographer and editor, respectively. Made on a budget of around ₹300–350 crore, Kanguva is one of the most expensive Indian films to date",
        year: "2024",
        director: "Arun Matheswaran",
        producer: "Sendhil Thyagarajan",
        writer: "Arun Matheswaran",
        trailerURL: "https://www.youtube.com/embed/ujhWbKP1rKA?si=SXDa0xkFnbCp5S",
        country: "India",
        genre: "action,adventure"
        
    },
    {
        id:5,
        name: "CaptainMiller",
        language: "rus",
        img: "top5/img 2.jpg",
        description: "В августе того же года фильм был повторно анонсирован под предварительным названием «Сурья 42», поскольку он стал 42-м фильмом Сурьи в главной роли. Основные съемки начались в том же месяце в Ченнаи и завершились в январе 2024 года. Съемки проводились в различных местах, включая Гоа, Кералу, Кодайканал и Раджамандри. Название «Кангува» было объявлено в апреле 2023 года. В техническую команду входят Деви Шри Прасад, Ветри Паланисами и Нишад Юсуф в качестве композитора, оператора и редактора соответственно. «Кангува», снятый с бюджетом около 300–350 крор фунтов стерлингов, является одним из самых дорогих индийских фильмов на сегодняшний день.",
        year: "2024",
        director: "Арунраджа Камарадж",
        producer: "Шрейяс Кришна",
        writer: "Arun Matheswaran",
        trailerURL: "https://www.youtube.com/embed/ujhWbKP1rKA?si=SXDa0xkFnbCp5S",
        country: "Индия",
        genre: " драма, приключения"
        
    },

]


const currentFilm = moviesData.find(el => el.name === filmName && el.language === urlLanguage);
const currentLanguageTable = tableProperty.find(el => el.lan === urlLanguage);

const {name, img, description, year, director, producer, writer, trailerURL, country, genre} = currentFilm
const {yearTable, countryTable, directorTable, producerTable, writerTable, genreTable, descriptionTable} = currentLanguageTable;

document.body.style.backgroundImage = `url("${img}")`;
tableYear.innerHTML = yearTable;
tableCountry.innerHTML = countryTable;
tableDirector.innerHTML = directorTable;
tableGenre.innerHTML = genreTable;
tableWriter.innerHTML = writerTable;
tableProducer.innerHTML = producerTable;
descHeader.innerHTML = descriptionTable;
currCountry.innerHTML = country;
currGenre.innerHTML = genre;
currDirector.innerHTML = director;
currProducer.innerHTML = producer;
currWriter.innerHTML = writer;
currYear.innerHTML = year;
currPic.src = img;
currDescription.innerHTML = description;
currIframe.src = trailerURL;

if(loggedUserData !== null) {

    if(loggedUserData !== null) {

            Array.from({length: 50}).map((val,i) => {
                console.log(reservedTickets[filmName])

                const container = document.createElement("div");
                container.classList.add("boxes")
                container.innerHTML = i;

                if(reservedTickets[filmName].hasOwnProperty(i)) {
                    container.style.backgroundColor = "red"
                }


                container.addEventListener("click",function() {
                    const approve = confirm(`You want to buy ${i}'s ticket?`) 

                    if((reservedTickets[filmName].hasOwnProperty(i))) {
                        alert(`ticket is already bougth by ${reservedTickets[filmName][i]}`)
                    }

                    else if(approve) {

                        container.style.backgroundColor = "red"

                        Object.defineProperty(reservedTickets[filmName],`${i}`,  {
                            value: `${loggedUserData.username}`,
                            enumerable:true,
                            configurable:true,
                            writable:true,
                        })
                        

                    } else  {
                        alert("Canceled")
                    }

                    localStorage.setItem("reservedTickets",JSON.stringify(reservedTickets))
                    
                })

                booking.appendChild(container)
            })
        }

} else {
    const message = document.createElement("a");
    message.innerHTML = "Log in to buy a tickets"
    message.href = "login/login.html"

    booking.appendChild(message)
}
