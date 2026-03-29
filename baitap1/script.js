//bai1

// let numbers = [];

// for (let i = 0; i < 10; i++) {
//      let num = Number(prompt('Nhập vào một số nguyên'));
//      numbers.push(num);
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 10) {
//         console.log(numbers[i]);
//     }
// }

//bai2

// let numbers = [];

// for (let i = 0; i < 10;i++) {
//     let num = Number(prompt('Nhập vào một số nguyên'));
//     numbers.push(num);
// }

// let max = numbers[0];
// let indexFind = 0;
// for (let i = 0; i < numbers.length;i++) {
//     if (max < numbers[i]) {
//         max = numbers[i];
//         indexFind = i;
//     }
// }

// console.log('Giá trị lớn nhất là:', max);
// console.log('Vị trí là:', indexFind);

//bai3

// let numbers = [];

// for (let i = 0; i < 5; i++) {
//     let num = Number(prompt('Nhập một số nguyên:'));
//     numbers.push(num);
// }
// max = numbers[0];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//      if (max < numbers[i]) {
//         max = numbers[i];
//      }
//      total += numbers[i];
// }

// let average = total / numbers.length;

// console.log('Giá trị lớn nhất là:',max);
// console.log('Trung bình cộng là:', average);

//bai4

let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Nhập một số nguyên:'));
    numbers.push(num);
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}