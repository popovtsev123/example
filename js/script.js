"use strict";
const numberOfFilms = +prompt("Сколько фильмов ты глянул?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let index = 0;
while (index <= 1) {
    let question = prompt("Последний фильм?","");
    let goal = +prompt("Оценка?", "");
    personalMovieDB.movies[question] = goal;
    index++;
    }

console.log(personalMovieDB);
