const accountId = 144553;
let accountEmail = "kamelsh@gmail.com"
var accountPassword = "11234";
accountCity = "Bhopal";
let accountState;

// accountId = 3; not allowed

accountEmail = "hello@gmail.com"
accountPassword = "123465"
accountCity = "Pune"

console.log(accountId);

/* 
Prefere not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])