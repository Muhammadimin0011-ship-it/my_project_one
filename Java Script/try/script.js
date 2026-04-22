function count(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    count(n - 1);
}
count(12);



var a = (function () {
    console.log("Hello world!");
})()