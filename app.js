const bill_amount = document.getElementById("bill_amnt");
let a;
const guests = document.getElementById("guests");
let b;
const quality = document.getElementById("quality");
let c;
const btn = document.querySelector(".btn");
let d;
const output = document.querySelector(".output");



btn.addEventListener("click",()=>{
    a=bill_amount.value;
    b=guests.value;
    c=quality.value;
    d = (a*c)/b;
    console.log(d)
    output.innerHTML=`Everybody will have to pay ${d}`;
    output.style.visibility = "visible";
    bill_amount.value="";
    guests.value="";
    quality.value="";


})
output.addEventListener('click', ()=>{
    output.style.visibility="hidden";
})

