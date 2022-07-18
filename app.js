import { products } from './data-modules/products.js';

/*
window.searchProduct = function() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = products.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayProducts(searchResult);
}

// and then the button in the html has to have "onclick"
<button id="search-btn" type="button" onclick="searchProduct()">Search</button>
*/

function searchProduct() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = products.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayProducts(searchResult);
}

const searchButton = document.getElementById(`search-btn`);
searchButton.addEventListener('click', searchProduct);


function getTotalProducts() {
    const total = document.getElementById('total-products');
    total.innerHTML = products.length;
}


// take products data and add it into the html of each card
function displayProducts(productData) {
    const container = document.getElementById('products-container');
    let html = '';

    productData.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${prod.getImage()}"
                    class="card-img-top" alt="${prod.getDescription()}">
                <div class="card-body">
                    <h5 class="card-title">${prod.getName()}</h5>
                    <p class="card-text">
                        ${prod.getPrice()}
                    </p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    })

    container.innerHTML = html;
    getTotalProducts();
}

// call the first function
displayProducts(products);
