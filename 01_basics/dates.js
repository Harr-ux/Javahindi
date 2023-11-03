//Dates
 
let myDate = new Date()
console.log(myDate.toString());
let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toDateString());
let newDate = new Date()
console.log(newDate);
newDate.toLocaleString('default',
{
    weekday:"long",

    
} )