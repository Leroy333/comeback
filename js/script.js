/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

if(numberOfFilms<10){
    let gg = alert("Просмотрено мало фильмов");
}
else if(numberOfFilms>=10 && numberOfFilms<30){
    let gg = alert("Вы - классический зритель");
}
else if(numberOfFilms>=30){
    let gg = alert("Вы - киноман");
}

let i = 0;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while(i<=1){
    
    let nameFilms = prompt("Один из последних просмотренных фильмов?");
    let value = +prompt("На сколько оцените его?");
    if(nameFilms.length>50 || nameFilms === ""){
        let gg = alert("Неверные данные");
        i--;
    }
    else{
        personalMovieDB.movies[nameFilms] = value; 
    }
    i++;
    
    
}

console.log(personalMovieDB);


