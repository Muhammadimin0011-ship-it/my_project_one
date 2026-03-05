var a = +prompt("xona devrini uzunligini kirting").trim();
var b = +prompt("xona devrini enini kirting").trim();

var eshikSoni = +prompt("oynalar sonini kiriting").trim();

var eshikploshadi = 0;

for (var i = 1; i <= eshikSoni; i++ ){

    var uzunlikeshik = +prompt(i + "-ehik uzunligini kiriting:")

    var enieshik = +prompt(i + "-ehik enini kiriting:");

    var ploshad2 = uzunlikeshik * enieshik;

    eshikploshadi += ploshad2;
}

var oynaSoni = +prompt("oynalar sonini kiriting").trim();

var oynaploshadi = 0;

for (var i = 1; i <= oynaSoni; i++ ){

    var uzunlik = +prompt(i + "-oyna uzunligini kiriting:")

    var eni = +prompt(i + "-oyna enini kiriting:");

    var ploshad = uzunlik * eni;

    oynaploshadi += ploshad;
}

var result = 2 * (a + b);

var result2 = result - (oynaploshadi + eshikploshadi);

alert(result2);