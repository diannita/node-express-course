document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const productListDiv = document.getElementById("productList");
  
    fetchButton.addEventListener("click", () => {
      fetch('/api/v1/products')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Clear the previous content in the div
          productListDiv.innerHTML = '';
  
          // Iterate through the product data and add it to the div
          data.forEach((product) => {
            const productItem = document.createElement('div');
            productItem.textContent = `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`;
            productListDiv.appendChild(productItem);
          });
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    });
  });
  