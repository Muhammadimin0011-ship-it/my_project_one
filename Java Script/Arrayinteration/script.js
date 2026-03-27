var user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

document.getElementById("card").innerHTML = `
<div class="card">

<h2>${user.name}</h2>
<p>@${user.username}</p>

<div class="info">
<b>✉️Email:</b> ${user.email}
</div>

<div class="info">
<b>📞Phone:</b> ${user.phone}
</div>

<div class="info">
<b>🌐Website:</b> ${user.website}
</div>

<div class="info">
<b>🏠Address:</b> ${user.address.city}, ${user.address.street}
</div>

<div class="info">
<b>🏢Company:</b> ${user.company.name}
</div>

</div>
`;