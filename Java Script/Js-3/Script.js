var ism = prompt("Ismingizni kiriting:");

if (ism === null) {
    alert("Ism kiriting");
} else
    if (ism.trim().length < 3) {
        alert("Ism juda qisqa");
    } else {
        var matn = prompt("Nimaga universitet kirishni xohlaysiz");
        var natija = matn.replaceAll("universitet", "alicode");

        alert("Natija " + natija);
    }
