// Task 1
// function raise(a,b) {
// 	return Math.pow(a,b)
// }
// document.write(raise(8,2))
// Task 2
// function leap(){
// 	var a=+prompt("Enter any Year")
// 	if (a%4==0) {
// 		alert("Its a leap year")
// 	}
// 	else if (a%4!=0) {
// 		alert("No It isn't a Leap Year")
// 	}
// } 
// leap()
// Task 3
// function area (a,b,c){
// 	var  S= ( a + b + c ) / 2
// 	var  R = S-a*S-b*S-c
// 	return S*R	
// }
// document.write(area(60,60,60))
// Task 4
// var a = +prompt("Enter your marks in english out of 50");
// var b = +prompt("Enter your marks in maths out of 50");
// var c = +prompt("Enter your marks in science out of 50");
// var total = a+b+c; 
// function average(){
//     var ave = total/3
//     alert ("your average marks is " + ave)
// }
// function percentage(){
// var per = (total/150)*100 
// alert ("your percentage is " + per + "%")
// }
// function main(){
// percentage()
// average()
// }
// main()
// Task 5
// var a="Ghous"
// var b="h"
// function find(){
// for(var i=0;i<a.length;i++){
// 	if (a[i]==b) {
// 		alert("The Index of "+b+" is "+i)
// 	}
// }
// }
// find()
// Task 6
// var a="Hello World"
// function remvow(){
// 	var b=a.replace(/[aeiou]/gi,"")
// 	document.write(b)
// }
// remvow()
// Task 7
// function vowocc(){
// 	var sent="Pleases read this application and give me gratuity"
// 	var find=0;
// 	    switch (sent) {
//         case 'a':
//             find++;
//         case 'A':
//             find++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }
// document.write(vowocc())
//Task # 8

// var a = +prompt('Enter your value in KM')
// var km = a * 1000;

// document.write( 'METERS:'+ " " + " " +km.toFixed(1) + " meters" + "<br>");

// var f = a *3280.84; 

// document.write( 'FEET:'+ " " + " " + f.toFixed(1) + " feet"  + "<br>");

// var inch = a * 39370.08;

// document.write( 'INCHES:'+ " " + " " +inch.toFixed(1) + "inches"  + "<br>");

// var cent = a *   1000 * 100;

// document.write( 'CENTIMETERS:'+ " " + " " +cent.toFixed(1) + "centimeters" + "<br>");
// Task 9
     // var a = +prompt('Overtime hours')
     // function Overtime(){
     // 	return a*12
     // }       
     //  document.write('Your over time pay is ' + Overtime())
// Task 10
// var a=+prompt("Enter amount to withdraw:")
// var b=a/100
// var c=(a%100)/50
// var d=((a%100)%50)/10
// var e=Math.floor(b)
// var f=Math.floor(c)
// var g=Math.floor(d)
// document.write("You will have "+e+" notes of 100 and "+f+" notes of 50 and "+g+" notes of 10")