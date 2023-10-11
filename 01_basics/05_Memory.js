//stack is copy 
//heap is reference
let userOne = {
    email : "user1@gmail.com",
    upi: " user1@paytm"
}
let usertwo = userOne
usertwo.email = "hitesh2gmail.com"
console.log(userOne.email);
console.log(usertwo.email);