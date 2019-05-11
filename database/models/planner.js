const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlannerSchema = new Schema({
		Monday: {
			"Breakfast": { type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Tuesday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Wednesday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Thursday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Friday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Saturday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		},
		Sunday: {
			"Breakfast": {type: Object, unique: false, required: false },
			"Lunch": {type: Object, unique: false, required: false },
			"Dinner": {type: Object, unique: false, required: false }
		}

})

const Planner = mongoose.model("Planner", PlannerSchema);
module.exports = Planner;