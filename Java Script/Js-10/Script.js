var a = prompt("amalni kiriting").toString();

var b = a.split(" ")

var son1 = Number(b[0])
var c = b[1]
var son2 = Number(b[2])



switch (c) {
    case "+":
        alert(son1 + son2)
        break;


    case "-":
        alert(son1 - son2)
        break;


    case "*":
        alert(son1 * son2)
        if (c = 0) {
            alert("raqamni nolga bolib bolmaydi")
        }
        break;


    case "/":
        alert(son1 / son2)
        break;

    default:
        alert("amal notog'ri bajarilgan")


}