// TASK H:

// Integerlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// -4 positive emas negative number bo'lganligi uchun
// uni ignore qilib qolganlarini birlashtirib string ko'rinishadi qaytarmoqda

function getPositiveH(arr: number[]): string {
    return arr.filter(num => num > 0).join('');
}

// Test cases
console.log(getPositiveH([1, -4, 2]));  // "12"
console.log(getPositiveH([-3, 5, 0, 9]));  // "59"
console.log(getPositiveH([-7, -2, -1]));  // ""











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
