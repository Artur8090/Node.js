
const express = require('express');
const app = express();

app.set("view engine","ejs")
function get_multiplications(...args){
    
}
app.get("/", function(req, res){
    const randomNum = Math.ceil(Math.random()*5+1)
    res.render("index",{ num : randomNum,
        a : 5,
        b : 2
    })

});
app.listen(3000)