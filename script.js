// /// Task 1
// let out = "";

// for (i = 10; i <= 20; i++) {
//     out += i + " ";
// }
// console.log(out);

// ///  Task 2
// for (i = 10; i <= 20; i++) {
//     let square = i * i;
//     console.log("square " + i, square);
// }

// ///  Task 3
// for (i = 1; i <= 10; i++) {
//     let seven = i * 7;
//     console.log(seven);
// }

// let sum = 0;

// /// Task 4
// for (i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log("sum ", sum);

// /// Task 5
// for (i = 15; i <= 35; i++) {
//     let a = 15 * i;
//     console.log(a);
// }

// /// Task 6
// let average = 0;
// for (i = 1; i <= 500; i++) {
//     average +=i;
//     if (i===500){
//         average/=500;
//     }
// }
// console.log(average,"Final")

///  Task 7
// for (i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

/// Task 8
// for (i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }

// /// Task 9
// let a = 123122;
// let sum1 = 0;
// let count = 0;
// for (i = 1; i <= a; i++) {
//     if (a % i === 0) {
//         console.log(i,"делитель числа",a)
//         if (i % 2 === 0) {
//             count++;
//             sum1 +=i;
//         }
//     }
// }
// console.log("сумма четных делителей :",sum1)
// console.log("количество четных делителей :",count)

// /// Task 10
// let c = 1;dsad
// for (i=1;i<=10;i++){
//     for (c=1;c<=10;c++){
//         let multiplication = i * c;
//         console.log(i,"*",c,"=",multiplication);
//     }
// }

//// task 11

// for (;;){
//     const userDigit = prompt("Угадайте чило от 1 до 10")
//     const randomDigit = Math.floor(Math.random() * 11);
//     if(userDigit===null){
//         break;
//     }
//     else if(+userDigit===randomDigit){
//         console.log("Вы угадали!!!")
//         break;
//     }
//     else{
//         console.log("Попробуйте еще")
//     }
// }

//// task 12

let height = +prompt('Введите число',)
let triangle = "";
for (i=0; i<height; i++){
    triangle += "-";
    console.log(triangle);

}




