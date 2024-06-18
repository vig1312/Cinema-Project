const moviesData = {
    interstellar: "interstellar",
    dune: "Dune: Part Two"
}




const searchParams = new URLSearchParams(window.location.search);
const filmName = searchParams.get('name');
console.log(filmName);
console.log(window.location.search);