const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
}

const displayFood = (foods) => {
    const foodContainer = document.getElementById('food-container');
    foods.forEach(food => {
        // console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
        <div onclick="loadDetails(${food.idMeal})" class="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
         </div>
        `
        foodContainer.appendChild(foodDiv);
    });
}

const searchMeal = () => {
    const searchElement = document.getElementById('search-food');
    document.getElementById('food-container').innerHTML = '';
    const searchItem = searchElement.value;
    loadMeal(searchItem);
    searchElement.value = '';
}

const loadDetails = (foodId) => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]));
}
const displayDetails = (foodData) => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = `
   <div class="modal-body">
   <div class="mb-3">
   <div class=" row g-2">
       <div class="col-md-4">
           <img src="${foodData.strMealThumb}" class="img-fluid rounded" alt="...">
       </div>
       <div class="col-md-8">
           <div class="card-body">
               <h2 class="card-title">${foodData.strMeal}</h2>
               <h5 class="my-3">Food Category: ${foodData.strCategory}</h5>
               <h5 class="my-3">Food Region: ${foodData.strArea}</h5>
               
               <p class="card-text">Instruction: ${foodData.strInstructions.slice(0, 700)}</p>
               
           </div>
       </div>
   </div>
</div>
    
  </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
    </div>
    `

    console.log(foodData);
}

loadMeal('chicken');