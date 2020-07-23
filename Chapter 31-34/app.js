// Task 1
// var a=new Date()
// document.write(a)
// Task 2
// var a=new Date()
// var months = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
// document.write("Current Month:"+months[a.getMonth()])
// Task 3
// var a=new Date()
// var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// document.write("Today is "+days[a.getDay()])
// Task 4
// var a=new Date().getDay()
// if (a==0 || a==6) {
// 	document.write("It's Fun day")
// }
// Task 5
// var a=new Date().getDate()
// if (a<16) {
// 	document.write("First fifteen days of the month")
// }
// else{
// 	document.write("Last days of the month")
// }
// Task 6
// var a=new Date()
// var b=new Date('1970-01-02')
// var c=a.getTime();
// document.write("Current Date:"+a+"<br>Elapsed milliseconds since January 1,1970:"+c+"<br>Elapsed minutes since January 1,1970:"+c/60000)
// Task 7
// var a=new Date()
// var b=a.getHours()
// if (b>=12) {
// 	alert("Its AM")
// }else{
// 	alert("Its PM")
// }
// Task 8
// var a=new Date("December 31,2020")
// var laterDate=(a)
// document.write("Later date:"+laterDate)
// Task 9
// var a=new Date()
// var b=new Date("April 24,2020")
// var c=a.getTime()-b.getTime()
// var d=c/(1000*60*60*24)
// var e=Math.floor(d)
// document.write(e+" days have passed since 1st Ramadan,2020.")
// Task 10
// var a=new Date("Jan 01 2015 00:00:00 GMT+0500(PKT)")
// var b=new Date("Sat Dec 05 2015 22:50:16 GMT+0500(PKT)")
// var c=b.getTime()-a.getTime()
// var d=Math.floor(c/(1000*60))
// document.write("On reference date "+b+"<br>"+d+" seconds had passed since beginning of 2015 ")
// Task 11
// var a=new Date()
// var b=new Date()
// var c=b.setHours(a.getHours()-1)
// document.write("Current Date:"+a+"<br>1 hour ago,it was "+b)
// Task 12
// var a=new Date()
// var b=new Date()
// var c=b.setFullYear(a.getFullYear()-100)
// alert("Current Date:"+a+"\n100 years back,it was "+b)
// Task 13
// var a=+prompt("Enter your age")
// var b=new Date()
// var c=b.getFullYear()
// var d=c-a
// document.write("Your age is "+a+"<br>Your birth year is "+d)
// Task 14
// var a=prompt("Enter your name to see your bill fot this month")
// var b=new Date()
// var months = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
// var c=445
// var d=20
// var e=350
// var f=c*d
// var g=f+e
// document.write("<h1>K-Electric bill</h1><br>Customer Name:"+a+"<br>Month:"+months[b.getMonth()]+
// 	"<br>Number of units:"+c+"<br>Charges per unit:"+d+"<br><br>Net Amount Payable (within Due Date):"+
// 	f+"<br>Late payment surcharge:"+e+"<br>& Gross Amount Payable (after Due Date):"+g)