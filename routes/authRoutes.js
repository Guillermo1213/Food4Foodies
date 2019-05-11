var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');


router.post('/register', (req, res, next) => {
    console.log('hi from post to register');
    console.log(req.body);
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(function() {
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    }).catch(function(err) {
        return res.render('register', { error : err.message });
    });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.json({id: req.user.id});
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;