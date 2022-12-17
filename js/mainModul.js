import { user } from "./detailsMealsModul.js";
export class meals {
  constructor() {
    this.finalMeals();
  }
  async getApi() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let result = await api.json();
    return result.meals;
  }

  async finalMeals() {
    let meals = await this.getApi();
    let cartonaMeals = "";
    for (let i = 0; i < meals.length; i++) {
      cartonaMeals += `
        <div class="col-md-6 col-lg-3 allImg">
        <div class="img" id="Img">
        <img
          src="${meals[i].strMealThumb}"
          alt=""
          class="w-100"
        />
        <div class="imgLayer d-flex align-items-center">
          <h2 class="p-2">${meals[i].strMeal}</h2>
        </div>
        </div>
      </div>
        
        `;
    }

    document.getElementById("myRow").innerHTML = cartonaMeals;

    this.event()
  }



  event() {
    $(".img").click(function () {
      let meal = $(this).find("h2").text();
      a.detailsMeal(meal);

      return meal;
    });
  }



}
let m=new meals();
let a=new user()
let header=document.getElementById("header")
// header.addEventListener('click',function()
// {
//   document.getElementById("contactSection").classList.add("d-none")
//   document.getElementById("ingredientsSection").classList.add("d-none")
//   document.getElementById("detailsSection").classList.add("d-none")
//   document.getElementById("categorySection").classList.add("d-none")
//   document.getElementById("categoryDetailsSection").classList.add("d-none")
//   document.getElementById("searchSection").classList.add("d-none")
//   document.getElementById("searchSectionName").classList.add("d-none")
//   document.getElementById("searchSectionLetter").classList.add("d-none")
//   document.getElementById("sectionFilterArea").classList.add("d-none")

//   document.getElementById("sectionFilterCategory").classList.add("d-none")
//   document.getElementById("sectionFilteringredients").classList.add("d-none")


// document.getElementById("sectionArea").classList.add("d-none")
// document.getElementById("mainPage").classList.remove("d-none")




//   document.getElementById("area").innerHTML = cartonaMeals;

//   m.finalMeals();

// })


