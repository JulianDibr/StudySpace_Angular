//Dev Server Start: npm run dev

//Basic backend Logik: https://www.positronx.io/angular-8-mean-stack-tutorial-build-crud-angular-material/

let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db'),
    jwt = require('jsonwebtoken');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('Database connected sucessfully ')
    },
    error => {
        console.log('Could not connected to database : ' + error)
    }
);

// Set up express js port
const userRoute = require('../backend/routes/user.routes');
const postingRoute = require('../backend/routes/post.routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/user', userRoute);
app.use('/posting', postingRoute);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    console.log("404")
    // next(createError(404));
    next(res.send("<h1>404 Error</h1>"));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
