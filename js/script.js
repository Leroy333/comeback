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


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
let i = 0;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};
const start = (count) =>{
   
    if(count<10){
        let gg = console.log("Просмотрено мало фильмов");
    }
    else if(count>=10 && count<30){
        let gg = console.log("Вы - классический зритель");
    }
    else if(count>=30){
        let gg = console.log("Вы - киноман");
    }
};

const view = (db,j) => {
    while(i<j){
    
        let nameFilms = prompt("Один из последних просмотренных фильмов?");
        let value = +prompt("На сколько оцените его?");
        if(nameFilms.length>50 || nameFilms === ""){
            let gg = alert("Неверные данные");
            i--;
        }
        else{
            db.movies[nameFilms] = value; 
        }
        i++;
        
        
    }
};


const showMyDB = (locked)=> {
    if(locked){
        console.log(personalMovieDB);
    }
    else{
        console.log("Данные засекречены");
    }
};

const writeYourGenres = (db,genres) =>{
    for(let i = 1; i<=3; i++){
        let bb = prompt(`Ваш любимый жанр под номером ${i}`);
        db.genres[i-1] = bb;
    }
};
start(numberOfFilms);
view(personalMovieDB,2);
showMyDB(personalMovieDB.privat);
writeYourGenres(personalMovieDB, personalMovieDB.genres);


