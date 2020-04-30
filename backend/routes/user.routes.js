//Quelle für Basic REST layout: https://www.positronx.io/angular-8-mean-stack-tutorial-build-crud-angular-material/
const express = require('express');
const app = express();
const userRoute = express.Router();
const jwt = require('jsonwebtoken');

// User model
let User = require('../model/User');

// Register User
userRoute.post('/register', (req, res) => {
    //TODO: Check if email already used
    let data = req.body;
    let user = new User(data);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id, userData: user };
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    });
});

// Register User
userRoute.post('/login', (req, res) => {
    let data = req.body;
    User.findOne({email: data.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                //No user exists
                res.status(401).send('Diese E-Mail Adresse ist nicht vergeben');
            } else {
                if (user.password !== data.password) {
                    res.status(401).send('Das eingegebene Passwort ist nicht korrekt');
                } else {
                    let payload = { subject: user._id, userData: user };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token});
                }
            }
        }
    });
});

// Get all student
userRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get single student
userRoute.route('/read-user/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Update student
userRoute.route('/update-user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Delete student
userRoute.route('/delete-user/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = userRoute;
