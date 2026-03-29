//bai1

// let arr = ['1','2','3','a','b','c'];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//bai3

// let str = "1234567";
// console.log(str.length);

//bai4

// let str = prompt('Nhập vào một chuỗi:');
// let str1 = prompt('Nhập vào một chuỗi:');
// if (str == str1) {
//     console.log('Hai chuỗi giống nhau');
// } else {
//     console.log('Hai chuỗi không giống nhau');
// }

//bai5

let arr = [];

for (let i = 0; i < 5; i++) {
    ar = prompt('Nhập vào ký tự:');
    arr.push(ar);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
        arr[i] = "_";
    }  
    console.log(arr[i]);
}
