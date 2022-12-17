import { filterCategory } from "./filterCategoryModul.js";
import { meals } from "./mainModul.js";

let m=new meals()
export class category {
  constructor() {}
  async getApi() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let result = await api.json();
    console.log(result);
  
    return result.categories;
  }


  async finalCategory() {
 

    let category = await this.getApi();
    let cartonaMeals = "";
    for (let i = 0; i < category.length; i++) {
      cartonaMeals += `
      <div class="col-md-6 col-lg-3 my-3" >

      <div class="img shadowCategory">
      <img src="${category[i].strCategoryThumb}"
       class="w-100 rounded-2" alt="">
  
  <div class="imgLayer">
  <div class="info text-center">
  <h2>${category[i].strCategory}</h2>
  <p>${category[i].strCategoryDescription}</p>
  </div>
  </div>
  
  </div>
</div>
          
          `;
    }


    document.getElementById("mainPage").classList.add("d-none")
    document.getElementById("contactSection").classList.add("d-none")
    document.getElementById("ingredientsSection").classList.add("d-none")
    document.getElementById("detailsSection").classList.add("d-none")
    document.getElementById("categoryDetailsSection").classList.add("d-none")
    document.getElementById("searchSection").classList.add("d-none")
    document.getElementById("searchSectionName").classList.add("d-none")
    document.getElementById("searchSectionLetter").classList.add("d-none")
    document.getElementById("sectionArea").classList.add("d-none")

    document.getElementById("sectionFilterCategory").classList.add("d-none")
    document.getElementById("sectionFilterArea").classList.add("d-none")
    document.getElementById("sectionFilteringredients").classList.add("d-none")





document.getElementById("categorySection").classList.remove("d-none")







    document.getElementById("categoryMeals").innerHTML = cartonaMeals;

this.event()
}


event() {
  $(".img").click(function () {
    let meal = $(this).find("h2").text();
f.finalFilterCategory(meal)
    return meal;
  });
}



}


let f=new filterCategory();
let c=new category()
let Categories=document.getElementById("Categories")
Categories.addEventListener("click",function()
{
c.finalCategory();

})