function createGradient() {

  const number = document.getElementById("count").value;
  const result = document.getElementById("result");

  result.innerHTML = "";

  const gradients = [
    "radial-gradient(red, yellow)",
    "conic-gradient(red, yellow, green)",
    "linear-gradient(to right, blue, purple)"
  ];

  for (let i = 0; i < number; i++) {

    const div = document.createElement("div");
    div.className = "box";

    div.style.background = gradients[i % gradients.length];

    result.appendChild(div);
  }
}