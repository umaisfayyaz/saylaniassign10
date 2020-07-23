// Task 1
// var a = [
//     [1, 2, 3, 4]
// ]
// Task 2
// var a = [
//     [0, 1, 2, 3, "<br>"],
//     [1, 0, 1, 2, "<br>"],
//     [2, 1, 0, 1, "<br>"]
// ]
// for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < a[i].length; k++) {
//         document.write(a[i][k])
//     }
// }
// Task 3
// var a = 10;
// for (let i = 1; i <= a; i++) {
//     document.write(i + "<br>")
// }
// Task 4
// var a = +prompt("Enter a number to show its multiplication table")
// var b = +prompt("Enter length of multiplication table")
// for (let i = 1; i <= b; i++) {
//     document.write(a + "x" + i + "=", a * i + "<br>")
// }
// Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (let k = 0; k < fruits.length; k++) {
//     document.write(fruits[k] + "<br>")
// }
// for (let i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// Task 6
// var head = ("<h3>Counting:<br> </h3>")
// document.write(head)
// var a = 15;
// for (var i = 1; i <= a; i++) {
//     document.write(i, ",")
// }
// var head = ("<h3>Reverse Counting:<br> </h3>")
// document.write(head)
// var a = 1;
// for (var i = 10; i >= a; i--) {
//     document.write(i, ",")
// }
// var head = ("<h3>Even:<br> </h3>")
// document.write(head)
// var a = 20;
// for (var i = 0; i <= a; ++i) {
//     if (i % 2 === 0) {
//         document.write(i + ",")
//     }
// }
// var head = ("<h3>Odd:<br> </h3>")
// document.write(head)
// var a = 20;
// for (var i = 1; i <= a; ++i) {
//     if (i % 2 === 1) {
//         document.write(i + ",")
//     }
// }
// var head = ("<h3>Odd:<br> </h3>")
// document.write(head)
// var a = 20;
// for (var i = 2; i <= a; ++i) {
//     if (i % 2 === 0) {
//         document.write(i + "k,")
//     }
// }
// Task 7
// var a = prompt("Welcome to our bakery,What do you want to order sir/mam?")
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(a==A[0]) {
//         document.write(a+ " is <b>available</b> at index " +0 +" in our bakery")
//     }
//     else if(a==A[1]) {
//         document.write(a+ " is <b>available</b> at index " +1 +" in our bakery")
//     }
//     else if(a==A[2]) {
//         document.write(a+ " is <b>available</b> at index " +2 +" in our bakery")
//     }
//     else if(a==A[3]) {
//         document.write(a+ " is <b>available</b> at index " +3 +" in our bakery")
//     }
//     else if(a==A[4]) {
//         document.write(a+ " is <b>available</b> at index " +4+" in our bakery")
//     }
//  else{
//         document.write("We are sorry." + a + " is <b>not available</b> in our bakery")
//     }


// Task 8
// var A = [24, 53, 78, 91, 12]
// document.write("Array Items:", A + "<br>")
// var largest = Math.max.apply(0, A)
// document.write("The Largest number is ", largest)
// Task 9
// var A = [24, 53, 78, 91, 12]
// document.write("Array Items:", A + "<br>")
// var smallest = Math.min.apply(0, A)
// document.write("The smallest number is ", smallest)
// Task 10
// var a = 20
// for (let i = 1; i <= a; i++) {
//     document.write(i * 5 + ",")
// }
