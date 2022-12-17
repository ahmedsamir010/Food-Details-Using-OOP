import { area } from "./areaModul.js";
import { ingredients } from "./ingredientsModul.js";
import { category } from "./categoryModul.js";
import { user } from "./detailsMealsModul.js";
import { search } from "./searchMealsModul.js";
let c = new category();
let i = new ingredients()
let a=new area()
let s = new search();
let u=new user();

$(document).ready(function () {
  $(".screen").fadeOut(1000, function () {
    $("body").css("overflow", "visible");
  });
});


 
// let add=document.getElementById("Add")
// add.addEventListener('click',function()
// {
//   console.log("Hello");
// })
// Dark mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});