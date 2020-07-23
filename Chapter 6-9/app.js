// Task 1
// var a = 13;
// document.write("Result:<br>", "The value of a is:", a, "<br>", "<br>", "<br>", "The value of ++a is:", ++a, "<br>Now the value of a is", a, "<br><br><br>The value of a is:", a++,
//     "<br>Now the value of a is:", a, "<br><br><br>The value of --a is:", --a, "<br>Now the value of a is:", a, "<br><br><br>The value of a-- is:", a--, "<br>Now the value of a is:", a)
// Task 2
// var a = 2;
// var b = 1;
// document.write("a is ", a, "<br>b is ", b, "<br>Result is ", --a - --b + ++b + b--)
// --a=1;
// --a - --b=1-0;
// --a - --b + ++b=1-0+1;
// --a - --b + ++b + b--=1-0+1+1;
// Task 3
// var a = prompt("Enter Your Name");
// alert("Welcome Sir!")
// Task 4
// var a = +prompt("Enter a Number");
// if (a == "") {
//     document.write(5 + "x1=" + 5 * 1 + "<br>" + 5 + "x2=" + 5 * 2 + "<br>" + 5 + "x3=" + 5 * 3 + "<br>" + 5 + "x4=" + 5 * 4 + "<br>" + 5 + "x5=" + 5 * 5 + "<br>" + 5 + "x6=" + 5 * 6 + "<br>" + 5 + "x7=" + 5 * 7 + "<br>" + 5 + "x8=" + 5 * 8 + "<br>" + 5 + "x9=" + 5 * 9 + "<br>" + 5 + "x10=" + 5 * 10)
// } else if (a == +a) {
//     document.write(a + "x1=" +
//         a * 1 + "<br>" + a + "x2=" + a * 2 + "<br>" + a + "x3=" + a * 3 + "<br>" + a + "x4=" + a * 4 + "<br>" + a + "x5=" + a * 5 + "<br>" + a + "x6=" + a * 6 + "<br>" + a + "x7=" + a * 7 + "<br>" + a + "x8=" + a * 8 + "<br>" + a + "x9=" + a * 9 + "<br>" + a + "x10=" + a * 10)
// }
// Task 5
// var a = prompt("Enter First Subject:");
// var b = prompt("Enter Second Subject:");
// var c = prompt("Enter Third Subject:");
// var d = 100;
// var e = +prompt("First Subject Marks Obtained:");
// var f = +prompt("Second Subject Marks Obtained:");
// var g = +prompt("Third Subject Marks Obtained:");
// var k = e + f + g
// var l = d + d + d
// var h = e / d * 100
// var i = f / d * 100
// var j = g / d * 100
// document.write("<table><tr><td><h3>Subjects</h3>", a + "<br>" + b + "<br>" + c + "<br><br>" + "</td>" +
//     "<td><h3>Total Marks</h3>" + d + "<br>" + d + "<br>" + d + "<br><b><center>", l, "</center></b></td>" +
//     "<td><h3>Obtained Marks</h3>" + e + "<br>" + f + "<br>" + g + "<br><b><center>", k, "</center></b></td>" +
//     "<td><h3>Percentage</h3>", h + "%" + "<br>", i + "%" + "<br>", j + "%" + "<br><b><center>", k / l * 100 + "%" + "</center><b></td></tr></table")