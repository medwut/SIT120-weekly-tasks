/*Q1 begining */
var helloworld = 'Hello I am Ahmed Magrabi the first man on the moon.';
console.log(helloworld[0]);

/*1*/
var Honda = "HONDA";
console.log(Honda.toLowerCase());

/*2*/
let myname = "AhmedMaghrabi";
console.log(myname.length);

/*3*/
var rust= "brinda";
console.log(document.write(rust.charAt(4)));

/*4*/

var rust= "brinda";
console.log(document.write(rust.search("b")));

/*5*/
let text = "Hi My name is Walter White I am the one who Knocks"
console.log(text.endsWith("Knock",29));

/* Reflection within this task part 1 i learnt how to use string methods to find places 
of words and how to filter what charcters i want to see and thier location wihin
a given charchter. This is good as it will allow me to implement some of these features 
in my future projects.*/

/*Q2 This is part 2 with arrays */

let carbrands = ['Honda', 'Toyota', 'Nissan', 'Ford'];

console.log(carbrands.push('Lambo'));
console.log(carbrands);

console.log(carbrands.pop());
console.log(carbrands);

result = carbrands.filter(carbrands => carbrands.length <= 4);
console.log(result);

/* sort method used to sort array in ascending order */
let fifaworldcup = [2022, 2014, 2018, 2010, 2006, 2002]
console.log(fifaworldcup.sort());

/* slice method to only show index 1 and 3 */
console.log(fifaworldcup.slice(1,3));
/*  only gives us 1 parameter */
console.log(fifaworldcup.slice(1));
console.log(fifaworldcup.slice(-1));

/*Reflection within this task part 2 i learnt how to implement methods while using an array
and making it so i can manipulate the locations of indexs within an array change thema nd show remove them
at will this can be very helpful when creating a website as removing things that are wanted will narrow down 
consumers search time finding the item faster.*/

