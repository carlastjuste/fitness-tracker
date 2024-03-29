
var path = require('path');
var Workout= require('../models/workout');


module.exports = function(app) {
//create a workout
app.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


//create exercise
app.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });


app.get('/api/workouts/range',(req, res) => {
    //Workout.find({})
    Workout.aggregate( [
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
         
        }
      },
  ] )
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
    
app.get('/api/workouts', (req, res) => {
    //Workout.find({})
    Workout.aggregate( [
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
         
        }
      }
  ] )
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
    
};
