let cardNumber = "3098090909090912"

if(cardNumber.length == 16){
    /^4/.test(cardNumber) ? console.log("It's a Visa Card") : /^(2|5)/.test(cardNumber) ? console.log("It's a Master Card") : /^3/.test(cardNumber) ? console.log("It's a American Card") : console.log("Invalid Card Number")
}
else{
    console.log("Invalid Card Number")
}