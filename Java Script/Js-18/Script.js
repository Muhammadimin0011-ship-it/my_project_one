var sozlar = prompt("matn  yozing").trim();
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
    case "katadan-kichkinaga":
        arr.sort((a, b) => b - a);
        alert(arr.join(" "));
        break;
    case "kichkinadan-kataga":
        arr.sort((a, b) => a - b);
        alert(arr.join(" "));
        break;
    default:
        alert("amal notog'ri bajarilgan")
        break;
}