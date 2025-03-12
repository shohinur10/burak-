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




function getHighestIndex(arr: number[]): number {
    let max = Math.max(...arr);
    return arr.indexOf(max);
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
