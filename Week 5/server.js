var express = require("express")
var app = express()
const path = require('path');
var port = process.env.port || 5001;
const PORT = 5001;
// Import route file
const foodRoute = require('./routes/hello');
// Mount the route at /api/hello
app.use('/api/food', foodRoute);
app.use('/api/allfood', foodRoute)
// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});
app.listen(PORT, () => {
    console.log(`Server is running at
http://localhost:${PORT}`);
});