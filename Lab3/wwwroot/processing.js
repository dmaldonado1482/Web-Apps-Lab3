let submitBtn = document.querySelector('#bev-submit');
let p = document.querySelector('#tester');
let cust = document.querySelector('#cust');
let items = document.querySelector('#items');
let total = document.querySelector('#total');

let prices = {
    "Coffee": 4.99,
    "Tea": 3.99,
    "Beer": 6.99,
    "Wine": 12.99
};

submitBtn.onclick = function () {
    let beverage = document.querySelector('#beverage');
    let i = beverage.selectedIndex;
    let bevChoice = beverage.options[i].text;
    let quantity = Number(document.querySelector('#quantity').value);
    let customer = document.querySelector('#custName').value;
    let output = document.querySelector("#info");

    let birthdate = new Date(document.querySelector('#birthdate').value);
    let birthdateMoment = moment(birthdate);
    let date = moment().subtract(21, 'years').calendar();
    let age = moment().diff(birthdateMoment, 'years');

    if (bevChoice == "Beer" || bevChoice == "Wine") {
        if (age <= 21) {
            output.innerHTML = "You must be born before " + date;
        }
        else {
            cust.innerHTML = customer;
            items.innerHTML = quantity + ' ' + bevChoice + ' @ ' + prices[bevChoice];
            total.innerHTML = 'Total: $' + (prices[bevChoice] * quantity);
        }
    }
    else {
        cust.innerHTML = customer;
        items.innerHTML = quantity + ' ' + bevChoice + ' @ ' + prices[bevChoice];
        total.innerHTML = 'Total: $' + (prices[bevChoice] * quantity);
    }



};