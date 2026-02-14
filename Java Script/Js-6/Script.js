var matn = prompt("Matn kiriting").trim();

var xarf = prompt("xarf kiriting");

var xisobchi = 0;

for (var i = 0; i < matn.length; i++) {
    if (matn[i] === xarf) {
        xisobchi++;
    }
}

alert( xisobchi );
