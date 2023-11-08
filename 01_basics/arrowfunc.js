// const user = {
//     username : "harshit",
//      price : 999,

//      WelcomeMessage : function(){
//         console.log ( `${this.username}, welcome to website `);
//         console.log(this);
//      }
// }
// user.WelcomeMessage()
// function chai () {
//     let username = "harshit";
//     console.log(this.username);
// }
// chai();
const chai = ()=>{
    let username = "harshit"
    console.log(this);
}
chai();
const addtwo = (num1 , num2) => (num1 + num2); // Implicit Return
console.log(addtwo(3,4));