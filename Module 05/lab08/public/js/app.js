const productsContainer = document.getElementById('products');
const categorySelect = document.getElementById('category');
const searchInput = document.getElementById('search');
const statusText = document.getElementById('status');

let products = [];

async function loadProducts(url = '/api/products') {
    statusText.textContent = 'Loading...';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Unable to load products.');
        }

        products = data;
        renderProducts(products);
        statusText.textContent = '';
    } catch (error) {
        statusText.textContent = error.message;
    }
}

function renderProducts(items) {
    productsContainer.innerHTML = '';

    if (items.length === 0) {
        productsContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p class="price">$${Number(product.price).toFixed(2)}</p>
            <p>${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;

        productsContainer.appendChild(card);
    });
}

function fillCategories(items) {
    const categories = [...new Set(items.map(product => product.category))];

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

categorySelect.addEventListener('change', async () => {
    if (categorySelect.value === 'all') {
        await loadProducts();
        return;
    }

    await loadProducts(`/api/products/category/${encodeURIComponent(categorySelect.value)}`);
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    renderProducts(filtered);
});

async function start() {
    await loadProducts();
    fillCategories(products);
}

start();
