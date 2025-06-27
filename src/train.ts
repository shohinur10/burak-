function checkArray(arr: (string | number)[]): boolean {
	const hasNumber = arr.some(item => typeof item === 'number');
	const hasString = arr.some(item => typeof item === 'string');
	return hasNumber && hasString;
  }
  
  // Testlar:
  console.log(checkArray(['hello', 123, 'world'])); // true
  console.log(checkArray(['hello', '123', 'world'])); // false
  console.log(checkArray([123, 456])); // false
  console.log(checkArray(['abc', 'def'])); // false
  


// type AnyObject = { [key: string]: any };

// function groupedBy(arr: AnyObject[], key: string): Record<string, AnyObject[]> {
// 	const grouped: Record<string, AnyObject[]> = {};

// 	for (const item of arr) {
// 		const groupKey = String(item[key]);

// 		if (!grouped[groupKey]) {
// 			grouped[groupKey] = [];
// 		}

// 		grouped[groupKey].push(item);
// 	}

// 	return grouped;
// }

// // Misol uchun data
// const data = [
// 	{ name: "Alice", age: 30, city: "New York" },
// 	{ name: "Bob", age: 25, city: "London" },
// 	{ name: "Charlie", age: 30, city: "Paris" },
// 	{ name: "David", age: 25, city: "Berlin" },
// 	{ name: "Eve", age: 40, city: "Tokyo" }
// ];

// // Funksiyani chaqiramiz
// const result = groupedBy(data, 'age');

// // Natijani ko‘rsatamiz
// console.log(result);



// function moveZeroes(nums: number[]): number[] {
//   const nonZeroes = nums.filter(num => num !== 0); // 0 bo'lmaganlarni saqlaymiz
//   const zeroCount = nums.length - nonZeroes.length; // nechta 0 borligini aniqlaymiz
//   const zeroes = Array(zeroCount).fill(0); // shuncha 0 yaratamiz
//   return [...nonZeroes, ...zeroes]; // birlashtiramiz
// }

// // Test
// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// function sumOfUnique(nums: number[]): number {
//   const map = new Map<number, number>();

//   // Har bir raqam necha marta uchraganini hisoblaymiz
//   for (const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   // Faqat 1 marta uchragan raqamlarni yig'amiz
//   let sum = 0;
//   for (const [key, value] of map.entries()) {
//     if (value === 1) {
//       sum += key;
//     }
//   }

//   return sum;
// }

// console.log(sumOfUnique([1, 2, 3, 2])); // 4 (1 + 3)
// function firstUniqueCharIndex(str: string): number {
//   const charCount: Record<string, number> = {};

//   // 1. Harflar sonini sanaymiz
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // 2. Birinchi noyob harfni topamiz
//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] === 1) {
//       return i;
//     }
//   }

//   // 3. Agar topilmasa
//  }

// function singleNumber(nums: number[]): number {
//   const countMap = new Map<number, number>();

//   // Har bir elementni sanaymiz
//   for (const num of nums) {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
//   }

//   // 1 marta uchragan elementni topamiz
//   for (const [key, value] of countMap) {
//     if (value === 1) {
//       return key;
//     }
//   }

//   // Agar topilmasa, -1 yoki istalgan qiymat qaytarish mumkin
//   return -1;
// }

// Misol uchun:
// console.log(singleNumber([4, 2, 1, 2, 1])); // Natija: 4
// function findDuplicates(arr: number[]): number[] {
//   const countMap: { [key: number]: number } = {};
//   const result: number[] = [];

//   for (const num of arr) {
//       countMap[num] = (countMap[num] || 0) + 1;
//   }

//   for (const key in countMap) {
//       if (countMap[key] >= 2) {
//           result.push(Number(key));
//       }
//   }

//   return result;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // Output: [3, 4]

// function countNumberAndLetters(input: string): { number: number; letter: number } {
//   let numberCount = 0;
//   let letterCount = 0;

//   for (const char of input) {
//     if (char >= '0' && char <= '9') {
//       numberCount++;
//     } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//       letterCount++;
//     }
//   }

//   return { number: numberCount, letter: letterCount };
// }

// // Test misol
// console.log(countNumberAndLetters("string152%\\¥")); 

// function areParenthesesBalanced(input: string): boolean {
//   let count = 0;

//   for (const char of input) {
//     if (char === '(') {
//       count++;
//     } else if (char === ')') {
//       count--;
//       // Agar yopilayotgan qavs ochilganidan ko‘p bo‘lsa — noto‘g‘ri
//       if (count < 0) {
//         return false;
//       }
//     }
//   }

//   // Oxirida ochilgan va yopilganlar teng bo‘lsa — balansda
//   return count === 0;
// }

// // Test
// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
// console.log(areParenthesesBalanced("no(balance(")); // false
// console.log(areParenthesesBalanced(")(")); // false

// function rotateArray(arr: number[], index: number): number[] {
//   if (index < 0 || index > arr.length) {
//     throw new Error("Index is out of bounds");
//   }a

//   const tail = arr.slice(-index); // oxiridan index ta element
//   const head = arr.slice(0, arr.length - index); // qolgan boshlanishi

//   return tail.concat(head); // oxirini oldinga olib kelish
// }


// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// function reverseInteger(num: number): number {
//   const reversedStr = Math.abs(num).toString().split('').reverse().join('');
//   const reversedNum = parseInt(reversedStr);
//   return num < 0 ? -reversedNum : reversedNum;
// }


// console.log(reverseInteger(123456789)); 
// console.log(reverseInteger(-1234));
// function printNumbers(): void {
//   let count = 1;
  
//   const intervalId = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000); // Har 1 soniyada ishlaydi
// }

// printNumbers();

// function reduceNestedArray(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     } else if (Array.isArray(item)) {
//       sum += reduceNestedArray(item); // Rekursiv chaqiriq
//     }
//   }

//   return sum;
// }

// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log(result); // Natija: 8

// function capitalizeWords(input: string): string {
//   if (typeof input !== 'string') {
//     throw new Error("Input must be a string");
//   }
  
//   return input
//     .trim()
//     .toLowerCase()
//     .split(/\s+/) 
//     .join('_');
// }

// console.log(capitalizeWords('name should be a string')); // 'name_should_be_a_string'

// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map((word: string) => {
//       if (word.length <= 2) {
//         return word;
//       }
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }


// console.log(capitalizeWords("name should be a string"));


// function removeDuplicate(str: string): string {
//   let result = '';
//   const seen = new Set<string>();

//   for (const char of str) {
//       if (!seen.has(char)) {
//           result += char;
//           seen.add(char);
//       }
//   }

//   return result;
// }


// console.log(removeDuplicate("stringg"));  
// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//   if (index >= 0 && index < arr.length) {
//       arr[index] = newValue;
//   }
//   return arr;
// }

// // Misol:
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// const randomNumber = randomBetween(30, 50);

// console.log(`Random number between 30 and 50: ${randomNumber}`);// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// type Person = {age: number;};

// function sortByAge(arr: Person[]): Person[] {
//   return arr.sort((a, b) => a.age - b.age);
// }


// const people = [{ age: 23 }, { age: 21 }, { age: 13 }];
// const sortedPeople = sortByAge(people);
// console.log(sortedPeople);

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;



// function sumEvens(arr: number[]): number {
//   let sum = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }
// console.log(sumEvens([1, 2, 3]));

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const set2 = new Set(arr2);
//   const result = arr1.filter(item => set2.has(item));
//   return Array.from(new Set(result)); 
// }


// console.log(findIntersection([1, 2, 3], [3, 2, 0])); // [2, 3]


// Function to count how many times a key appears in an object (including nested)
// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrences(obj: any, keyToFind: string): number {
//   if (typeof obj !== 'object' || obj === null) return 0;

//   let count = 0;

//   for (const [key, value] of Object.entries(obj)) {
//     if (key === keyToFind) count++;

//     if (typeof value === 'object') {
//       count += countOccurrences(value, keyToFind); // Recursive call
//     }
//   }

//   return count;
// }
// const data = {
//   model: 'Bugatti',
//   steer: {
//     model: 'HANKOOK',
//     size: 30
//   },
//   parts: [
//     { model: 'BMW' },
//     { type: 'engine', brand: { model: 'Mercedes' } }
//   ]
// };


// const keyToSearch = 'model';
// const result = countOccurrences(data, keyToSearch);
// console.log(`Key '${keyToSearch}' appears ${result} times.`);



// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]; 
// function chunkArray(arr: any[], size: number): any[][] {
//   return arr.reduce((acc: any[][], curr: any, index: number) => {
//       if (index % size === 0) {
//           acc.push(arr.slice(index, index + size));
//       }
//       return acc;
//   }, []);
// }
// const res = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(res);

// reduce orqali array ustida yuriladi.

// index % size === 0 bo'lsa, slice orqali kerakli bo'lak olinib acc (accumulator) ga qo‘shiladi.


// Task V
// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(input: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (const char of input) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }


// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }
// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.   by typeScript version

// function sumOdds(n: number): number {
//   const k = Math.floor(n / 2);
//   return k * k;
// }

// // Examples:
// console.log(sumOdds(9));  
// console.log(sumOdds(11)); 

// i % 2 !== 0 — bu ifoda i toq sonligini tekshiradi.

// for sikli 0 dan n gacha aylanishda faqat toq sonlarni sanaydi.

// n soni o'z ichiga olinmaydi, ya'ni 0 dan n - 1 gacha qaraladi.







//Task T
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const mergedArray: number[] = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }
//   return mergedArray;
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
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
