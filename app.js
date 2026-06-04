const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// using static files in express as middleware to get whole frontend folder and its content
app.use(express.static('./frontend'));

app.get('/', (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, './frontend/index.html'))
});

app.get('/', (req, res) =>{
    res.send("<h1>This is the home page</h1>")
})

app.get('/about', (req, res) =>{
    res.send("<h2>This is the about page</h2>")
})
// un authorized route and page not found route using regex * symbol
app.get(/(.*)/, (req, res) =>{
    res.send("<h3>404 - Page not found</h3>")
})

// making an api in backend and sending data to frontend

// app.get ('/', (req, res) =>{
//   return res.json({
//     name : "John Doe",
//     age : 30,
//     city : "New York"
//   })  
// })


app.listen(port, () =>{
    console.log("The server is running on port number", port);

    
})