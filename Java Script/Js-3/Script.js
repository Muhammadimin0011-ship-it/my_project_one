let ism = prompt("Ismingizni kiriting:").trim();

if (ism === null) {
    alert("Ism kiriting");
} else
    if (ism.trim().length < 3) {
        alert("Ism juda qisqa");
    } else {
        let matn = prompt("Nimaga universitet kirishni xohlaysiz").trim;
        let natija = matn.replaceAll("universitet", "alicode");

        alert(natija);
    }
