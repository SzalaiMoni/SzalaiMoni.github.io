function calcAmount() {
    let price = 1200;
    let quantity = document.querySelector ("input[name='quantity']");
    let sauce = document.querySelector ("#sauce");
    let extra = document.querySelector ("#topping");
    let showAmount = document.querySelector ("span.show-amount");
    let amount = parseInt (quantity.value) * (price + parseInt (sauce.value) + parseInt (extra.value));
    
    if (amount < 5000) {
        amount = amount + 500;
    }

    showAmount.innerHTML = amount;
}

let sauce = [
    "hagyományos (+0Ft)",
    "csípős (+100Ft)"
];
let sauceSelect = document.querySelector("#sauce");
let index = 0;
while (index < sauce.length) {
    let option = document.createElement("option");
    let osszeg = "";
    switch (index) {
        case 0: osszeg = 0;
        break;
        case 1: osszeg = 100;
        break;
        default: osszeg = 0;
    }
    option.value = osszeg;
    option.innerHTML = sauce[index];
    sauceSelect.appendChild(option);
    index++;
}

let topping = [
    "nem kérek",
    "sajt (+300Ft)",
    "bacon (+400Ft)",
    "dupla hús (+1.000Ft)",
    "sajt és bacon (+700Ft)",
    "sajt és dupla hús (+1.300Ft)"
];
let toppingSelect = document.querySelector("#topping");
index = 0;
while (index < topping.length) {
    let option = document.createElement("option");
    let osszeg = "";
    switch (index) {
        case 0: osszeg = 0;
        break;
        case 1: osszeg = 300;
        break;
        case 2: osszeg = 400;
        break;
        case 3: osszeg = 1000;
        break;
        case 4: osszeg = 700;
        break;
        case 5: osszeg = 1300;
        break;
    }
    option.value = osszeg;
    option.innerHTML = topping[index];
    toppingSelect.appendChild(option);
    index++;
}