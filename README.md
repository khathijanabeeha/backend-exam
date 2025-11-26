task 1. 
Add new workout entry post.
deploy an api taht allows an authenticated users to log a new workout. endpoint API/POST/workouts
accept date/exercise/duration (in minutes), calories burned and an optional notes in the request body.
automatically generate a unique id for each workout.
store the workout in data/workouts.json
only authenticated users can submit the workouts(use a simple API keys in headers)
validate date,exercise and duration are provided.
reject duplicate workouts with the same exercise and date for the same user.Expected output:The newly added workout appears in the workout log without page reload.API returns meaningful error message for invalid requests.

TASK 2: get all workouts (GET)

deploy an api that returns all workouts
read all the workout entries from workout.json
return all workout as JSON array.
handle missing and corrupted files gracefully.
Ensure Cors headers from frontend integration.Expected output: the web page dynamically displays all the workouts. returns an empty array if workout doesnt exist.

TASK 3: Update an existing workout (PUT) 
allows users to update a previously logged workout.PUT/api/ workouts/:id

accept duration,caloriesBurned,notes or exercise in the request body.
validate that the workout exists before updating.
only the user ssubmitted the workout can update it.
keep id and date unchanged.
returrn meaningful error for invalid workouts IDs or invalid data.Expeected output: Updated workout data reflects correctly in GET requests. Changes are peersisted in workout.json

TASK 4: 
Delete a workout (DELETE)
allows users or admins to delete workout entries.
endpoint: DELETE/ api/ workout/:id

only the user who submitted the workout or an admin can delete it.
validatee that the workout exists before deletion.
remove the workout from workout.json and return a message.