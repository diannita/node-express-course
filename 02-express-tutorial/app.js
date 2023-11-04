//Require express
const express = require('express')
// passing express to app variable
const app = express()

//require file
const { products } = require("./data");

//Calling public path
app.use(express.static("./public"))

//Api routes
//Test API
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
} )
//Array API
app.get('/api/v1/products', (req, res) => {
    res.json(products);
})

//Get product by ID
app.get('/api/v1/products/:productID', (req, res) => {
    // Retrieve the productID from req.params
  const productID = req.params.productID;

  // Find the product with the specified ID in the products array
  const product = products.find((product) => product.id === parseInt(productID));

  if (product) {
    // If the product with the given ID is found, return it as JSON
    res.json(product);
  } else {
    // If the product is not found, return a 404 (Not Found) status and a message
    res.status(404).json({ message: 'That product was not found.' });
  }
})

// Define a route to handle query parameters
app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query;
  
    // Filter products based on the 'search' parameter (using regular expressions)
    let filteredProducts = products;
    if (search) {
      const regex = new RegExp(search, 'i'); // 'i' for case-insensitive matching
      filteredProducts = products.filter((product) => regex.test(product.name));
    }
  
    // Filter products based on the 'maxPrice' parameter
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }
  
    // Limit the results based on the 'limit' parameter
    if (limit) {
      filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }
  
    // Send the filtered products as JSON response
    res.json(filteredProducts);
  });

//Port connection 
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running by port ${port} `);
})