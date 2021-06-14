// let schoolData = [{
//     class: 1,
//     section: "A",
//     students: 50,
// }, {
//     class: 2,
//     section: "A",
//     students: 80,
// }, {
//     class: 3,
//     section: "A",
//     students: 20,
// }, {
//     class: 1,
//     section: "B",
//     students: 70,
// }, {
//     class: 2,
//     section: "B",
//     students: 90,
// }];
// let classSection = {}
// schoolData.forEach((item,index)=>{
//     if (classSection[`class${item.class}`] && !(classSection[`class${item.class}`].includes(item.section))) {
//         (classSection[`class${item.class}`].push(item.section))
//     } else {
//         classSection[`class${item.class}`] = [item.section]
//     }
// }
// )
// console.log(classSection)

// let para = "My name is shubham bhatt"
// para = para.split(" ")
// console.log(para.reverse().join(" "))

// function solution(A) {
//     A = A.sort()
//     A = A.filter((item,index)=>{
//         return Math.sign(item) == 1
//     }
//     )
//     if (A.length == 0)
//         return 1;
//     if (A.length == 1 && A[0] == 0)
//         return 1;
//     let max = A.length;
//     console.log(A)
//     for (let i = 1; i < A.length; i++) {
//         if ((A[i] != A[i - 1]) && (A[i] !== (A[i - 1] + 1)) && (A[i] <= max + 1)) {
//             return A[i] - 1
//         }
//     }
//     return A[A.length - 1] + 1
// }
// solution([1, 3, 6, 4, 1, 2, -9, 7])

// var scope="out"
// function r() {
//     var scope="inner"
//     function f() {
//         return scope
//     }
//     return f
// }
// r()

// const obj1 = {}
// Object.defineProperties(obj1, {
//     prop: {
//         val: 10
//     }
// })

// console.log(obj1.prop)
// const obj1 ={
//     a: 10,
//     b: 15,
//     c: 18
// }
// const obj2 = Object.assign({c: 7, d: 1}, obj1)
// console.log(obj2.c, obj2.d)
// var x=2
// function check() {
//     console.log(x)
//     let x
// }

// var ch1 = 'b'
// var ch2;
// switch (ch1) {
// case 'a':
//     ch2 = '1';
// case 'b':
//     ch2 = '2';
// case 'c':
//     ch2 = '3';
//     break;
// default:
//     ch2 = '4';
// }
// console.log(ch2)
// var gg = 1.5
// var hh = 0.2
// var x = Math.round(gg%hh*100)/100
// console.log(x)
// var sometext = 'JavaScript1.2'
// var pattern = /(\w+)(\d)\.(\d)/i
// var outcome = pattern.test(sometext)
// console.log(outcome)

// function generate(seed) {
//     var private = seed
//     return function(param) {
//         private += seed
//         return private+param
//     }
// }
// var a = generate(1)
// var b = generate(2)
// var c = a(1)+a(2)+b(3)+b(4)
// console.log(c)

// var a = "test"
// var b = String("test")
// var c = new String("test")
// console.log(b===c)

// var x=9
// x=x>>2
// x=x<<2
// x=x^3
// console.log(x)
// var greet = () => {
//     var msg = ["hello", this.name, "welcome"].join(" ")
//     console.log(msg)
// }
// var person = {name: "Shu"}
// greet.call(this.person)

// bubble sort practice
// bubbleSort([6,1,3,9,8,0,3,5])
// function bubbleSort (arr) {
//     for (let i = arr.length; i >= 0; i--) {
//         let noSwaps = true
//         for (let j = 0; j <= i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = temp
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) break;
//     }
//     return arr
// }

// selection sort practice
// selectionSort([6,1,3,9,8,0,3,5])
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// insertion sort practice
// insertionSort([6,1,3,9,8,0,3,5])
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i-1; j >= 0; j--) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// linear search practice
// linearSearch([6, 1, 3, 9, 8, 0, 3, 5], 10)
// function linearSearch(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i
//         }
//     }
//     return -1
// }

// binary search practice
// binarySearch([4, 5, 6, 8, 9, 12, 14, 45, 67, 78, 89], 6)
// function binarySearch(arr, num) {
//     let start = 0
//     let end = arr.length - 1
//     let mid = Math.floor((start + end) / 2)
//     if (arr[mid] === num)
//         return mid
//     while (arr[mid] !== num && start < end) {
//         if (num < arr[mid]) {
//             end = mid - 1
//         } else {
//             start = mid + 1
//         }
//         mid = Math.floor((start + end) / 2)
//     }
//     if (arr[mid] === num)
//         return mid
//     return -1
// }

// naive string search
// stringSearch("hello how are you mellow", "ll")
// function stringSearch(str, search) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < search.length; j++) {
//             if (search[j] !== str[i+j]) {
//                 break
//             }
//             if (j === search.length - 1) {
//                 count++
//             }
//         }
//     }
//     return count
// }

// count chars in string
// countChars("aaabbbbcccccdddddd")
// function countChars(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]]++
//         } else {
//             obj[str[i]] = 1
//         }
//     }
//     return obj
// }

// right angle traingle
// printRightAngle()
// function printRightAngle() {
//     let r = 4
//     for (let i = 0; i < r; i++) {
//         for (let j = 0; j <= i; j++) {
//             console.log("*")
//         }
//         console.log('\n')
//     }
// }

// check sequential array
// checkSequential([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// function checkSequential(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if ((arr[i] - arr[i - 1]) !== 1)
//             return -1
//     }
//     return 1
// }

// bracket validation in string
// function validate(str) {
//     let open = close = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "(") open++
//         if (str[i] === ")") close++
//     }
//     if (open === close) return true
//     return false
// }
// function validate(str) {
//     let stack = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
//             stack.push(str[i])
//             console.log(`pushed ${str[i]}`, stack)
//         } else {
//             stack.pop(str[i])
//             console.log(`popped ${str[i]}`, stack)
//         }
//     }
//     if (stack.length !== 0) return false
//     return true
// }

////////////////////////
///////////////////////
// validate("[([{}])]")
// function validate(str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
//             stack.push(str[i]);
//         } else {
//             console.log(stack)
//             let last = stack.pop();
//             console.log(last)
//             if (str[i] !== map[last]) {
//                 return false
//             }
//             ;
//         }
//     }
//     if (stack.length !== 0) {
//         return false
//     }
//     return true;
// }

// correct string
// correcString(" worldhello", 5)
// function correcString(str, n) {
//     let firstStringIndex = str.length - n
//     let firstString = str.slice(firstStringIndex)
//     let secondString = str.slice(0, firstStringIndex)
//     console.log(firstString+secondString)
// }

// passing obj as arguments
// const origNum = 8;
// const origObj = {color: 'blue'};

// const changeItUp = (num, obj) => {
//   num = 7;
//   obj.color = 'red';
// };

// changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
// console.log(origNum);

// min steps to sort an array
// sortMinSteps(["1", "2", "3", "1", "3", "2"])
// sortMinSteps(["1", "3", "2"])
// sortMinSteps(["46", "33", "24", "15", "55"])
// function sortMinSteps(inputArr) {
//     let arr = inputArr.map(item=>Number(item))
// //     arr = arr.splice(1)
// debugger
// 		let a = 1;
// 		for(let i =0 ; i < arr.length ; i++)
// 		{
// 			if(arr[i] == a)
// 			{
// 				i = -1;
// 				a ++;
// 			}
// 		}
// 		console.log('a here '+a)

// 		let count = 0;
// 		let k =arr.length;
// 		if(a == k+1)
// 		{
// 			for(let i =0 ; i < arr.length ; i ++)
// 			{
// 				if(arr[i] == k)
// 				{
// 					for(let j =i+1 ;j < arr.length;j++)
// 					{
// 						if(arr[j] == (k-1))
// 						{
// 							a = arr.splice(j, 1)
// 							arr.unshift(a[0])
// 							count++;
// 							break;	
// 						}
// 					}
// 					if(k != 1)
// 					{
// 						i = -1;
// 						k --;
// 					}	

// 				}
// 			}
// 			return count;
// 		}
// 		else
// 		{
// 			return -1;
// 		}
// }

// string to number
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// stringifyNumbers(obj)
// function stringifyNumbers(inputObj) {
// 	for (let i in obj) {
// 		if (typeof obj[i] === 'number') {
// 			obj[i] = obj[i].toString()
// 		} else if (typeof obj[i] === 'object') {
// 			obj[i] = stringifyNumbers(obj[i])
// 		}
// 	}
// 	return obj
// }

// collect strings
// let obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }
// collectString(obj)
// function collectString(obj, strArray = []) {
//     for (let i in obj) {
//     	if (typeof obj[i] === 'string') {
//     		strArray.push(obj[i])
//     	} else if (typeof obj[i] === 'object') {
//     		collectString(obj[i], strArray)
//     	}
//     }
//     return strArray	
// }

// sort an array with respect to another
// let arr1 = [2, 1, 8, 3]
// // let arr1 = [99, 22, 444, 56]
// let arr2 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]

// sortWRT(arr1, arr2)

// function sortWRT(arr1, arr2) {
//     let ele = {}
//     let newArr = []
//     let notFound = 1
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 if (ele[arr1[i]]) {
//                     ele[arr1[i]]++
//                 } else {
//                     ele[arr1[i]] = 1
//                 }
//             }
//         }
//         if (Object.keys(ele).length !== 0) {
//             let key = Object.keys(ele)
//             key = key[0]
//             key = Number(key)
//             for (let k = 0; k < ele[key]; k++) {
//                 newArr.push(Number(key))
//                 let index = arr2.indexOf(key)
//                 arr2.splice(index, 1)
//             }
//             ele = {}
//             notFound = 0
//         } else {
//             ele = {}
//         }
//     }
//     if (notFound) {
//         const arr2D = arr2.sort((n1,n2)=>{
//             return n1 - n2
//         }
//         )
//         newArr = [...arr2]
//     } else {
//         const arr2D = arr2.sort((n1,n2)=>{
//             return n1 - n2
//         }
//         )
//         newArr = [...newArr, ...arr2D]
//     }
//     console.log(newArr)
// }

// reverse a linked list
// let list = {val: 1, next: {val: 2, next: {val:3, next: {val: 4, next: null}}}}
// reverse(list)
// function reverse(list) {
//     let next = null
//     let prev = null
//     while(list !== null) {
//         next = list.next
//         list.next = prev
//         prev = list
//         list = next
//     console.log(prev)
//     }
// //     console.log(prev)
// }

// palindrome sub string
// function PalindromeSubString(args) {
//     let palindromeStrings = [];
//     for (let i = 0; i < args.length; i++) {
//         for (let j = i + 1; j < args.length; j++) {
//             if (args[i] == args[j]) {
//                 let subString = args.slice(i, j + 1);
//                 if (checkPalindrome(subString)) {
//                     palindromeStrings.push(subString);
//                 }
//             }
//         }
//     }
//     if (palindromeStrings.length > 1) {
//         palindromeStrings.sort((str1,str2)=>{
//             return str2.length - str1.length
//         }
//         )
//     }
//     console.table(palindromeStrings)
//     return palindromeStrings
// }
// function checkPalindrome(inputString) {
//     let len = inputString.length - 1;
//     let mid = Math.floor((0 + len) / 2);
//     for (let i = 0; i <= mid; i++) {
//         if (inputString[i] !== inputString[len - i])
//             return false;
//     }
//     return true;
// }
// var input = "this is a simple test do not google else you will be disqualified";
// var outputStr = PalindromeSubString(input);
// console.log(outputStr)

//Solution
// outputStr =’<table><tr><td>is a si</td></tr><tr><td>s a s</td></tr><tr><td>goog</td></tr><tr><td>ifi</td></tr><tr><td>oo</td></tr><tr><td>ll</td></tr></table>’;
// ["is a si", "s a s", "goog", "ifi", "oo", "ll"]
// function longestPalinSubseq(S, i, j) {
//     if (i == j) {
//         return 1;
//     }
//     if (S[i] == S[j] && i + 1 == j) {
//         return 2;
//     }
//     if (S[i] == S[j]) {
//         return longestPalinSubseq(S, i + 1, j - 1) + 2;
//     }
//     return max(longestPalinSubseq(S, i, j - 1), longestPalinSubseq(S, i + 1, j));
// }
// function max(x, y) {
//     return (x > y) ? x : y;
// }
// let S = "bbabcbcab";
// longestPalinSubseq(S, 0, S.length - 1)
// "bacbcbabb"
// 1+1+1+1+1

// anagram together
let srr = ["act","god","cat","dog","tac"]
anagram(srr)
function anagram(string_list) {
        string_list = string_list.map((item) => {
            return item.split("").sort().join("")
        })
        let unique = string_list.filter((item, i) => string_list.indexOf(item) === i);
        console.log(unique.length)
}
