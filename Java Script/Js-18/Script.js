var sozlar = prompt("matn yoki son yozing").trim();
var arr = sozlar.split(" ");

var tanlash = prompt("nma qilishni tanlang").trim();

switch (tanlash) {
    case "a-z":
        arr.sort();
        alert(arr.join(" "))
        break;
    case "z-a":
        arr.sort().reverse();
        alert(arr.join(" "));
        break;
    default:
        alert("amal notog'ri bajarilgan")
        break;
}