// Task 1
// var a=prompt("Enter your first name")
// var b=prompt("Enter your Last name")
// var fullName=a+" "+b
// alert("Welcome "+fullName)
// Task 2
// var a=prompt("Enter your favourite mobile phone model")
// var b=a.length;
// document.write("My favourite phone is:"+b+"<br>Length of string:"+b)
// Task 3
// var a="Pakistani"
// var b=a.indexOf("n")
// document.write("String:"+a+"<br>Index of 'n':"+b)
// Task 4
// var a="Hello World"
// var b=a.lastIndexOf("l")
// document.write("String:"+a+"<br>Last Index of 'l':"+b)
// Task 5
// var a="Pakistani"
// var b=a.charAt(3)
// document.write("String:"+a+"<br>Character at index '3':"+b)
// Task 6
// var a=prompt("Enter your first name")
// var b=prompt("Enter your Last name")
// var c=a.concat(b)
// alert("Welcome "+c)
// Task 7                                                                                                                                                        
// var a="Hyderabad"
// var c=a.replace(/Hyder/,"Islam")
// document.write("City:"+a+"<br>After replacement:"+c)
// Task 8
// var message ="Ali and Sami are best friends. They play cricket and football together.";
// var a=message.replace(/and/g,"&")
// document.write(a)
// Task 9
// var a="472"
// var b=parseInt(a,10)
// document.write("Value:"+a+"<br>Type:"+typeof(a)+"<br>Value:"+b+"<br>Type:"+typeof(b))
// Task 10
// var a=prompt("Enter any Word")
// var b=a.toUpperCase()
// document.write("User input:"+a+"<br>Upper case:"+b)
// Task 11
// var a=prompt("Enter any Word")
// var b=a.slice(0,1)
// var c=a.slice(1)
// var d=b.toUpperCase()
// var e=c.toLowerCase()
// var f=d+e
// document.write("User input:"+a+"<br>Title case:"+f)
// // Task 12
// var num = 35.36 ;
// var a=num.toString()
// var b=a.slice(0,2)
// var c=a.slice(3,5)
// document.write("Number:"+num+"<br>"+"Result:"+b+c)
// Task 13
// var username=prompt("Enter your username")
// var a=username.length;
// for(var i=0;i<a;i++){
// 	if(username.slice(i,i+1)==="@"||"!"||","||"."){
// 		alert("Invalid username")
// 	}else{
		
// 	}
// break
// }
// Task 14
// var a = prompt("Welcome to our bakery,What do you want to order sir/mam?")
// a=a.toLowerCase()
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(a===A[0]) {
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
//  	else{
//         document.write("We are sorry." + a + " is <b>not available</b> in our bakery")
//     }
// Task 15
// var a=prompt("Enter your password:")
// var b=a.split(' ')
// for (var i=0;i<a.length;i++){
//     if(a.length>=6||a.length<6){
//     if(a.length<6){
//         alert("It must be 6 Character long")
//     }   
//     else if(a.slice(0,1)>=0){
//         alert("Must start with a letter")
//     } 
//     else if(a[i]>="a" ||a[i]>=0&& a[i]<="z"||a[i]>="A" && a[i]<="Z") {
//         alert("Valid password")
//     }
// }break
// }
// Task 16
// var university = "University of Karachi";
// var a=university.split("")
// for(var i=0;i<university.length;i++){
// 	document.write(a[i]+"<br>")
// }
// Task 17
// var a="Pakistan"
// var b=a.charAt(7)
// document.write("User input:"+a+"<br>Last charater of input:"+b)
// 
// Task 18
// var a="The quick brown fox jumps over the lazy dog"
// document.write("Text:"+a+"<br>"+"There are "+a.match(/the/gi).length+" occurence(s) of word 'the'")