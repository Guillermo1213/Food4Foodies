const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Planner = new Schema({

		Monday: {
			"Breakfast": { type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Tuesday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Wednesday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Thursday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Friday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Saturday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		},
		Sunday: {
			"Breakfast": {type: Object, unique: true, required: false },
			"Lunch": {type: Object, unique: true, required: false },
			"Dinner": {type: Object, unique: true, required: false }
		}

})

module.exports = Planner