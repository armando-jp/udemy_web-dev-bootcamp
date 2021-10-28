const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at armandop4597@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I am a maker");
});

app.get("/hobbies", function(req, res) {
    res.send("Hardware, reading, walking");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

