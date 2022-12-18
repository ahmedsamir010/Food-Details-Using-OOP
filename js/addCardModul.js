export class card {
  constructor() {}
  async printOrder(meals) {
console.log(meals);
let cartonaCard="";
let total=0;
let arr=[120,200,95,77,66,33,120,200,95,77,66,33,44,55,77,65,131,93.5,454,989,120,200,95,77,66,33,44,55,77,65,131,93.5,454,989,120,200,95,77,66,33,44,55,77,65,131,93.5,454,989,120,200,95,77,66,33,44,55,77,65,131,93.5,454,989,120,200,95,77,66,33,44,55,77,65,131,93.5,454,989120,200,95,77,66,33,44,55,77,65,131,93.5,454,989]
for(let i =0; i < meals.length;++i)
{
    total+=arr[i];
    cartonaCard+=`
 <div class="col-md-2">
    <div class="imgItem text-center">
    <img src="${meals[i][0].strMealThumb}" class="w-100 rounded-2" alt="" />
    <h1 class="fs-1">${meals[i][0].strMeal}</h1>
<p>${arr[i]} $</p>
<div class="text-center">
<p>Your Total is ${total}</p>
</div>
</div>
  </div>


    `
}
document.getElementById("sectionAddToCard").classList.add("d-none")


document.getElementById("sectionAddToCard").classList.remove("d-none")
document.getElementById("displayAddToCard").innerHTML = cartonaCard;


  }
}

