const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NewWorkout = new Schema({

    day: {
        type: Data,
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

        weights: {
            type: Number,
            required: true,
            default: 10
        },
        sets: {
            type: Number,
            required: true,
        },
        reps:
        {
            type:Number,
            required: true,
            default: 10
        },
        duration: {
            type:Number,
            required: false
        }
    }]
})
const Workout = mongoose.model("workout", NewWorkout);
module.export = { Workout };

