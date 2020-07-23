// Task 1
// var names = ["Name0", "Name1", "Name2"]
// Task 2
// var names = [];

// names[0] = "";
// names[1] = "";
// names[2] = "";
// Task 3
// var a = ["Saim", "Ali", "Hassan"]
// console.log(a[0], a[1])
// Task 4
// var a=[1,2,3]
// console.log(a[0],a[1])
// Task 5
// var a = [(2 * 3) + 2, (2 / 2) + 1, (4 * 2) - 3]
// Task 6
// var a = ["Saim04", "Saim02"]
// Task 7
// var b = "<h4>QUALIFICATIONS</h4>"
// document.write(b)
// var a = ["SSC<br>", "HSC<br>", "BSC<br>", "BS<br>", "BCOM<br>", "MS<br>", "M.Phil<br>", "PhD<br>"]
// document.write(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7])
// Task 8
// var names = ["Saim", "Ali", "Hassan"]
// var scores = [400, 470, 370]
// var per = ["Percentage:"]
// document.write("Score of ", names[0], " is ", scores[0], ".", per[0], scores[0] / 500 * 100, "%<br>",
//     "Score of ", names[1], " is ", scores[1], ".", per[0], scores[1] / 500 * 100, "%<br>", "Score of ", names[2], " is ", scores[2], ".", per[0], scores[2] / 500 * 100, "%")
// Task 9
// var color = ["Red ", "Blue ", "Orange ", "Green ", "Purple"]
// document.write(color + "<br>")
// // // a)
// var a = prompt("Add color to the beginning:")
// color.unshift(a)
// document.write(color + "<br>")
// // b)
// var b = prompt("Add color to the end:")
// color.push(b)
// document.write(color + "<br>")
// // // c)
// color.unshift("Mehroon", "White")
// document.write(color + "<br>")
// // // d)
// color.shift()
// document.write(color + "<br>")
// // // e)
// color.pop()
// document.write(color + "<br>")
// // // f)
// var c = +prompt("Enter color index to add:")
// var d = prompt("Enter color to add:")
// color.splice(c, 0, d)
// document.write(color + "<br>")
// // g)
// var e = +prompt("Enter color index to delete:")
// var f = +prompt("Enter how many colors you want to delete:")
// color.splice(e, f)
// document.write(color)

// var d = prompt("Enter color name")
// color.splice(c, 4, d)
// document.write(color)
// Task 10
// var scores = [320, 220, 420, 520]
// document.write("Scores of Students:", scores + "<br>")
// scores.sort()
// document.write("Ordered Scores of Students:", scores)
// Task 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write("Cities List:<br>", cities + "<br>")
// var selectedcities = []
// cities.splice(0, 2)
// cities.pop()
// document.write("Selected cities List:<br>", cities)
// Task 12
// var arr = ["This", "is", "my", "cat"];
// document.write(arr + "<br>")
// document.write(arr.join(" "))
// Task 13
// var a = ["keyboard", "mouse", "printer", "monitor"]
// var head = "Devices:"
// document.write(head + "<br>" + a + "<br>")
// for (let i = 0; i < a.length; i++) {
//     document.write("Out:<br>" + a[i] + "<br>")
// }
// Task 14
// var a = ["keyboard", "mouse", "printer", "monitor"]
// var head = "Devices:"
// document.write(head + "<br>" + a + "<br>")
// for (i = a.length - 1; i >= 0; i--) {
//     document.write("Out:<br>" + a[i] + "<br>")
// }
// Task 15
// var a = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", " Haier"]
// document.write("<select>")
// for (var i = 0; i < a.length; i++) {
//     document.write("<option>" + a[i] + "</option>")
// }
// document.write("</select>")