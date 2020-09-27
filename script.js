
// Bundy JS Quiz 2

// 1. Write a function that returns a reversed version of a provided string.

// Leveraging predefined JS methods:
function reverseProvidedStringApproach1(providedString) {
    let stringArr = providedString.split("");
    let stringArrReversal = stringArr.reverse();
    let stringArrReversalJoined = stringArrReversal.join("");
    return stringArrReversalJoined;
}

console.log(`Q1 Ans (using JS methods w/ "provided string"): ${reverseProvidedStringApproach1("provided string")}`);

// Using a for loop:
// function reverseProvidedStringApproach2(providedString) {
//     let reversedString = "";
//     for (let i = providedString.length - 1; i >= 0; i--) {
//         reversedString += providedString[i];
//     }
//     return reversedString;
// }

// console.log(`Q1 Ans (using for loop w/ "provided string"): ${reverseProvidedStringApproach2("provided string")}`);

// 2. Write a function that factorializes a number. So, if given 5, the function returns 120 (1 * 2 * 3 * 4 * 5).

// Using a while loop:
function factorialize(no) {
    let factorialCalcStorageVar = no;
    if (no < 0) {
        return -1;
    } else if (no === 0 || no === 1) {
        return 1;
    } else while (no > 1) {
        no--;
        factorialCalcStorageVar *= no;
    }
    return factorialCalcStorageVar;
}

console.log(`Q2 Ans (using while loop to compute factorial of no. 5): ${factorialize(5)}`);

// Using a for loop (seems an easier / more intuitive way to me):
// function factorialize(no) {
//     if (no < 0) {
//         return -1;
//     } else if (no === 0 || no === 1) {
//         return 1;
//     } else for (var i = no - 1; i >= 1; i--) {
//         no *= i;
//     }
//     return no;
// }

// console.log(`Q2 Ans (using for loop to compute factorial of no. 5): ${factorialize(5)}`);

// 3. Write a function that returns the longest word of a sentence.

function maxLenWord(sentence) {
    let sentenceWordsArr = sentence.split(" ");
    let longestWordLength = 0;
    let longestWord = "";
    for (let i = 0; i < sentenceWordsArr.length; i++) {
        if (sentenceWordsArr[i].length > longestWordLength) {
            longestWordLength = sentenceWordsArr[i].length;
            longestWord = sentenceWordsArr[i];
        }
    }
    return longestWord;
}

console.log(`Q3 Ans (exe w/ string "This is a sentence."): ${maxLenWord("This is a sentence.")}`);

// 4. Write a function that returns the largest number of an array of numbers. Then, rewrite to return the largest number of the nested arrays. So, `[[5, 67, 12, 4], [33, 987, 12, 88], [90, 91, 22, 99], [1000, 387, 467, 432]]` returns `[67, 987, 99, 1000]`.

// function max(arr) {
//     let array = arr;
//     let maxNo = 0;
//     for (let element of array) {
//         if (element > maxNo) {
//             maxNo = element;
//         }
//     }
//     return maxNo;
// }

// console.log(`Q4 Ans (exe w/ array [1, 2, 3]): ${max([1, 2, 3])}`);

function returnArrOfMaxesFromNestedArrs(arrOfArrs) {
    let maxNoStorageArr = [];
    for (let i = 0; i < arrOfArrs.length; i++) {
        let maxNo = 0;
        for (let j = 0; j < arrOfArrs[i].length; j++) {
            if (arrOfArrs[i][j] > maxNo) {
                maxNo = arrOfArrs[i][j];
                // maxNoStorageArr.push(Math.max(j));
            }
            // elementOfParent.forEach(elementOfChild => {
            // let maxNo = 0;
            // if (element > maxNo) {
            //     maxNo = elementOfChild;
            // });
        }
        maxNoStorageArr.push(maxNo);
    }
    return maxNoStorageArr;
}

console.log(`Q4 Ans (exe w/ array [[5, 67, 12, 4], [33, 987, 12, 88], [90, 91, 22, 99], [1000, 387, 467, 432]]): ${returnArrOfMaxesFromNestedArrs([[5, 67, 12, 4], [33, 987, 12, 88], [90, 91, 22, 99], [1000, 387, 467, 432]])}`);

// 5. Write a function that handles two parameters. The first parameter is a string, and the second is also a string. This function should check if the first string ends with the second string. Given `"Bastian"` and `"n"`, return `true`.

function stringEndReconciler(string1, string2) {
    if (string1.slice(-1) === string2.slice(-1)) {
        return "true";
    } else {
        return "false";
    }
}

console.log(`Q5 Ans (exe w/ strings "Bastian" & "n"): ${stringEndReconciler("Bastian", "n")}`);

// 6. Write a function that repeats a string 'n' number of times.

function stringRepeater(string, n) {
    return string.repeat(n);
}

console.log(`Q6 Ans (exe w/ string "Please repeat me" & 7): ${stringRepeater("Please repeat me", 7)}`);

// 7. Write a function that truncates a string if it is longer than a provided number. If the string is truncated, end the string with '...'.

function stringTruncater(string, charCutoff) {
    if (string.length > charCutoff) {
        return string.substring(0, charCutoff) + "...";
    } else {
        return string;
    }
};

console.log(`Q7 Ans (exe w/ string "Truncate" & 3): ${stringTruncater("Truncate", 3)}`);
