const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: "Date is required",
        trim: true
    },
    exercises : [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number

        }
    ]
});

mongoose.model('workout',WorkoutSchema );
