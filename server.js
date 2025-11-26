//create a fitness tracker api with enpoints post /api/workouts to add workoutname date exercise duration(in minutes), and get /api/workouts to get all workouts, put API/workouts/:id to update a workout by id to add exercises to it duration caloriesBurned notes or exercise, delete /api/workouts/:id to delete a workout by id
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json());

let workouts = [];

// Create a new workout
app.post('/api/workouts', (req, res) => {
    const { workoutName, date, exercises } = req.body;
    const newWorkout = {
        id: uuidv4(),
        workoutName,

        date,
        exercises: exercises || []
    };
    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
}
);

// Get all workouts
app.get('/api/workouts', (req, res) => {
    res.json(workouts);
});

// Update a workout by id
app.put('/api/workouts/:id', (req, res) => {
    const { id } = req.params;
    const { exercise } = req.body;
    const workout = workouts.find(w => w.id === id);        
    if (workout) {
        workout.exercises.push(exercise);
        res.json(workout);
    }
    else {
        res.status(404).json({ message: 'Workout not found' });
    }
});

// Delete a workout by id
app.delete('/api/workouts/:id', (req, res) => {

    const { id } = req.params;
    const index = workouts.findIndex(w => w.id === id); 
    if (index !== -1) {
        workouts.splice(index, 1);
        res.status(204).end();
    }   
    else {
        res.status(404).json({ message: 'Workout not found' });
    }   
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}       
);  
