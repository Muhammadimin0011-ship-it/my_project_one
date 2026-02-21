var a = prompt("qoshib ayiring").trim();


var b = a.split(" ");

var c = Number(b[0]);
var d = b[1];
var e = Number(b[2]);


switch (d) {
    case "+":
        alert(c + e)
        break;



    case "-":
        alert(c - e)
        break;


    case "*":
        alert(c * e)
        if (e = "0") {
            console.log("raqamlarni nolga bolib bolmaydi");
            
        }
        break;


    case "/":
        alert(c / e)
        break;

    default:
        alert("amal notog'ri bajarildi");


}