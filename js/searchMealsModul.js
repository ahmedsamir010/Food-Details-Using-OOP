import { user } from "./detailsMealsModul.js";
import { meals } from "./mainModul.js";

let a=new user()
let m=new meals()
export class search {
  constructor() {}

  async searchName(searchInput,flag=false) {
    $(".screen").fadeIn(100);
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );

console.log(searchInput);

    let response = await api.json();
    response = response.meals;
    $(".screen").fadeOut(100);
    let showMeals = "";
    if(response)
{
    for (let i = 0; i < response.length; i++) {
      showMeals += `
        
        <div class="col-md-6 col-lg-3 allImg">
        <div class="img">
        <img
          src="${response[i].strMealThumb}"
          alt="${response[i].idMeal}"
          class="w-100 rounded-2"
        />
        <div class="imgLayer d-flex align-items-center">
          <h2 class="p-2">${response[i].strMeal}</h2>
        </div>
        </div>
      </div>
`;
    }
}

document.getElementById("mainPage").classList.add("d-none")
document.getElementById("ingredientsSection").classList.add("d-none")
document.getElementById("detailsSection").classList.add("d-none")
document.getElementById("categorySection").classList.add("d-none")
document.getElementById("categoryDetailsSection").classList.add("d-none")
document.getElementById("contactSection").classList.add("d-none")
document.getElementById("sectionArea").classList.add("d-none")

document.getElementById("sectionFilteringredients").classList.add("d-none")
document.getElementById("sectionFilterArea").classList.add("d-none")
document.getElementById("sectionFilterCategory").classList.add("d-none")


document.getElementById("searchSectionLetter").classList.add("d-none")
document.getElementById("sectionAddToCard").classList.add("d-none")



document.getElementById("searchSectionName").classList.remove("d-none")

document.getElementById("searchSection").classList.remove("d-none")





    document.getElementById("searchMealName").innerHTML = showMeals;

this.event();


  }


  async searchMealsLetter(searchInput,flag=false) {

    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`
    );

console.log(searchInput);
let response = await api.json();
response = response.meals;
$(".screen").fadeOut(100);
let showMeals = "";

if(response)
{


    for (let i = 0; i < response.length; i++) {
      showMeals += `
        
        <div class="col-md-6 col-lg-3 allImg">
        <div class="img">
        <img
          src="${response[i].strMealThumb}"
          alt="${response[i].idMeal}"
          class="w-100 rounded-2"
        />
        <div class="imgLayer d-flex align-items-center">
          <h2 class="p-2">${response[i].strMeal}</h2>
        </div>
        </div>
      </div>
`;
    }
}



document.getElementById("ingredientsSection").classList.add("d-none")
document.getElementById("detailsSection").classList.add("d-none")
document.getElementById("categorySection").classList.add("d-none")
document.getElementById("categoryDetailsSection").classList.add("d-none")
document.getElementById("contactSection").classList.add("d-none")
document.getElementById("sectionArea").classList.add("d-none")

document.getElementById("searchSectionName").classList.add("d-none")




document.getElementById("searchSectionLetter").classList.remove("d-none")


document.getElementById("searchSection").classList.remove("d-none")







    document.getElementById("searchMealLetter").innerHTML = showMeals;
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



let s=new search()

  let searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup",function(){
   s.searchName(searchInput.value)
  });
  
  let searchLetter = document.getElementById("searchLetter");
  
  searchLetter.addEventListener("keyup",function(){
    s.searchMealsLetter(searchLetter.value)
  });
  
  let getsearch = document.getElementById("search");
  getsearch.addEventListener("click",function(){
      console.log("Hello");

      s.searchName("___",true)
  })
  getsearch.addEventListener("click",function(){
    console.log("Hello2");

    s.searchMealsLetter("___",true)
})

