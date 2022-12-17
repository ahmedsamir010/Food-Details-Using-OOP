
export class user {
  constructor() {}
  async getApi(meal) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let result = await api.json();
    return result.meals;
  }

  async detailsMeal(meal) {
    let meals = await this.getApi(meal);
    let cartonaDetails = "";
    
// For Loap To Get Recipes 
let caertonaRecipes="";


for(let i=1;i<21; i++)
{
console.log("recipes");
  if( meals[0]["strIngredient"+i]== null || meals[0]["strIngredient"+i]==" "|| meals[0]["strIngredient"+i]=="")
  {
    meals[0]["strIngredient"+i]=""
  }
  else{
    caertonaRecipes+= `
    <p class="my-3 mx-1 p-1 alert-success rounded recipeTag">${meals[0]["strIngredient"+i]}</p>
    `
  }
  if( meals[0]["strMeasure"+i] == null || meals[0]["strMeasure"+i]==" "|| meals[0]["strMeasure"+i]=="")
  {
    meals[0]["strMeasure"+i]="";
  }
  else{
    caertonaRecipes+=
    `
    <p class="my-3 mx-1 p-1 alert-success rounded recipeTag">${meals[0]["strMeasure"+i]}</p>
    `
  }
 

}

    for (let i = 0; i < meals.length; i++) {
if(meals[i].strTags == null)
{
  meals[i].strTags="";
}
      cartonaDetails += `
          <div class="col-md-4">
          <div class="imgItem text-center">
            <img src="${meals[i].strMealThumb}" class="w-100 rounded-2" alt="" />
            <h1>${meals[i].strMeal}</h1>
          </div>
        </div>

        <div class="col-md-8">
<div class="infoItem">
<p>
  <span><strong>Area : </strong> ${meals[i].strArea}</span>
</p>
<p>
  <span><strong>Category : </strong>${meals[i].strCategory}</span>
</p>

<h3>Recipes :</h3>
<div class="d-flex recipes">

${caertonaRecipes}

</div>

<button class="glow-on-hover text-center text-white bg-light " type="button" id="Add">Order Now</button>

</div>



 
            
            `;

          }



    document.getElementById("mainPage").classList.add("d-none")
    document.getElementById("contactSection").classList.add("d-none")
    document.getElementById("ingredientsSection").classList.add("d-none")
    document.getElementById("categorySection").classList.add("d-none")
    document.getElementById("categoryDetailsSection").classList.add("d-none")
    document.getElementById("searchSection").classList.add("d-none")
    document.getElementById("searchSectionName").classList.add("d-none")
    document.getElementById("searchSectionLetter").classList.add("d-none")
    document.getElementById("sectionArea").classList.add("d-none")
    document.getElementById("sectionFilterCategory").classList.add("d-none")
    document.getElementById("sectionFilterArea").classList.add("d-none")
    document.getElementById("sectionFilteringredients").classList.add("d-none")


document.getElementById("detailsSection").classList.remove("d-none")




    
    document.getElementById("detailsMealRow").innerHTML = cartonaDetails;

add(meals);
  }

  
}
let arr=JSON.parse(localStorage.getItem('meal')) ? JSON.parse(localStorage.getItem('meal')) : [];
function add(meals){
  $("#Add").click(function () {
    console.log(arr);      
arr.push(meals)
   arr=localStorage.setItem('meal',JSON.stringify(arr));
    arr=JSON.parse(localStorage.getItem('meal')) ? JSON.parse(localStorage.getItem('meal')) : [];
})
}
