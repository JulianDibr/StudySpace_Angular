//Quelle für Basic REST layout: https://www.positronx.io/angular-8-mean-stack-tutorial-build-crud-angular-material/
const express = require('express');
const app = express();
const postingRoute = express.Router();
const jwt = require('jsonwebtoken');

// User model
let Posting = require('../model/Posting');

// Get all posts
postingRoute.route('/').get((req, res) => {
    Posting.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Register User
postingRoute.post('/new', verifyToken, (req, res) => {
    let data = req.body;
    data.user_id = req.userId;

    let posting = new Posting(data);
    posting.save((error, savedPost) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(posting);
        }
    });
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Unauthorized request");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
        return res.status(401).send("Unauthorized request");
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send("Unauthorized request");
    }
    req.userId = payload.subject;
    next();
}

/*// Register User
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
                    let payload = { subject: user._id };
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
});*/

module.exports = postingRoute;
