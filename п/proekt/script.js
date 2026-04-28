const car = [
  {
    Brend: "Kia",
    Model: "Kia K5",
    Yili: 2024,
    Quvvati: "180 HP",
    Turi: "Petrol",
    Kafolat: "5 yil",
    Narxi: "$28,000",
  },
];

let div1 = document.getElementById("div-one");
let divtwo = document.getElementById("");
let divthere = document.getElementById("");
let divfour = document.getElementById("");
let divfive = document.getElementById("");
let divsix = document.getElementById("");

car.forEach((car) => {
  div1.innerHTML += `
    <span class="badge">ELECTRIC SUV</span>
          <h2>${car.Brend}</h2>
          <p class="subtitle">Innovatsion elektr krossover</p>
          <ul class="specs">
            <li><span>Yili:</span> <strong>${car.Yili}</strong></li>
            <li><span>Quvvati:</span> <strong>${car.Quvvati}</strong></li>
            <li><span>Turi:</span> <strong class="green">${car.Turi}</strong></li>
            <li><span>Batareya:</span> <strong>${car.Quvvati}</strong></li>
            <li><span>Narxi:</span> <strong>${car.Narxi}</strong></li>
          </ul>
          <button class="btn-more">Batafsil ma'lumot</button>`;
});

console.log(div1);
