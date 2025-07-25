const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
console.log("App listening to: "+PORT)
});

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes


app.get('/res',(req,res) => {

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const o = req.query.o;
    var tex = a + o + b;
    if(isNaN(a) || isNaN(b))
    {
        return res.send("Error: Please enter two valid numbers in 'a' and 'b'.");
    }

    const resu = eval(tex);
    res.send(`The result of ${a} ${o} ${b} = ${resu}`);

});