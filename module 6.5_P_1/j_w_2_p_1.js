
// 1 //

// let res = 77

// if(res < 33){
//     console.log("F")
// }
// else if(res >=33 && res <= 50){
//     console.log("B")
// }
// else if(res >50 && res <=60){
//     console.log("A-")
// }
// else if(res >60 && res <=80){
//     console.log("A")
// }
// else if(res >80 && res <=99){
//     console.log("A+")
// }
// else{
//     console.log("invalid")
// }

// 2 //

// let num = 112
// const EvenOdd = (num) => {
//     if(num % 2 == 0){
//         console.log("Even Number")
//     }
//     else{
//         console.log("Odd Number")
//     }
// }
// EvenOdd(num)

// 3.

// let num = [6,10,20,13,2,4,5,3,9,7,1,11,15,17,19,18,14]
// const sequence = (num) =>{

//     for(let i = 0; i < num.length ; i++){
//         for(let j =i+1; j< num.length; j++){
//             if(num[i] > num[j]){
//                 let tmp = num[i]
//                 num[i] = num[j]
//                 num[j] = tmp
//             }
//         }
//     }
// }

// sequence(num)
// console.log(...num)

// 4. 


// const palindrom = (num) =>{
//     const str = num.toString();
//     const reversedStr = str.split('').reverse().join('');
//     // console.log(reversedStr)
//     return reversedStr
   
// }
// const num = 10
// if(num.toString() == palindrom(num)){
//     console.log("plaidorm")
// }
// else{
//     console.log("not plindrom")
// }

// 5.

// const divisor = () =>{
//     for(let i=1;i<=50;i++){
//         if(i%3 == 0 && i%5==0){
//             console.log(i)
//         }
//     }
// }
// divisor()

// 6.


// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

// for(let i = 0; i < friends.length ; i++){
//     for(let j =i+1; j< friends.length; j++){
//         if(friends[i].length < friends[j].length)
//         {
//             let temp = friends[i]
//             friends[i] = friends[j]
//             friends[j] = temp
//         }
//     }
// }
// // console.log(...friends)
// console.log(friends[0])

// 7.
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// let uniquenum = [...new Set(numbers)]
// console.log(uniquenum)
//8.
// let allnum = [...numbers]
// let maxnum = Math.max(...allnum)
// console.log(maxnum)

//9.

const checkarrayNumber = (arr, living_cost) =>{
    if(!Array.isArray(arr) || typeof living_cost != 'number'){
        return "Invalid Input"
    }
    // return null
}


let living_cost = 10000
let arr = [900,2700,3400]
if(checkarrayNumber(arr, living_cost)){
    console.log("Invalid Input")
}
else{
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 3000){
           let tex =  (arr[i] / 100) * 20
           arr[i] -= tex
        }
    }
    let tatal_pamant = 0
    for(let i=0;i<arr.length;i++){
        tatal_pamant+=arr[i]
    }
    let total_savings = tatal_pamant - living_cost
    if(total_savings < 0){
        console.log("eran more")
    }
    else{
        console.log(total_savings)
    }
}
