var text = prompt("Uzunroq matn yozing (olma,anor,banan)").trim();

var words = text.split(",");

for (var i = 0; i < words.length; i++) {
    console.log((i + 1) + " 👉 " + words[i]);
}