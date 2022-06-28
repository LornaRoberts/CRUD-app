const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const product = require('./routes/product.route'); // Imports routes for the products
let port = 3000;

app.use('/products', product);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});