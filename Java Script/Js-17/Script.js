var arr = ["+998886455044", "+998885118588", "+998507302528"];

var tel = prompt("telefon raqamingizni kirtiting (+998999999999)").trim();

if (arr.includes(tel)) {
    alert("Siz oldin registratsiya qilgansiz");
} else {
    var tel2 = prompt("Sizning raqamingiz sistemada toplimadi shuning uchun yangi parol kiriting").trim();
    alert("Siz muvaffaqiyatli registratsiya qildingiz🥳");
}