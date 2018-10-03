// let form = document.getElementById('beverage-form');
// document.getElementById("beverage-submit").addEventListener("click", function(){
//     form.submit();
// });

// let x = document.forms[0].elements[0];
// document.write(x);

let submitBtn = document.querySelector('#bev-submit');
let p = document.querySelector('#tester');
let cust = document.querySelector('#cust');
let items = document.querySelector('#items');
let total = document.querySelector('#total');

let prices1 = [
    { bev: "Coffee", price: 4.99 },
    { bev: "Tea", price: 3.99 },
    { bev: "Beer", price: 6.99 },
    { bev: "Wine", price: 12.99 }
];

let prices = {
    "Coffee": 4.99,
    "Tea": 3.99,
    "Beer": 6.99,
    "Wine": 12.99
};

submitBtn.onclick = function () {
    let beverage = document.querySelector('#beverage');
    let i = beverage.selectedIndex;
    let bevChoice = beverage.options[i].text;   // beverage option
    let quantity = Number(document.querySelector('#quantity').value);
    let customer = document.querySelector('#custName').value;

    let birthdate = new Date(document.querySelector('#birthdate').value);
    let birthdateMoment = moment(birthdate);
    let birthdateFormatted = birthdateMoment.format("l");
    let date = moment().subtract(21, 'years').calendar();

    if (date < birthdateMoment) {
        p.innerHTML = "Test";
    }
    else {
        p.innerHTML = "TESTTESTTEST";
    }

    cust.innerHTML = customer;
    items.innerHTML = quantity + ' ' + bevChoice + ' @ ' + prices[bevChoice];
    total.innerHTML = 'Total: $' + (prices[bevChoice] * quantity);

};