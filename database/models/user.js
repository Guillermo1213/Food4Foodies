const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const PlannerSchema = require("./planner");
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = Schema({
  username: { type: String, unique: false, lowercase: true, required: false },
  email: { type: String, unique: false, lowercase: true, required: false },
  password: { type: String, unique: false, required: false },
  favorites: [],
  planner: [{
    Monday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Tuesday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Wednesday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Thursday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Friday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Saturday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    },
    Sunday: {
      Breakfast: {},
      Lunch: {},
      Dinner: {}
    }
  }],
  groceries: []
});

// const plannerSchema = Schema({
//   Monday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Tuesday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Wednesday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Thursday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Friday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Saturday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   },
//   Sunday: {
//     Breakfast: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Lunch: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false },
//     Dinner: { type: Schema.Types.ObjectId, ref:'User', unique: false, required: false }
//   }
// });

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

// const Planner = mongoose.model("Planner", plannerSchema);
const User = mongoose.model("User", userSchema);
module.exports = User;
// module.exports = Planner;
