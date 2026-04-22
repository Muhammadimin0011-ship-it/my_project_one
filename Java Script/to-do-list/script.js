const input = document.getElementById("inputname");
const result = document.getElementById("result");

let user = [];
function addtoARR() {
    user.push({
        name: input.value
    });
    input.value = "";
    addtofunction()
};
function addtofunction() {
    result.innerHTML = "";
    user.map((i) =>
    (result.innerHTML +=
        `<h3>
        ${i.name}
        </h3>`
    ))
}