const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// const courses = [
//     { id: 1, name: 'math'},
//     { id: 2, name: 'biology'}, 
//     { id: 3, name: 'cad drafting'},
//     { id: 4, name: 'gym'},
//     { id: 5, name: 'latin'},
//     { id: 6, name: 'music'},
//     { id: 7, name: 'physics'},
//     { id: 8, name: 'history'},
// ];

const routine = [
    {id: 1, name: "Bench Press", sets: 3, reps: 5, weight: 165},
    {id: 2, name: "Dips", sets: 3, reps: 10, weight: "bodyweight"},
    {id: 3, name: "Shoulder Press", sets: 4, reps: 8, weight: 35},
    {id: 4, name: "Squats", sets: 3, reps: 12, weight: 45}
]

app.get('/api/routine', (req, res) => {
    res.send(routine);
});

// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// });

// app.post('/api/courses', (req, res) => {
//     const { error } = validateCourse(req.body)
//     if (error) return res.status(400).send(error.details[0].message);

//     const course = { 
//         id: courses.length+1, 
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });


// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('Sorry, course not found!');
//     res.send(course)
// });

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

// app.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) {
//         res.status(404).send('Sorry, course not found - cannot delete');
//         return;
//     }

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(courses);
// });



// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
