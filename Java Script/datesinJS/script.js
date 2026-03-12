var a = prompt("Tug'ulgan kun,oy,yil kiriting").trim();

var time = new Date(a);

var now = new Date();

var res = now.getTime() - time.getTime();

var sekund = res / 1000;
var munit = sekund / 60;
var soat = munit / 60;
var kun = soat / 24;
var oy = kun / 30;
var yil = oy / 12;

console.log("yil " + Math.trunc(yil));
console.log("oy " + Math.trunc(oy));
console.log("kun " + Math.trunc(kun));
console.log("soat " + Math.trunc(soat));
console.log("munit " + Math.trunc(munit));
console.log("sekund " + Math.trunc(sekund));
