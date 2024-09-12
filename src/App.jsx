import { useState } from 'react'
import './App.css'
import WorkoutRoutine from './WorkoutRoutine'

function App() {
  const [exercises, setExercises] = useState([
    {id: 1, name: "Bench Press", sets: 3, reps: 5, weight: 165},
    {id: 2, name: "Dips", sets: 3, reps: 10, weight: "bodyweight"},
    {id: 3, name: "Shoulder Press", sets: 4, reps: 8, weight: 35},
    {id: 4, name: "Squats", sets: 3, reps: 12, weight: 45}
  ]);

  const [newRowData, setNewRowData] = useState(
    {id: -1, name: "", sets: "", reps: "", weight: ""}
  );

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    console.log('entered edit mode!')
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
      setNewRowData({id: -1, name: "", sets: "", reps: "", weight: ""});
    }
  }

  return (
    <>
      <h1 class="text-blue-500 border py-10 my-10 text-4xl 
      border-blue-500 bg-white rounded-lg">
        Welcome, Warrior <span class="text-red-400">Leonidas</span>!
        </h1>

      <WorkoutRoutine 
      exercises={ exercises } 
      addRow={ addRow } 
      onChange={ handleChange }
      newRowData={ newRowData } 
      isEditing={ isEditing }
      toggleEditMode={ toggleEditMode } />
    </>
  )
}

export default App
