let searchInput = document.querySelector('#search-input');
let itemsContainer = document.querySelector('.items');

document.querySelector('#search-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    let searchTerm = searchInput.value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    const response = await fetch(url);
    const items = await response.json();
    if(items && items.meals) {
        displayItems(items);
    } else {
        displayError();
    }

})

function displayItems(items) {
    itemsContainer.innerHTML = ``;
    for (let i = 0; i < 80; i++) {
        let data = items.meals[i];
        if(data && data.strMealThumb) {
        let item = document.createElement('div');
        item.className = 'item m-1';

        //truncate long titles
        let recipeTitle = data.strMeal.length > 38 ? data.strMeal.substring(0,38) + '...' : data.strMeal;

        item.innerHTML = `<div class="img-container">
                            <a href="${data.strSource}" target="_none"><img src="${data.strMealThumb}"></a>
                            <div class="dark-opacity"></div>
                          </div>
                          <div class="description">
                            <p class="category mb-1">${data.strCategory}</p>
                            <p class="origin mb-1">Origin: ${data.strArea}</p>
                            <div class="title mb-3">${recipeTitle }</div>
                            <a href="${data.strSource}" target="_none" class="my-2 btn read-more">Read Recipe</a>
                          </div>`;
        itemsContainer.appendChild(item);
        }
    }
}

function displayError(){
    itemsContainer.innerHTML = ``;
    itemsContainer.innerHTML = `<p>Sorry, No Results Found. Try searching for something else!</p>`
}