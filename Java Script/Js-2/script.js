var a = "Hello world h  ello world"

console.log(a.length);
console.log(a.length);

console.log(a.charAt(3));
console.log(a.charAt(7));

console.log(a.codePointAt(7));
console.log(a.codePointAt(5));

console.log(a.concat("salom"));
console.log(a.concat("hayr"));

console.log(a.at(-2));
console.log(a.at(-4));

console.log(a.slice(-5));
console.log(a.slice(-8));

console.log(a.substring(5));
console.log(a.substring(3));

console.log(a.isWellFormed());
console.log(a.isWellFormed());

console.log(a.padEnd(20, "*"));
console.log(a.padEnd(25, "*"));

console.log(a.repeat(19));
console.log(a.repeat(35));

console.log(a.replace(/world/g));
console.log(a.replace(/Hello/g));

console.log(a.split(" "));
console.log(a.split("|"));
