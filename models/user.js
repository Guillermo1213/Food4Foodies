const Sequelize = require('sequelize');
const db = require("./index")
module.exports = function(sequelize, DataTypes) {
  var User = db.sequelize.define("User", {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    zip: DataTypes.INTEGER
  });

  // Class methods for use in passport
  User.authenticate = function(email, password, done) {
    console.log('hi from authenticate');
    console.log(email, password);

    User.findOne({ where: {email: email} }).then(function(email) {
      if (!email) { return done(null, false); }
     if (email.password !== password) { return done(null, false); }
      console.log('we found a user, ', email);
      return done(null, email);
    }).catch(function(err) {
      return done(err);
    });
  };

  User.serializeUser = function(email, done) {
    console.log('hi from serializeUser');
    done(null, email.id);
  };

  User.deserializeUser = function(id, done) {
    console.log('hi from deserializeUser');
    User.findOne({ where: {id: id} }).then(function(email){
      console.log('found user in deserializeUser');
      done(null, email);
    }).catch(function(err) {
      done(err);
    });
  };
  
  return User;
};
