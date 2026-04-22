let res = document.getElementById("res");

function showTime() {
    let time = new Date();

    res.innerHTML = `
        <h1>
            ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}
        </h1>
    `;
}


setInterval(showTime, 1000);

