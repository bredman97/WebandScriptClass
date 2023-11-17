var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Workout = require('../models/Workout_model');

module.exports.DislayWorkoutPlan = async (req,res,next)=>{ //< Mark function as async
    try{
       const WorkoutPlan = await Workout.find(); //< Use of await keyword
       res.render('workout/plan', {
          title: 'Workout Plan', 
          WorkoutPlan: WorkoutPlan
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('workout/plan', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddWorkout = async (req,res,next)=>{
    try{
        res.render('workout/add',
        {
            title:'Add Workout'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('workout/plan',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessWorkout = async (req,res,next)=>{
    try{
        let newWorkout = Workout({
            "Name":req.body.Name,
            "Muscle": req.body.Muscle,
            "Sets": req.body.Sets,
            "Reps": req.body.Reps,
            "Day": req.body.Day
        });
        Workout.create(newWorkout).then(() =>{
            res.redirect('/workoutplan')
        })
    }
    catch(error){
        console.error(err);
        res.render('work/plan',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditWorkout = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const workoutToEdit = await Workout.findById(id);
    res.render('workout/edit',
    {
        title:'Edit Workout',
        Workout:workoutToEdit
    })
}
catch(error){
    console.error(err);
    res.render('workout/plan',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditWorkout = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedWorkout = Workout({
            "_id":id,
            "Name":req.body.Name,
            "Muscle": req.body.Muscle,
            "Sets": req.body.Sets,
            "Reps": req.body.Reps,
            "Day": req.body.Day
        });
        Workout.findByIdAndUpdate(id,updatedWorkout).then(()=>{
            res.redirect('/workoutplan')
        });
    }
    catch(error){
        console.error(err);
        res.render('workout/plan',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteWorkout = (req,res,next)=>{
    try{
        let id = req.params.id;
        Workout.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/workoutplan')
        })
    }
    catch(error){
        console.error(err);
        res.render('workout/plan',
        {
            error: 'Error on the server'
        });
    }
}