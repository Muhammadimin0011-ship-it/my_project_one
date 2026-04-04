var inputName = document.getElementById("name");
var inputAge = document.getElementById("age")
var output = document.getElementById("tableBody");
var inputlastname = document.getElementById("lastname");
var inputbalance = document.getElementById("balance");
var inputnomer = document.getElementById("nomer");

var listofPerson = [];

function addPersonToArr() {
    listofPerson.push({
        name: inputName.value,
        age: inputAge.value,
        lastname: inputlastname.value,
        balance: inputbalance.value,
        nomer: inputnomer.value
    });
    inputAge.value = "";
    inputName.value = "";
    inputlastname.value = "";
    inputbalance.value = "";
    inputnomer.value = "";
    add()
};

function add() {
    output.innerHTML = "";
    listofPerson.map((i) =>
    (output.innerHTML +=
        `<tr>
                    <th>${i.name}</th>
                    <th>${i.age}</th>
                    <th>${i.lastname}</th>
                    <th>${i.balance}</th>
                    <th>${i.nomer}</th>
                </tr>`)
    )
};



function sortByName() {
    listofPerson.sort(function (a, b) {

        switch (true) {
            case a.name > b.name:
                return 1;

            case a.name < b.name:
                return -1;

            default:
                return 0;
        }

    });

    add();
};



function sortByLastname() {
    listofPerson.sort(function (a, b) {

        switch (true) {
            case a.lastname > b.lastname:
                return 1;

            case a.lastname < b.lastname:
                return -1;

            default:
                return 0;
        }

    });

    add();
}

function sortByAge() {
    listofPerson.sort(function (a, b) {
        return a.age - b.age;
    });

    add();
};



function sortByBalance() {
    listofPerson.sort(function (a, b) {
        return a.balance - b.balance;
    });

    add();
};




function sortByNomer() {
    listofPerson.sort(function (a, b) {
        return a.nomer - b.nomer;
    });

    add();
};


