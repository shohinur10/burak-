// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.   by typeScript version

function sumOdds(n: number): number {
  const k = Math.floor(n / 2);
  return k * k;
}

// Examples:
console.log(sumOdds(9));  
console.log(sumOdds(11)); 

// i % 2 !== 0 — bu ifoda i toq sonligini tekshiradi.

// for sikli 0 dan n gacha aylanishda faqat toq sonlarni sanaydi.

// n soni o'z ichiga olinmaydi, ya'ni 0 dan n - 1 gacha qaraladi.







//Task T
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// => [0, 3, 4, 4, 6, 30, 31]
// TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak by typeScript
// '2' soni tushib qolganTASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak by typeScript
// '2' soni tushib qolgan






function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
console.log(missingNumber([3, 0, 1]))

// function calculate(expression: string): number {
//   return expression
//     .split('+')
//     .map((str: string) => parseInt(str.trim(), 10))
//     .reduce((a: number, b: number) => a + b, 0);
// }


// console.log(calculate("1+3"));
// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false

 

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }


// const result = objectToArray({ a: 10, b: 20 });
// console.log(result); 

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.filter(item => typeof item === 'number')
//             .reduce((sum, num) => sum + num, 0);
// }

// // Example:
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));

// function palindromCheck(word: string): boolean {
//     const reversed = word.split('').reverse().join('');
//     return word === reversed;
//   }
  
//   // Test qilish
//   console.log(palindromCheck("dad")) ;//true;
  
  // function getSquareNumbers(arr: number[]): { number: number, square: number }[] {
//     return arr.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }

// // Example usage
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); 









// function reverseSentence(sentence: string): string {
//     return sentence
//         .split(' ') // So'zlarni ajratamiz
//         .map(word => word.split('').reverse().join('')) // Har bir so'zni teskari yozamiz
//         .join(' '); // So'zlarni qayta birlashtiramiz
// }

// console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc!"





// function countVowels(s: string): number {
//     const vowels = "aeiouAEIOU";
//     return Array.from(s).filter(char => vowels.includes(char)).length;
// }

// // Test
// console.log(countVowels("string"));  // Output: 1
// console.log(countVowels("hello"));   // Output: 2






//  Task -H ,String argument pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"



// function getDigits(inputString: string): string {
//     let digits = '';
//     for (let i = 0; i < inputString.length; i++) {
//         if (!isNaN(Number(inputString[i])) && inputString[i] !== ' ') {
//             digits += inputString[i];
//         }
//     }
//     return digits;
// }
// const result = getDigits("m14i1t");
// console.log(result);

// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
// function findLongestWord(sentence: string): string {
//     const words = sentence.split(' '); // Stringni so'zlarga ajratish
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word; // Eng uzun so'zni yangilash
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));  // "Uzbekistan"


// Task I 
// shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number {
//     let countMap = new Map<number, number>();
//     let maxCount = 0;
//     let maxElement: number | null = null;

//     for (let num of arr) {
//         let count = (countMap.get(num) || 0) + 1;
//         countMap.set(num, count);
        
//         if (count > maxCount) {
//             maxCount = count;
//             maxElement = num;
//         }
//     }

//     return maxElement!;
// }

// // Test
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4

// countMap nomli xarita yaratib, har bir elementning necha marta uchraganligini saqlaydi.

// Eng ko‘p takrorlangan elementni topish uchun maxCount va maxElement o‘zgaruvchilaridan foydalanadi.

// Har bir element uchun takrorlanish sonini yangilaydi va agar yangi maksimal qiymat topilsa, uni maxElement sifatida saqlaydi.









// TASK H:

// Integerlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// -4 positive emas negative number bo'lganligi uchun
// uni ignore qilib qolganlarini birlashtirib string ko'rinishadi qaytarmoqda

// function getPositiveH(arr: number[]): string {
//     return arr.filter(num => num > 0).join('');
// }

// // Test cases
// console.log(getPositiveH([1, -4, 2]));  // "12"
// console.log(getPositiveH([-3, 5, 0, 9]));  // "59"
// console.log(getPositiveH([-7, -2, -1]));  // ""











// F-TASK: 

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi


// function findDoublers(str: string): boolean {
//     return [...str].some((char, i) => str.indexOf(char) !== i);
// }

// console.log(findDoublers("hello")); // true
// console.log(findDoublers("world")); // false


// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.




// function getHighestIndex(arr: number[]): number {
//     let max = Math.max(...arr);
//     return arr.indexOf(max);
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
