let mongoose = require('mongoose');

// create a model class
let workoutModel = mongoose.Schema({
    Name:String,
    Muscle:String,
    Sets:Number,
    Reps:String,
    Day: String
},
{
    collection:"workout"
});
module.exports = mongoose.model('workout',workoutModel);