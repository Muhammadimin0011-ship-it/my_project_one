function number() {
    return Math.trunc(Math.random() * 1000000000)
    .toString()
    .padEnd(10,0);
}
console.log("+1 " + number());
