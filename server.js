require('dotenv').config();
  
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
  



// ================================================================================
// ROUTER
// ================================================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);




//Listener
app.listen(PORT, listening);

function listening() {
    console.log("App listening on PORT: " + PORT);
}