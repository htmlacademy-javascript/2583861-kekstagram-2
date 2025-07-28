// 1.Функция для проверки длины строки:

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

// 2.Функция для проверки, является ли строка палиндромом:

const isPalindrome = (string) => {
  const formattedString = string.replaceAll(' ', '').toUpperCase();
  let invertedString = '';
  for (let i = formattedString.length - 1; i >= 0; i--) {
    invertedString += formattedString[i];
  }
  return formattedString === invertedString;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// 3.Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа:

const getPositiveNumber = (string) => {
  string = string.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += isNaN(parseInt(string[i], 10)) ? '' : parseInt(string[i], 10);
  }
  return result === '' ? NaN : +result;
};

getPositiveNumber('2023 год');
getPositiveNumber('ECMAScript 2022');
getPositiveNumber('1 кефир, 0.5 батона');
getPositiveNumber('агент 007');
getPositiveNumber('а я томат');
getPositiveNumber(2023);
getPositiveNumber(-1);
getPositiveNumber(1.5);

