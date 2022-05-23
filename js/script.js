'use strict';

let numberOfFilms ;

function start() {
    numberOfFilms = +prompt("Сколько посмотрел фильмов ?", "");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько посмотрел фильмов ?", "");
    }
}
start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних фильмов?", ""),
              b = prompt("На сколько оценишь?", "");
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        
        } else {
            i--;
        }
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function detectCinemaLevel () {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    } else {
    console.log("Ошибка");
    }
}
rememberMyFilms();

function showMyDB(hidden) {
    
    if (!hidden) {
         return personalMovieDB;
    }
}

showMyDB(personalMovieDB.private);

function writeUGenres () {
    for (let i = 1; i <= 3; i++) {
        let whatGenres = +prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = whatGenres;
    }
    console.log(personalMovieDB.genres);
}

writeUGenres();