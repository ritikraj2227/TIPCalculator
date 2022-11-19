var count = document.getElementById("countdisp");
var plus = document.getElementById("plusbtn");
var minus = document.getElementById("minusbtn");
var reset = document.getElementById("resetbtn");
var score = 0;

plus.addEventListener("click", () => {
  score++;
  count.innerHTML = score;
});
minus.addEventListener("click", () => {
  score = Math.max(0, score - 1);
  count.innerHTML = score;
});


var button = document.getElementById("getbill");

button.addEventListener("click", function (event) {
  var billamount = document.getElementById("billamount");
  billamount = Number(billamount.value);
  if (billamount == 0 || billamount == "" || isNaN(billamount)) {
    alert("Enter Proper Bill Amount..");
    return false;
  }
  var tipamount = document.getElementById("tipamount");
  tipamount = Number(tipamount.value);
  if (tipamount == "" || isNaN(tipamount)) {
    alert("Enter Proper Tip Amount..");
    return false;
  }
  tipamount = tipamount / 100;

  var totaltip = tipamount * billamount;
  var totalbill = billamount + totaltip;

  var tipdisp = document.getElementById("tipdisp");
  tipdisp.innerText = totaltip.toFixed(3);

  var billdisp = document.getElementById("billdisp");
  billdisp.innerText = totalbill.toFixed(3);

  var billperperson = document.getElementById("totalbillperperson");

  var countvalue = document.getElementById("countdisp").innerHTML;

  if (countvalue == 0) {
    billperperson.innerHTML = totalbill / 1;
  } else{
    billperperson.innerHTML = (totalbill / countvalue).toFixed(3);
  }
});


reset.addEventListener("click", () => {
  score = 0;
  count.innerHTML = score;
  // window.location.reload("Refresh");

  tipdisp.innerHTML = '000';
  billdisp.innerHTML = '000';
  var billperson = document.querySelector('.billperperson');
  billperson.innerHTML = '000';

});