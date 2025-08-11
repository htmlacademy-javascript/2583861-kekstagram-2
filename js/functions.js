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

// 4. Функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит:

const isMeetingInWorkHours = (startWorkTime, endWorkTime, startMeetingTime, meetingDurationInMinutes) => {
  const startWorkDate = new Date ();
  startWorkDate.setHours(startWorkTime.split(':')[0], startWorkTime.split(':')[1]);

  const endWorkDate = new Date ();
  endWorkDate.setHours(endWorkTime.split(':')[0], endWorkTime.split(':')[1]);

  const startMeetingDate = new Date ();
  startMeetingDate.setHours(startMeetingTime.split(':')[0], startMeetingTime.split(':')[1]);

  const meetingDurationInHours = [Math.floor(meetingDurationInMinutes / 60), meetingDurationInMinutes % 60];
  const endMeetingTime = startMeetingTime.split(':').map((element, index) => +element + meetingDurationInHours[index]);

  const endMeetingDate = new Date ();
  endMeetingDate.setHours(endMeetingTime[0], endMeetingTime[1]);

  return startMeetingDate >= startWorkDate && endMeetingDate <= endWorkDate;
};

isMeetingInWorkHours('08:00', '17:30', '14:00', 90);
isMeetingInWorkHours('8:0', '10:0', '8:0', 120);
isMeetingInWorkHours('08:00', '14:30', '14:00', 90);
isMeetingInWorkHours('14:00', '17:30', '08:0', 90);
isMeetingInWorkHours('8:00', '17:30', '08:00', 900);
