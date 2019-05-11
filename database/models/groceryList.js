const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define grocerySchema
const grocerySchema = new Schema({

	ingredient: { type: String, unique: false, required: false },
	qty: { type: String, unique: false, required: false }

})


const Groceries = mongoose.model('Groceries', grocerySchema)
module.exports = Groceries