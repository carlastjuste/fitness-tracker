require('dotenv').config();
const expressConfig = require('./config/express');
const mongooseConfig = require('./config/mongoose');


const app = expressConfig();
const db = mongooseConfig();


//app.use(expressConfig.static('./public'));



// const PORT = process.env.Port || 8080;

// app.listen(PORT, ()=>console.log('App listening on port http://localhost:'+PORT));

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static('public'));

app.get("/stats", (req, res) =>  {
    res.send("Hello stats yppppppp");
})

// app.get("/exercise", (req, res) =>  {
//     res.send("Hello exercise");
// })

// app.get("/exercise?", (req, res) =>  {
//     res.send("Hello exercise?");
// })