// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
function findLongestWord(sentence: string): string {
    const words = sentence.split(' '); // Stringni so'zlarga ajratish
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Eng uzun so'zni yangilash
        }
    }

    return longestWord;
}

console.log(findLongestWord("I come from Uzbekistan"));  // "Uzbekistan"


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
