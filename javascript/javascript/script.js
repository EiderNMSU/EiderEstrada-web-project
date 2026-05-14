function filterProducts(category) {
    const rows = document.querySelectorAll('.product-row');
    rows.forEach(row => {
        const productCategory = row.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}
console.log("GreenTech JS Loaded from the javascript folder.");