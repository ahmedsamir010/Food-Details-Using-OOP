import { filterArea } from "./filterAreaModul.js";
import { meals } from "./mainModul.js";
let m=new meals()
let f=new filterArea()
export class area {
    constructor() {}
    async getApi() {
      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      let result = await api.json();
      return result.meals;
    }
    async finalArea() {
      let area = await this.getApi();
      let cartonaArea = "";
      for (let i = 2; i < 25; i++) {
        cartonaArea += `
        <div class="col-md-6 col-lg-3 my-3">
        <div class="img shadowArea text-center text-white">
          <i class="fa-solid fa-city fa-3x"></i>

          <h2>${area[i].strArea}</h2>
        </div>
      </div>

            
            `;
      }
      document.getElementById("sectionAddToCard").classList.add("d-none")

      document.getElementById("mainPage").classList.add("d-none")
      document.getElementById("contactSection").classList.add("d-none")
      document.getElementById("ingredientsSection").classList.add("d-none")
      document.getElementById("detailsSection").classList.add("d-none")
      document.getElementById("categorySection").classList.add("d-none")
      document.getElementById("categoryDetailsSection").classList.add("d-none")
      document.getElementById("searchSection").classList.add("d-none")
      document.getElementById("searchSectionName").classList.add("d-none")
      document.getElementById("searchSectionLetter").classList.add("d-none")
      document.getElementById("sectionFilterArea").classList.add("d-none")

      document.getElementById("sectionFilterCategory").classList.add("d-none")
      document.getElementById("sectionFilteringredients").classList.add("d-none")




document.getElementById("sectionArea").classList.remove("d-none")





      document.getElementById("area").innerHTML = cartonaArea;

this.event()

    }



    event() {
      $(".img").click(function () {
        let meal = $(this).find("h2").text();


console.log("Areaaa");
f.finalFilterArea(meal)

        return meal;
      });
    }
    
    


  }
let a=new area()

let Area=document.getElementById("Area")
Area.addEventListener("click",function(){

a.finalArea()

})

  