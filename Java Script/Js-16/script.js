var arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr);

var s = prompt("slice yoki splice ni tanlang").trim();

switch (s) {
    case "slice":
        var slice = prompt("qayerdan qayergacha chiqishini xoxlaysiz").trim();
        var g = slice.split(" ");
        var a = g[0];
        var b = g[1];
        alert(arr.slice(a, b));
        break;
    case "splice":
        var splice = prompt("qayerdan qayergacha chiqishini xoxlaysiz").trim();
        var splice2 = splice.split(" ");
        var b = +splice2[0];
        var n = +splice2[1];
        var m = +splice2.splice(3);
        arr.splice(b, n, m)
        console.log(arr);
        break;

    default:
        alert("amal notog'ri")
        break;
}