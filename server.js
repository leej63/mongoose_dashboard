// CONFIG
const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

// ROUTES
require('./routes')(app);


// SERVER LISTEN
app.listen(8000, (err) => {
    console.log("Listening on port 8000")
})
