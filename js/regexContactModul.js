import { meals } from "./mainModul.js";

let m=new meals()

let ContactUs=document.getElementById("ContactUs")

let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputPhone = document.getElementById("inputPhone");
let inputAge = document.getElementById("inputAge");
let inputPassword = document.getElementById("inputPassword");
let inputRePassword = document.getElementById("inputRePassword");

let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertAge = document.getElementById("alertAge");
let alertPassword = document.getElementById("alertPassword");
let alertRepassword = document.getElementById("alertRepassword");

let submit = document.getElementById("submit");

let success = document.getElementById("success");

let rejexName = /^([A-Z]|[a-z]){3,20}$/;

let rejexEmail = /@([a-z]|[A-Z]){5,10}(\.com)$/;

let rejexPassword = /^.{5,15}$/;

let rejexAge = /^[1-9][0-9]?$|^100$/;

let rejexPhone = /^01[0125][0-9]{8}$/;

// submit.addEventListener("click", validationAll);
validationAll();

function validationAll() {
  if (rejexName.test(inputName.value) == true &&rejexEmail.test(inputEmail.value) == true &&rejexPhone.test(inputPhone.value) == true &&rejexAge.test(inputAge.value) == true &&rejexPassword.test(inputPassword.value) == true &&inputPassword.value == inputRePassword.value
  ) {
    document.getElementById("submit").classList.remove("disabled")
document.getElementById("success").classList.remove("d-none")
  } else {
    document.getElementById("submit").classList.add("disabled")

    document.getElementById("success").classList.add("d-none")

  }

setTimeout(validationAll,100)
}

inputName.onkeyup = function () {
  if (rejexName.test(inputName.value) == true) {
    $("#alertName").addClass("d-none");
    $("#alertName").removeClass("d-block");
    $("#inputName").addClass("is-valid");
    $("#inputName").removeClass("is-invalid");
  } else {
    $("#alertName").addClass("d-block");
    $("#alertName").removeClass("d-none");
    $("#inputName").addClass("is-invalid");
    $("#inputName").removeClass("is-valid");
  }
};
inputEmail.onkeyup = function () {
  if (rejexEmail.test(inputEmail.value) == true) {
    $("#alertEmail").addClass("d-none");
    $("#alertEmail").removeClass("d-block");

    $("#inputEmail").addClass("is-valid");
    $("#inputEmail").removeClass("is-invalid");
  } else {
    $("#alertEmail").addClass("d-block");
    $("#alertEmail").removeClass("d-none");

    $("#inputEmail").addClass("is-invalid");
    $("#inputEmail").removeClass("is-valid");
  }
};
inputPhone.onkeyup = function () {
  if (rejexPhone.test(inputPhone.value) == true) {
    $("#alertPhone").addClass("d-none");
    $("#alertPhone").removeClass("d-block");

    $("#inputPhone").addClass("is-valid");
    $("#inputPhone").removeClass("is-invalid");
  } else {
    $("#alertPhone").addClass("d-block");
    $("#alertPhone").removeClass("d-none");

    $("#inputPhone").addClass("is-invalid");
    $("#inputPhone").removeClass("is-valid");
  }
};

inputAge.onkeyup = function () {
  if (rejexAge.test(inputAge.value) == true) {
    $("#alertAge").addClass("d-none");
    $("#alertAge").removeClass("d-block");

    $("#inputAge").addClass("is-valid");
    $("#inputAge").removeClass("is-invalid");
  } else {
    $("#alertAge").addClass("d-block");
    $("#alertAge").removeClass("d-none");

    $("#inputAge").addClass("is-invalid");
    $("#inputAge").removeClass("is-valid");
  }
};

inputPassword.onkeyup = function () {
  if (rejexPassword.test(inputPassword.value) == true) {
    $("#alertPassword").addClass("d-none");
    $("#alertPassword").removeClass("d-block");

    $("#inputPassword").addClass("is-valid");
    $("#inputPassword").removeClass("is-invalid");
  } else {
    $("#alertPassword").addClass("d-block");
    $("#alertPassword").removeClass("d-none");

    $("#inputPassword").addClass("is-invalid");
    $("#inputPassword").removeClass("is-valid");
  }
};

inputRePassword.onkeyup = function () {
  if (inputPassword.value == inputRePassword.value) {
    $("#alertRePassword").addClass("d-none");
    $("#alertRePassword").removeClass("d-block");

    $("#inputRePassword").addClass("is-valid");
    $("#inputRePassword").removeClass("is-invalid");
  } else {
    $("#alertRePassword").addClass("d-block");
    $("#alertRePassword").removeClass("d-none");

    $("#inputRePassword").addClass("is-invalid");
    $("#inputRePassword").removeClass("is-valid");
  }
};



ContactUs.addEventListener("click",function()
{




  document.getElementById("mainPage").classList.add("d-none") //1
  document.getElementById("ingredientsSection").classList.add("d-none")//6
  document.getElementById("detailsSection").classList.add("d-none")//2
  document.getElementById("categorySection").classList.add("d-none")//3
  document.getElementById("categoryDetailsSection").classList.add("d-none")//4
  document.getElementById("searchSectionName").classList.add("d-none")//8
  document.getElementById("searchSectionLetter").classList.add("d-none")//9
  document.getElementById("sectionArea").classList.add("d-none")//5
  document.getElementById("contactSection").classList.add("d-none")
  document.getElementById("searchSection").classList.add("d-none")//7


  document.getElementById("sectionFilterCategory").classList.add("d-none")//7
  document.getElementById("sectionFilterArea").classList.add("d-none")//7
  document.getElementById("sectionFilteringredients").classList.add("d-none")//7







document.getElementById("contactSection").classList.remove("d-none")



})
