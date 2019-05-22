const UserModel = require("../database/models/user");

module.exports = {
  getGroceries(req, res) {
    UserModel.find(
      {
        _id: req.user._id
      },
      function(err, ingredient) {
        if (err) return res.json(err);
        res.json(ingredient);
      }
    );
  },

  deleteIngred(req, res) {
    console.log(req.user._id);
    console.log(req.body);

    //req.body {groceriesResult: []}

    // take his current grocercies array, delete the grocery from the array
    // set this updated array to his groceries array

    UserModel.findByIdAndUpdate(
      { _id: req.user._id },
      { $set: { groceries: req.body.groceriesResult } },
      function(err, updatedUser) {
        if (err) return res.json(err);
        res.json(updatedUser);
      }
    );

    // UserModel.findByIdAndDelete(req.body._id)
    //   .then(deleted => {
    //     res.send(deleted);
    //   })
    //   .catch(err => {
    //     res.send(err);
    //   });
  }
};
