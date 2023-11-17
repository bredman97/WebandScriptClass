var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Workout = require('../models/Workout_model');
let WorkoutController = require('../controller/Workout_control')
/* Get route for the workout plan */
// Read Operation
router.get('/', WorkoutController.DislayWorkoutPlan);
/* Get route for Add workout page --> Create */
router.get('/add', WorkoutController.AddWorkout); 
/* Post route for Add workout page --> Create */
router.post('/add', WorkoutController.ProcessWorkout);
/* Get route for displaying the Edit workout page --> Update */
router.get('/edit/:id', WorkoutController.EditWorkout);
/* Post route for processing the Edit workout page --> Update */
router.post('/edit/:id', WorkoutController.ProcessEditWorkout);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', WorkoutController.DeleteWorkout);
 module.exports = router;