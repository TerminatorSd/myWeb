var index = 0;
var sum = 0;
var topK = 0;
var objArr = {};
var max = 0;
var nowWord = "";
var lines = "3";

// -12341234
// 43214321
var num = "0x62";
var num = parseInt(num);
var str = '00101';
// num = num.split(" ");
// var res = parseInt(num[0]) * parseInt(num[1]);
var twoInt = parseInt(num.toString(10));
// console.log(num.toString(2));
// console.log(twoInt);
// console.log(str.toString(10));

// 美团点评
// 第一题
// function main () {
//      var node = 0;
//      var edge = 0;
//      var index  = 0;
//      var a, b;
//      while((a=readInt())!=null && (b=readInt())!=null) {
//         if(index == 0) {
//             node = a;
//             edge = b;
//             index++;
//         } else {
            
//         }
//      }
//  } 


// 第二题
// console.log('a' < 'c');
// console.log(getClass('100', '20'));

// function getClass (all, pass) {
//     var ratio = parseInt(pass)/parseInt(all);
//     if(ratio <= 0.3) {
//         return 5;
//     } else if(ratio <= 0.6) {
//         return 4;
//     } else {
//         return 3;
//     }
// }


// function lessThan (one, two) {
//     var lenOne = one.length;
//     var lenTwo = two.length;
//     var len = 0;
//     if(lenOne > lenTwo) {
//         len = lenTwo;
//     } else {
//         len = lenOne;
//     }
//     for(var i = 0; i < len; i ++) {
//         if(one[len] < two[len]) {
//             return true;
//         } 
//     }
//     if(lenOne > lenTwo) {
//         return false; 
//     } else {
//         return true;
//     }
// }
// console.log(lessThan('adf', 'avs'));
// console.log('less than');

// var index = 0;
// var min ="z";
// var resArr = [
//     {
//         name: "math",
//         hard: "3"
//     },
//     {
//         name: "algorithm",
//         hard: "3"
//     },
//     {
//         name: "string",
//         hard: "5"
//     },
//     {
//         name: "dp",
//         hard: "4"
//     }
// ];
// var len = resArr.length;
// var minIndex = 0;
// for(var i = 0; i < len; i++) {
//     for(var j = 0; j < len; j++) {
//         if(resArr[j].name[0] < min) {
//             min = resArr[j].name[0];
//             minIndex = j;
//         }
//     }
//     console.log(resArr[minIndex].name + " " + resArr[minIndex].hard);
//     resArr[minIndex].name = 'zzzzz';
//     minIndex = 0;
//     min = 'z';
// }


// function main() {
//     var line = "";
//     var index = 0;
//     var resArr = [];
//     var min ="z";
//     // 将所有输入题目的名称及难度存放到resArr中
//     while(line = read_line()) {
//         if(index == 0) {
//             sum = parseInt(line.split(" ")[0]);
//             index++;
//         } else {
//             var arr = line.split(" ");
//             var objItem = {};
//             objItem.name = arr[0];
//             objItem.hard = getClass(arr[1], arr[2]);
//             resArr.push(objItem);
//         }
//     }
//     // 排序并输入
//     var len = resArr.length;
//     var minIndex = 0;
//     for(var i = 0; i < len; i++) {
//         for(var j = 0; j < len; j++) {
//             if(resArr[j].name[0] < min) {
//                 minIndex = j;
//             }
//         }
//         console.log(resArr[minIndex].name + " " + resArr[minIndex].hard);
//         resArr[minIndex].name = 'zzzzz';
//         minIndex = 0;
//         min = 'z';
//     }
// }



// function pow (num, mi) {
//     sum = 1;
//     for(var j = 0; j < mi; j++) {
//         sum *= num;
//     }
//     return sum;
// }
// function twoToTen (str) {
//     var len =  str.length;
//     var sum = 0;
//     for(var i = 0; i < len; i++) {
//         if(parseInt(str[i]) == 1) {
//             sum += pow(2, len - i -1);
//         }
//     }
//     console.log(sum);
// }
// twoToTen('00101');
// console.log(pow(2,2));



// function isNumber(para) {
//     var flag = false;
//     for(var i = 0; i <= 9; i++) {
//         if(i === parseInt(para)) {
//             flag = true;
//         }
//     }
//     return flag;
// }
// function main() {
//     var line = "abcd12345ed125s123058789s";
//     var len = line.length;
//     var con = 0;
//     var res = "";
//     var maxLen = 0;
//     var nowLen = 0;
//     var objArr = {};
//     var lenArr = [];
//     var resIndex = 0;
//     for(var j = 0; j < len; j++) {
//         if(j == len -1) {
//             if(isNumber(line[j])) {
//                 if(isNumber(line[j-1])) {
//                     con++;
//                     res += line[j];
//                 } else {
//                     con = 1;
//                     res = line[j];
//                 }
//                 lenArr.push(con);
//                 nowLen = lenArr.length - 1;
//                 objArr[nowLen] = res;
//             }
//         }
//         if(isNumber(line[j])) {
//             if(isNumber(line[j-1])) {
//                 con++;
//                 res += line[j];
//             } else {
//                 con = 1;
//                 res = line[j];
//             }
//         }
//         else {
//             if(isNumber(line[j-1])) {
//                 lenArr.push(con);
//                 nowLen = lenArr.length - 1;
//                 objArr[nowLen] = res;
//             }
//             con = 0;
//             res = "";
//         }
//     }
//     var maxTemp = 0;
//     for(var k = 0; k < lenArr.length; k++) {
//         if(lenArr[k] >= maxTemp) {
//             resIndex = k;
//         }
//     }
//     console.log(objArr[resIndex] + "," + lenArr[resIndex]);
// }

// main();

// console.log(isNumber('1'));