const mongojs = require("mongojs");
const app = require("express");
const db = require("../model/workout");


app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(workitoutdb => {
        res.json(workitoutdb);
    }).catch(err => {
        res.json(err);
    });
});

// adding exersize to main screen
app.put("api/workouts/id", (req,res) => {
    db.Workout.findOneAndUpdate(
        { __id:req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        {new: true}).then(workitoutdb => {
            res.json(workitoutdb);
        }).catch(err =>{
            res.json(err);
        });
});
