export class card {
  constructor() {
 let arr=JSON.parse(localStorage.getItem('meal'));
 if(JSON.parse(localStorage.getItem('meal')))
 {
    console.log('arr');
    this.printOrder(arr);
     }
}

   printOrder(_arr) {

let cartonaCard="";
let total=0;
for(let i =0; i < _arr.length;++i)
{
    total+=Number(_arr[i][0].idMeal.toString().slice(1,3));
    cartonaCard+=`
 <div class="col-md-2 mt-2">
    <div class="imgItem text-center">
    <img src="${_arr[i][0].strMealThumb}" class="w-100 rounded-2" alt="" />
    <h1 class="h5">${_arr[i][0].strMeal}</h1>
<p>${_arr[i][0].idMeal.toString().slice(1,3)} $</p>

</div>
  </div>


    `
}
cartonaCard+=`<div class="text-center">
<p class="h2">Your Total is ${total} $</p>
</div>`
document.getElementById("displayAddToCard").innerHTML = cartonaCard;


  }
}
let car=new card();
    document.getElementById('Card').addEventListener('click',function(){
        let arr=JSON.parse(localStorage.getItem('meal'));
        if(JSON.parse(localStorage.getItem('meal')))
        {
           console.log('arr');
           car.printOrder(arr);
            }
        document.getElementById("detailsSection").classList.add("d-none")

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
    


        document.getElementById("sectionAddToCard").classList.remove("d-none")



    })




