// getItems();
let searchInput = document.querySelector('#search-input');

document.querySelector('#search-btn').addEventListener('click', async function (event) {
    // let category = filter ? filter : 'equipment';
    // let url = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`;
    let searchTerm = searchInput.value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);

    displayItems(items);

})

function displayItems(items) {
    let itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = ``;
    for (let i = 0; i < 80; i++) {
        let data = items.meals[i];
        if(data && data.strMealThumb) {
        let item = document.createElement('div');
        item.className = 'item m-1';
        item.innerHTML = `<div class="img-container">
                            <img src="${data.strMealThumb}">
                            <div class="dark-opacity"></div>
                          </div>
                          <div class="description">
                            <p class="category mb-1">${data.strCategory}</p>
                            <p class="origin mb-1">Origin: ${data.strArea}</p>
                            <div class="title mb-3">${data.strMeal}</div>
                            <a href="${data.strSource}" target="_none" class="my-2 btn read-more">Read Recipe</a>
                          </div>
                          <a class="hidden-link" target="_none" href="${data.strSource}"></a>  `;
        itemsContainer.appendChild(item);
        }
        // console.log(items.data[i]);
    }
}