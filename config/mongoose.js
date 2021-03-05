const mongoose = require('mongoose');
require('dotenv').config()
// const uri = process.env.ATLAS_URI;

const uri = process.env.MONGODB_URI || process.env.ATLAS_URI



module.exports = async () => {
   const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex:true
 
      })
      .then(
          () => {
              console.log('Database connection successfull! :)');
          },
          err => {
              console.log(`Db Connection unsuccessfull. Error: ${err} :( )`);
          }
      );
     // db.createCollection("workout")
      require('../models/workout_model');
      return db;
};
