const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
}

const displayFood = (foods) => {
    const foodContainer = document.getElementById('food-container');
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
        <div class="card">
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

loadMeal('chicken');