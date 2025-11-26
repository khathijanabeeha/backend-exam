const express = require('express');
const bodyParser = require('body-parser');  
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
let workouts = [];
module.exports = {
    app,    
    workouts,
    uuidv4,
    PORT    
};
workouts.push = function(newWorkout) {
    Array.prototype.push.call(this, newWorkout);
};





