const inputBox = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product-item');

function filterProduct() {
    const searchValue = inputBox.value.toLowerCase();
    
    products.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const description = item.querySelector('p').innerText.toLowerCase();
        
        if ((title.includes(searchValue) || description.includes(searchValue)) || searchValue === "") {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
}

function setCategory(event) {
    const category = event.target.textContent.toLowerCase();
    
    products.forEach(item => {
        const productCategory = item.getAttribute('data-category').toLowerCase();
        
        if (category === 'all products' || productCategory.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Reset search input box when category is changed
    inputBox.value = '';
}

searchBtn.addEventListener('click', filterProduct);
inputBox.addEventListener('keyup', filterProduct);

categoryBtns.forEach(btn => {
    btn.addEventListener('click', setCategory);
});

// Initial filter to show all products
filterProduct();
