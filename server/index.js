const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const routine = [
    {id: 1, name: "Bench Press", sets: 3, reps: 5, weight: 165},
    {id: 2, name: "Dips", sets: 3, reps: 10, weight: "bodyweight"},
    {id: 3, name: "Shoulder Press", sets: 4, reps: 8, weight: 35},
    {id: 4, name: "Squats", sets: 3, reps: 12, weight: 45}
]
  
app.get('/', (req, res) => {
    res.send(routine);
});

  
app.get('/api/login', (req, res) => {
    res.send('Login Page');
});

  
app.get('/api/register', (req, res) => {
    res.send('Register Page');
});


// GET
app.get('/api/routine', (req, res) => {
    res.send(routine);
});

// POST
app.post('/api/routine', (req, res) => {
    // const { error } = validateCourse(req.body)
    // if (error) return res.status(400).send(error.details[0].message);

    routine.push(req.body);
    res.status(200).json({ message: 'Successfully added row! ', receivedData: req.body });

    // courses.push(course);
    // res.send(course);
});

// DELETE
app.delete('/api/routine/:id', (req, res) => {
    const item = routine.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'EXERCISE NOT FOUND' });

    const index = routine.indexOf(item);
    routine.splice(index, 1);
    res.status(200).json({ message: `Successfully deleted row with ID ${req.params.id}` });
});


// app.put('/api/courses/:id',  (req, res) => {
//     // Look up course
//     // If it does not exist, return 404
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('Course not found for update (PUT) request!');

//     // validate course
//     // if invalid, return 400 - bad request
//     const { error } = validateCourse(req.body)
//     if (error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     // update course
//     course.name = req.body.name;
//     // return updated course
//     res.send(course);
// });


// function validateCourse(course) {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     });

//     return schema.validate(course)
// }




// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
