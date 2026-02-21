var a = +prompt("Son kiriting").trim()

var b = prompt("amalni kiriting(+,-,/,*)").trim()

var c = +prompt("Son kiriting").trim()


switch (b) {
    case "+":
        console.log(a + c);
        break;


    case "-":
        console.log(a - c);
        break;


    case "/":
        if (c == "0") {
            console.log("nolga bolib bolamydi");
        }
        console.log(a / c);
        break;


    case "*":
        console.log(a * c);
        break;

    default:
        console.log("amal notog'ri kiritilgan");

}

