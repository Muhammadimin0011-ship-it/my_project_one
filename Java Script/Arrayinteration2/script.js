var user = [ { name: "Ali", age: 17 },
  { name: "Vali", age: 22 },
  { name: "Sardor", age: 19 },
  { name: "Zafar", age: 15 }
];


var filter = user.filter((value) => {
    return value.age > 18
})


console.log(filter);
