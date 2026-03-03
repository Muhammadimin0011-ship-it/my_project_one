var text = prompt("Ism kiriting:").trim();
var arr = "";

for (var i = text.length - 1; i >= 0; i--) {
    arr +=text[i];
}

console.log(arr);