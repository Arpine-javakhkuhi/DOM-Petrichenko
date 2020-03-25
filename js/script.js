//Восстановить порядок в меню, добавить пятый пункт

let menu = document.querySelector('.menu');
let liTags = document.querySelectorAll('.menu-item');
let li2 = liTags[1].textContent;
let li3 = liTags[2].textContent;
liTags[1].textContent = li3;
liTags[2].textContent = li2;
let li = document.createElement('li');
li.classList.add('menu-item');
menu.appendChild(li).textContent = 'Five';
console.log(liTags);

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

//Поменять заголовок, добавить слово "подлинную"
let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";

//Удалить рекламу со страницы
let column = document.getElementsByClassName('column');
console.log(column[1]);
let adv = document.getElementsByClassName('adv');
console.log(adv);
column[1].removeChild(adv[0]);


//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let promptQuestion = document.getElementById('prompt');
let answer = prompt('Oтношение к технике apple', '');
promptQuestion.textContent = answer;