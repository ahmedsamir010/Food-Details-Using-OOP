import { user } from "./detailsMealsModul.js";
import { meals } from "./mainModul.js";

let m=new meals()
export class filterCategory {
    constructor() {}
    async getApi(meal) {
      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal} `
      );
      let result = await api.json();

      return result.meals;
    }
    


    async finalFilterCategory(meal) {
      let filterCategory = await this.getApi(meal);
      let cartonaFilterCategory = "";

      for (let i = 0; i < filterCategory.length; i++) {
        cartonaFilterCategory += `
        <div class="col-md-6 col-lg-3 my-2 allImg">
        <div class="img" id="Img">
        <img
          src="${filterCategory[i].strMealThumb}"
          alt=""
          class="w-100 rounded-2"
        />
        <div class="imgLayer d-flex align-items-center">
          <h2 class="p-2">${filterCategory[i].strMeal}</h2>
        </div>
        </div>
      </div>
        
            
            `;
      }

      document.getElementById("sectionAddToCard").classList.add("d-none")

      document.getElementById("mainPage").classList.add("d-none")
      document.getElementById("contactSection").classList.add("d-none")
      document.getElementById("ingredientsSection").classList.add("d-none")
      document.getElementById("detailsSection").classList.add("d-none")
      document.getElementById("categoryDetailsSection").classList.add("d-none")
      document.getElementById("searchSection").classList.add("d-none")
      document.getElementById("searchSectionName").classList.add("d-none")
      document.getElementById("searchSectionLetter").classList.add("d-none")
      document.getElementById("sectionArea").classList.add("d-none")
      document.getElementById("categorySection").classList.add("d-none")
      document.getElementById("sectionFilterArea").classList.add("d-none")
      document.getElementById("sectionFilteringredients").classList.add("d-none")
      document.getElementById("sectionFilterCategory").classList.remove("d-none")

  
  






      document.getElementById("displayFilterCategory").innerHTML = cartonaFilterCategory;


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
  let a=new user();
