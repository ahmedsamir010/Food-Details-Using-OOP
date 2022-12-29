import { area } from "./areaModul.js";
import { ingredients } from "./ingredientsModul.js";
import { category } from "./categoryModul.js";
import { user } from "./detailsMealsModul.js";
import { search } from "./searchMealsModul.js";
import { card } from "./addCardModul.js";
let car=new card()
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


 