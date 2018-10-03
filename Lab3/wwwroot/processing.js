// let form = document.getElementById('beverage-form');
// document.getElementById("beverage-submit").addEventListener("click", function(){
//     form.submit();
// });

// let x = document.forms[0].elements[0];
// document.write(x);

let submitBtn = document.querySelector('#bev-submit');
let p = document.querySelector('#tester');
let cust = document.querySelector('#cust');
let items = document.querySelector('items');
let total = document.querySelector('#total');
submitBtn.onclick = function () {
    let beverage = document.querySelector('#beverage').value;
    let quantity = document.querySelector('#quantity').value;

    
    p.innerHTML = 'test';
    cust.innerHTML = "test";

};