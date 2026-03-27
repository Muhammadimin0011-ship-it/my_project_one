var number = +prompt("Nechta raqam kerak?").trim();

var number555 = [];

function numberr() {
    var operators = ["90", "91", "93", "94", "95", "97", "98", "99", "88", "20"];
    
    var operator = operators[Math.floor(Math.random() * operators.length)];
    
    var part1 = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    var part2 = Math.floor(Math.random() * 100).toString().padStart(2, "0");
    var part3 = Math.floor(Math.random() * 100).toString().padStart(2, "0");
    
    return `+998 (${operator}) ${part1} ${part2} ${part3}`;
}

for (var i = 0; i < number; i++) {
    number555.push(numberr());
}

console.log(number555);