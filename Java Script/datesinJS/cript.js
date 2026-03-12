var userDate = prompt("Sana kiriting (YYYY-MM-DD formatida)").trim();

var dateObj = new Date(userDate);

var choice = prompt("Day, Month, Year, Hour, Minute kiriting:").toLowerCase().trim();

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

switch(choice) {
    case "day":
        console.log("Kun: " + days[dateObj.getDay()]);
        break;
    case "month":
        console.log("Oy: " + (dateObj.getMonth() + 1));
        break;
    case "year":
        console.log("Yil: " + dateObj.getFullYear());
        break;
    case "hour":
        console.log("Soat: " + dateObj.getHours());
        break;
    case "minute":
        console.log("Minut: " + dateObj.getMinutes());
        break;
    default:
        console.log("Noto'g'ri tanlov");
}