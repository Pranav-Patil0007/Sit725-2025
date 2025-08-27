const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;
app.listen(PORT,()=>{
console.log("App listening to: "+PORT)
});

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes


// app.get('/res',(req,res) => {

//     const a = parseFloat(req.query.a);
//     const b = parseFloat(req.query.b);
//     const o = req.query.o;
//     var tex = a + o + b;
//     if(isNaN(a) || isNaN(b))
//     {
//         return res.send("Error: Please enter two valid numbers in 'a' and 'b'.");
//     }

//     const resu = eval(tex);
//     res.send(`The result of ${a} ${o} ${b} = ${resu}`);

// });

app.get('/res',(req,res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const o = req.query.o;
     if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Error: Please enter two valid numbers in 'a' and 'b'.");
  }

  let result;
  switch(o) {
    case '+' :
        result = a +b ;
        break;
    case '-':
        result = a -b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b===0) {
            return res.status(400).send("Error: Cannot divide by zero.");
        }
        result = a/b;
        break;
    default:
        return res.status(400).send("Error: Use valid operation +,-,* or /." )
  }
  res.send(`The result of ${a} ${o} ${b} = ${result}`);
});

// Export app **without listening**
module.exports = app;

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3005;
  app.listen(PORT, () => {
    console.log("App listening on port: " + PORT);
  });
}