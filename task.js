// Задание
// Джон поручил Сэму реализовать автоматическое распознавание солдат Ланнистеров на видео. Идея автоматизировать дозор крепости казалась ему привлекательной. В процессе работы Сэму понадобилось написать функцию, которая определяет, Ланнистер ли перед ним или нет. Немного подумав, Сэм выделил следующие правила определения Ланнистера:
// Если у солдата доспехи красного цвета И нет щита

// ИЛИ

// если у солдата есть щит с изображением льва

// то это Ланнистер.

// Напишите функцию isLannisterSoldier(), которая принимает на вход два аргумента:

// Цвет доспехов (строка). Если доспехи красные, то строка red.
// null если щита нет. Строка lion, если щит есть, и на нём изображен лев.
// Функция возвращает true, если распознан Ланнистер, и false если не распознан.

// Solution 1

// function isLannisterSoldier(color, lion) {
//   if (color === "red" && lion === null) {
//     console.log(true);
//   } else if (lion === "lion") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isLannisterSoldier("red", "lion"); // true
// isLannisterSoldier("blue", null); // false

// Solution 2

function isLannisterSoldier(color, lion) {
  if (color === "red" && lion === null) {
    return true;
  } else if (lion === "lion") {
    return true;
  } else {
    return false;
  }
}

// Примеры вызова:
console.log(isLannisterSoldier("red", "lion")); // true
console.log(isLannisterSoldier("blue", null)); // false
