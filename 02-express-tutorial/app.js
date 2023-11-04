const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Import the cookie-parser package

const { products, people } = require('./data');

// Middleware function to log requests
function logger(req, res, next) {
  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${new Date()}`);
  next();
}

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser()); // Parse cookies

// Middleware function for authentication
function auth(req, res, next) {
  if (req.cookies.name) {
    req.user = req.cookies.name;
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

// Apply the logger middleware for all routes
app.use(logger);

// API routes for products
app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const productID = req.params.productID;
  const product = products.find((product) => product.id === parseInt(productID));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'That product was not found.' });
  }
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit, maxPrice } = req.query;
  let filteredProducts = products;

  if (search) {
    const regex = new RegExp(search, 'i');
    filteredProducts = products.filter((product) => regex.test(product.name));
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter((product) => product.price <= parseFloat(maxPrice));
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  res.json(filteredProducts);
});

// API routes for people
app.get('/api/v1/people', (req, res) => {
  res.json(people);
});

app.post('/api/v1/people', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
  }

  const newPerson = { id: people.length + 1, name: req.body.name };
  people.push(newPerson);
  res.status(201).json({ success: true, name: req.body.name });
});


// Logon route to set a cookie
app.post('/logon', (req, res) => {
  if (req.body.name) {
    res.cookie('name', req.body.name);
    res.status(201).json({ message: `Hello, ${req.body.name}!` });
  } else {
    res.status(400).json({ message: 'Please provide a name in the body' });
  }
});

// Logoff route to clear the cookie
app.delete('/logoff', (req, res) => {
  res.clearCookie('name');
  res.status(200).json({ message: 'User is logged off' });
});

// Test route with auth middleware
app.get('/test', auth, (req, res) => {
  res.status(200).json({ message: `Welcome to the user, ${req.user}` });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running by port ${port}`);
});
