import WorkoutRoutine from './WorkoutRoutine'
import { useState, useEffect } from 'react'

function Dashboard() {
    
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/api/routine')  // URL of the API endpoint
        .then(response => response.json())
        .then(data => setExercises(data))  // Do something with the data
        .catch(error => console.error('Error:', error));  // Handle errors
    }, []);

    const [newRowData, setNewRowData] = useState(
    {id: -1, name: "", sets: "", reps: "", weight: ""}
    );

    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
    setIsEditing(!isEditing);
    }

    const handleChange = (e) => {
    const {name, value} = e.target;
    setNewRowData({...newRowData, [name] : value});
    }

    const addRow = () => {
    const newRow = {
        id: exercises.length + 1, 
        name: newRowData.name, 
        sets: newRowData.sets,
        reps: newRowData.reps,
        weight: newRowData.weight
    }

    const isRowFilled = (newRow) => {
        return Object.values(newRow).every(item => item !== '');
    }

    if (isRowFilled(newRow)) {
        setExercises([...exercises, newRow]);
        PostRow(newRow); // via ExpressJS server
        setNewRowData({id: -1, name: "", sets: "", reps: "", weight: ""});
    }
    }

    const deleteRow = (index) => {
        const newRows = [...exercises].filter((exercise) => exercise.id !== index);
        setExercises(newRows);
        DeleteRow(index); // via ExpressJS server
    }

    return(
        <div class="p-8">
            <h1 class="text-blue-500 border py-10 my-10 text-4xl 
            border-blue-500 bg-white rounded-lg text-center">
            Welcome, <span class="text-red-400">Leonidas</span>!
            </h1>
    
            <WorkoutRoutine 
                exercises={ exercises } 
                addRow={ addRow } 
                onChange={ handleChange }
                newRowData={ newRowData } 
                isEditing={ isEditing }
                deleteRow={ deleteRow }
                toggleEditMode={ toggleEditMode } />
        </div>
    )
}

function PostRow(newRow) {
    fetch('http://localhost:3000/api/routine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRow)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error in posting exercise: ', error))
    }

    function DeleteRow(id) {
    fetch(`http://localhost:3000/api/routine/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: id })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error in deleting exercise: ', error))
    }  

export default Dashboard