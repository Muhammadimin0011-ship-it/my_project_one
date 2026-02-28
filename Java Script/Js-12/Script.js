var name = prompt("Ism kiriting:").trim();
var arr = [];

for (var i = name.length - 1; i >= 0; i--) {
    arr.push(name[i]);
}

console.log(arr);