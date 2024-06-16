let e=document.querySelector("#search-input"),t=document.querySelector(".items");document.querySelector("#search-form").addEventListener("submit",async function(r){r.preventDefault();let s=e.value,a=`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`,i=await fetch(a),n=await i.json();n&&n.meals?function(e){t.innerHTML="";for(let r=0;r<80;r++){let s=e.meals[r];if(s&&s.strMealThumb){let e=document.createElement("div");e.className="item m-1";let r=s.strMeal.length>38?s.strMeal.substring(0,38)+"...":s.strMeal;e.innerHTML=`<div class="img-container">
                            <a href="${s.strSource}" target="_none"><img src="${s.strMealThumb}"></a>
                            <div class="dark-opacity"></div>
                          </div>
                          <div class="description">
                            <p class="category mb-1">${s.strCategory}</p>
                            <p class="origin mb-1">Origin: ${s.strArea}</p>
                            <div class="title mb-3">${r}</div>
                            <a href="${s.strSource}" target="_none" class="my-2 btn read-more">Read Recipe</a>
                          </div>`,t.appendChild(e)}}}(n):(t.innerHTML="",t.innerHTML="<p>Sorry, No Results Found. Try searching for something else!</p>")});
//# sourceMappingURL=index.57b23658.js.map
