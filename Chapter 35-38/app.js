// Task 1
// function date(){
// 	alert(new Date)	
// }
// date()
// Task 2
// function fullName(firstName,lastName){
// 	var firstName=prompt("Enter your First name")
// 	var lastName=prompt("Enter your Last name")
// 	alert("Welcome "+firstName+lastName)
// }
// fullName()
// Task 3
// function sum(a,b){
// 	var a=+prompt("Enter first value")
// 	var b=+prompt("Enter second value")
// 	return a+b
// }
// sum()
// Task 4
// function calc(num1,num2,opr){
// 	if (opr==="+") {
// 		return num1+num2
// 	}
// 	else if (opr==="-") {
// 		return num1-num2
// 	}
// 	else if (opr==="*") {
// 		return num1*num2
// 	}
// 	if (opr==="/") {
// 		return num1/num2
// 	}
// }
// var a=calc(5,5,"+")
// var b=calc(5,5,"-")
// var c=calc(5,5,"*")
// var d=calc(5,5,"/")
// document.write(a+"<br>")
// document.write(b+"<br>")
// document.write(c+"<br>")
// document.write(d+"<br>")
// Task 5
// var number=+prompt("Enter any number")
// function square(number) {
//   return number*number
// }
// square()
// alert("The square of "+number+" is "+square(number))
// Task 6
// function factorial(x) { 
//   if (x == 0){
//     return 1;
// }
//   return x * factorial(x-1);       
// }
// document.write(factorial(9))
// Task 7
// function counting(){
// 	var a=+prompt("Enter starting number:")
// 	var b=+prompt("Enter end number:")
// 	for(i=a;i<=b;i++){
// 		document.write(i+"<br>")
// 	}
// }
// counting()

// Task 8
// function calculateHypotenuse(){
// 	function calculateSquare(b,p){
// 		var b=+prompt("Enter Base")
// 		var p=+prompt("Enter perpendicular")
// 		return b*b+p*p
// 		}return calculateSquare()
// 	}
// document.write("The hypotenuse is "+calculateHypotenuse())
// Task 9
// var height = 9
// function area (height,width) {
// 	return height * width;
// }

// document.write("The area of your rectangle is " + area(height,width=9));
// Task 10
// var a=prompt("Enter any word to check")
// var check=""
// function palindrome(){
// 	for(var i=a.length-1;i>=0;i--){
// 		check+=a[i]
// 	}
// 	if (check===a) {
// 		return a
// 	}
// }
// document.write(palindrome()+" is a palindrome word.")
// Task 11
// var a="the quick brown fox"
// function uppercase(){
// 	var b=a.split(" ")
// 	for(var i=0,x=b.length;i<x;i++){
// 		b[i]=b[i][0].toUpperCase()+b[i].substr(1)
// 	}
// 	return b.join(" ")
// }
// document.write("EXAMPLE STRING :"+a+"<br>EXPECTED OUTPUT :"+uppercase(a))
// Task 12
// function longword(a)
// {
//   var b = a.match(/\w[a-z]{0,}/gi);
//   var c = b[0];

//   for(var i = 1 ; i < b.length ; i++)
//   {
//     if(c.length < b[i].length)
//     {
//     c = b[i];
//     } 
//   }
//   return c;
// }
// document.write("Longest word:"+longword('Saylani Welfare Trust'));
// Task 13
// function calcoccu(a,b){
// 	var lettercount=0
// 	for(var i=0;i<a.length;i++){
// 		if (a.charAt(i)===b){
// 			lettercount+=1
// 		}
// 	}
// 	return lettercount;
// }
// document.write("The letter occured in the string "+calcoccu('JavaScript','a')+" times.")
// Task 14
// function calcCircumference(radius=3){
// 	return 2*3.14*(radius)
// }
// document.write("The circumference is "+calcCircumference()+"<br>")
// function calcArea(radius=5){
// 	return 3.14*(radius*radius)
// }
// document.write("The area is "+calcArea())