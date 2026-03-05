var metodlar = prompt("Metod nomini yozing: length, toString, at, join, pop, push, shift, unshift").trim();

var arr = ["apple", "banana", "orange"];

if (metodar === "length") {
    console.log(arr.length);
}

else if (metodlar === "toString") {
    console.log(arr.toString());
}

else if (metodlar === "join") {
    var belgi = prompt("Qaysi belgi bilan qushilsin?");
    console.log(arr.join(belgi));
}

else if (metodlar === "pop") {
    arr.pop();
    console.log(arr);
}

else if (metodlar === "push") {
    var item = prompt("Arrayga qushiladigan element yozing:");
    arr.push(item);
    console.log(arr);
}

else if (metodlar === "shift") {
    arr.shift();
    console.log(arr);
}

else if (metodlar === "unshift") {
    var item = prompt("Boshiga qushiladigan element yozing:");
    arr.unshift(item);
    console.log(arr);
}


