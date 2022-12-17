
import { user } from "./detailsMealsModul.js";
import { meals } from "./mainModul.js";

let m=new meals()
export class filterIngredients {
    constructor() {}
    async getApi(meal) {




      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
      );


      let result = await api.json();

console.log(result);
console.log("ingreed");

      return result.meals;
    }
    


    async finalFilterIngredients(meal) {
      let filterIngredients = await this.getApi(meal);
      let cartonaFilterIngredients = "";
      for (let i = 0; i < filterIngredients.length; i++) {
        cartonaFilterIngredients += `
        <div class="col-md-6 col-lg-3 my-2 allImg">
        <div class="img" id="Img">
        <img
          src="${filterIngredients[i].strMealThumb}"
          alt=""
          class="w-100 rounded-2"
        />
        <div class="imgLayer d-flex align-items-center">
          <h2 class="p-2">${filterIngredients[i].strMeal}</h2>
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
      document.getElementById("categorySection").classList.add("d-none")
      document.getElementById("sectionFilterCategory").classList.add("d-none")
      document.getElementById("sectionFilterArea").classList.add("d-none")





      
      document.getElementById("sectionFilteringredients").classList.remove("d-none")




  
  
  document.getElementById("sectionFilteringredients").classList.remove("d-none")

  
  






      document.getElementById("displayFilteringredients").innerHTML = cartonaFilterIngredients;


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
