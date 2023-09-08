// Q.1
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1+num2;
// document.write("sum of " + num1 + " and "+ num2 + " is " + result);

// Q.2
// //for subtr
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1-num2;
// document.write("subtraction of " + num1 + " and "+ num2 + " is " + result);

// for multipliy
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1*num2;
// document.write("multiplication of " + num1 + " and "+ num2 + " is " + result);

// for div
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1/num2;
// document.write("division of " + num1 + " and "+ num2 + " is " + result);

// for mod
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1%num2;
// document.write("modulus of " + num1 + " and "+ num2 + " is " + result);

// Q.3
// var num;
// document.write("Value after variable declaration is: "+num+"<br>");
// num=5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment is: "+num+"<br>");
// num=+7;
// document.write("Value after addition is: "+num+"<br>");
// num--;
// document.write("Value fater decrement is: "+num+"<br>");
// num=num%3;
// document.write("The remainder = "+num+"<br>");

// Q.4
// var tick = 600, x=5;
// var tickCost=tick*x;
// document.write("Total cost to buy 5 tickets to a movie is: "+tickCost+" Pkr"+"<br>");

// Q.5 
// var x=4,i,y;
// document.write("Table of 4");
// for(i=1;i<=12;i++){
//     y=x*i;
//     document.write("<br>4*"+i+"="+y);
// }

// Q.6
// var c = +prompt("Enter temp in celcius: ");
// var f = +prompt("Enter temp in farenheit: ");
// cf = (f - 32);
// cf=cf*(5/9);
// ff = (c * 9)/5 + 32;
// document.write(c+"C is "+ff+"F"+"<br>"); 
// document.write(f+"F is "+cf+"C"+"<br>"); 

// Q.7
// var item1=650;
// var item2=100;
// var Quantity1=3;
// var Quantity2=7;
// var Shipping=100;
// var Total=((item1*Quantity1)+(item2*Quantity2)+Shipping);
// document.write("Price of item 1 is "+item1);
// document.write("<br>Quantity of item 1 is "+Quantity1);
// document.write("<br>Price of item 2 is "+item2);
// document.write("<br>Quantity of item 2 is "+Quantity2);
// document.write("<br>Shipping charges "+ Shipping);
// document.write("<br>Total cost of your order is "+Total);

// Q.8

// var mark = +prompt("Enter your marks: ");
// var tmark = +prompt("Enter total marks: ");
// document.write("Total marks: "+tmark+"<br>");
// document.write("Marks Obtained: "+mark+"<br>");
// var percent = (mark/tmark)*100;
// document.write("Percentage: "+percent+"%<br>");

// Q.9

// var d = 306.27;
// var r = 81.66;
// var dn = 10;
// var rn = 25;
// var tCurrency = (d*dn)+(r*rn);
// document.write("<h1>Currency in PKR</h1><br>");
// document.write("Total currency in PKR: "+tCurrency+"<br>");


// Q.10
// var num=10;
// var result=(((num+5)*10)/2);
// document.write(result);

// Q.11
// var cYear = 2023;
// var bYear = +prompt("Enter your birth year: ");
// document.write("<h1>Age Calculator</h1><br>");
// document.write("<br>Current Year: "+cYear+"<br>");
// document.write("Birth Year: "+bYear+"<br>");
// age = cYear - bYear;
// document.write("Your age is: "+age+"<br>");

// Q.12
// var radius=18;
// var circumference=(2*3.142*radius);
// var area=(3.142*(radius*radius));
// document.write("Radius of s circle: "+radius);
// document.write("<br>The circumference is: "+circumference);
// document.write("<br>The area is: "+area);

// Q.13
var favSnack = prompt("Enter your favourite snack: ");
var currAge = +prompt("Enter your current age: "); 
var maxAge = +prompt("Enter maximum age: "); 
var estiAmount = +prompt("Enter estimated amount per day: ");
document.write("Favourite Snack: "+favSnack+"<br>");
document.write("Current age: "+currAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+estiAmount+"<br>");
var calculate = (estiAmount*365)*(maxAge-currAge);
document.write("You will need "+calculate+" "+favSnack+" to last until you ripe the old age of "+maxAge+"<br>");