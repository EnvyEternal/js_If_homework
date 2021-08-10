/*
// 6
let month = prompt("Enter your number month");
let seasons = ['Winter', 'Spring', 'Summer', 'Autumn']; 

if (month >= 1 && month <= 12){ 
    alert ("Your season is " + seasons[Math.floor(month % 12 / 3)])    
} else {alert("This month doesn`t exist")};
*/
/*
// 7 
let a = Number(prompt("First number"));
let b = Number(prompt("Secont Number"));

if (a <= 1 && b > 5){
    alert(a + b)
} else {
    alert(a - b)
}

*/
/*
// 8 
let amount = prompt("Enter product quantity");
let price = prompt("Enter price of product");
let sum = amount * price;

if (sum >= 500 && sum <= 499){
    alert("To pay " + (sum * 0.98) + "$")
} else if (sum >= 800){
    alert("To pay " + (sum * 0.97) + "$")
} else {
    alert("You doesn`t have any discount")
}
*/
//9
let x = Number(prompt("Enter X"));
let y = Number(prompt("Enter Y"));
let r = Number(prompt("Enter R"));
let k = r * r;
let sum = (x*x + y*y);
if(k>=sum){
    alert("The point belongs to the circle")
} else {
    alert("Dot does not belong to the circle")
}
