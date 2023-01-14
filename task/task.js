// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam sale, і повертає результат перевірки. Слова в рядку параметраmessage можуть бути у довільному регістрі, наприклад spam або sale.
// 1. Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// 2. Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// ТЕСТИ
// 1. Оголошена функція checkForSpam(messege)
// 2. Виклик функції checkForSpam('Latest technology news') повертає false.
// 3. Виклик функції checkForSpam('JavaScript weekly newslatter') повертає false.
// 4. Виклик функції checkForSpam('Get better sale offers now!') повертає true.


function checkForSpam(message) {
    let result;
    let messageLowerCase = message.toLowerCase();
    result = messageLowerCase.includes('spam') || messageLowerCase.includes('sale') ? true : false;
    return result;
}

checkForSpam('Latest technology news');

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або
//  групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

//  const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string 
// результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
  
  
  
    // Change code above this line
    return string;
  };

  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")