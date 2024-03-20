"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/
console.log("");
console.log("Задание 5:");
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

function convertToObj(en, ru) {
  if (en.length != ru.length ||
    en.length == 0 ||
    en.length == 0) {
    return null;
  }
  let obj = {};
  en.forEach((k, i) => { obj[k] = ru[i] })
  return obj;
}
console.log(convertToObj(en, ru))
