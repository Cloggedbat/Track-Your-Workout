const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewWorkout = new Schema({

    day: {
        type: Date,
        default: () => new Data()
    },

    exercises: [{

        type: {
            type: String,
            trim: false,
            required: true
        },

        name: {
            type: String,
            trim: true,
            required: true,
        },
        duration: {
            type: Number,
            required: false
        },
        weights: {
            type: Number,
            required: true,
            default: 10
        },
        reps:
        {
            type: Number,
            required: true,
            default: 10
        },
        sets: {
            type: Number,
            required: true,
        },
    }]
})
const Workout = mongoose.model("workout", NewWorkout);
module.export = Workout