
const router = require('express').Router();
var Workout= require('../models/workout');


module.exports = function(app) {
//create a workout
router.post('/workouts', (req, res) => {
    Workout.create(body.req)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


//create exercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });



router.get('/workouts/range').get((req, res) => {
    Workout.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
};
