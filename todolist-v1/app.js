const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

        var today = new Date();
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var day = today.getDay();

        if (day === 6 || day === 0) {
            day = days[day];
        } else {
            day = days[day];
        }
        res.render("list", {kindOfDay: day});
        // res.send();
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});