const express = require("express");
const db = require("../model");
const router = express.Router()

// Put the post in here
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((workitoutdb => {
        res.json(workitoutdb);
    })).catch(err => {
        res.json(err);
    });
});
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(workitoutdb => {
        res.json(workitoutdb);
    }).catch(err => {
        res.json(err);
    });
});


// adding exersize to main screen
router.put("api/workouts/id", (req,res) => {
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

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).then(workitoutdb => {
        res.json(workitoutdb);
    
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router