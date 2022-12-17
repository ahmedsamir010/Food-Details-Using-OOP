import { filterIngredients } from "./filterIngredientsModul.js";
import { meals } from "./mainModul.js";

let m = new meals();

let f = new filterIngredients();
export class ingredients {
  constructor() {}
  async getApi() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let result = await api.json();
    return result.meals;
  }

  async finalMeals() {
    let ingredients = await this.getApi();
    let cartonaIngredients = "";
    for (let i = 0; i < 20; i++) {
      cartonaIngredients += `
    <div class="col-md-3 shadow text-center">
    <div class="imag text-white">
    <i class="fa-solid fa-bowl-food fa-3x"></i>
    <h2>${ingredients[i].strIngredient}</h2>
    <p>${ingredients[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
    </div>
    </div>`
    };

    document.getElementById("mainPage").classList.add("d-none");
    document.getElementById("contactSection").classList.add("d-none");
    document.getElementById("detailsSection").classList.add("d-none");
    document.getElementById("categorySection").classList.add("d-none");
    document.getElementById("categoryDetailsSection").classList.add("d-none");
    document.getElementById("searchSection").classList.add("d-none");
    document.getElementById("searchSectionName").classList.add("d-none");
    document.getElementById("searchSectionLetter").classList.add("d-none");
    document.getElementById("sectionArea").classList.add("d-none");

    document.getElementById("sectionFilterCategory").classList.add("d-none");
    document.getElementById("sectionFilterArea").classList.add("d-none");
    document.getElementById("sectionFilteringredients").classList.add("d-none");






    document.getElementById("ingredientsSection").classList.remove("d-none");

    document.getElementById("ingredients").innerHTML = cartonaIngredients;

    this.event();
  }

  event() {
    $(".imag").click(function () {
      let meal = $(this).find("h2").text();
      console.log(meal);

      f.finalFilterIngredients(meal);
      return meal;
    });
  }
}

let i = new ingredients();

let Ingredients = document.getElementById("Ingredients");
Ingredients.addEventListener("click", function () {
  console.log("helloingred");



  i.finalMeals();
});
