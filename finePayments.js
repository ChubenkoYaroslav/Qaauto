"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");


let DB = data.finesData;


buttonSubmit.addEventListener('click',payFine);
function payFine(){


function payFine() {
  let enteredFineNumber = fineNumber.value;
  let enteredPassport = passport.value;
  let enteredCreditCardNumber = creditCardNumber.value;
  let enteredCvv = cvv.value;
  let enteredAmount = amount.value;

  let selectedFine = DB.find((fine) => fine.номер === enteredFineNumber);

  if (!selectedFine) {
    alert("Номер не співпадає");
    return;
  }

  if (selectedFine.сума !== parseInt(enteredAmount)) {
    alert("Сума не співпадає");
    return;
  }

  let passportRegex = /^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$/;
  if (!passportRegex.test(enteredPassport)) {
    alert("Не вірний паспортний номер");
    return;
  }

  let creditCardRegex = /^\d{16}$/;
  if (!creditCardRegex.test(enteredCreditCardNumber)) {
    alert("Не вірна кредитна картка");
    return;
  }

  let cvvRegex = /^\d{3}$/;
  if (!cvvRegex.test(enteredCvv)) {
    alert("Не вірний cvv");
    return;
  }

  DB = DB.filter((fine) => fine.номер !== enteredFineNumber);

  fineNumber.value = "";
  passport.value = "";
  creditCardNumber.value = "";
  cvv.value = "";
  amount.value = "";

  alert("Оплата пройшла успішно!");
  console.log("Оплата пройшла успішно. База даних оновлена:", DB);
}

