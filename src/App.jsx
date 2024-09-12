import { useState } from 'react'
import './App.css'
import WorkoutRoutine from './WorkoutRoutine'

function App() {
  const [routine, setRoutine] = useState([
    {id: 1, name: "Bench Press", sets: 3, reps: 5, weight: 165},
    {id: 2, name: "Dips", sets: 3, reps: 10, weight: "bodyweight"},
    {id: 3, name: "Shoulder Press", sets: 4, reps: 8, weight: 35},
    {id: 4, name: "Squats", sets: 3, reps: 12, weight: 45}
  ])

  return (
    <>
      <h1 class="text-blue-500 border py-10 my-10 text-4xl 
      border-blue-500 bg-white rounded-lg">
        Welcome, Workout Warrior <span class="text-red-400">Leonidas</span>!
        </h1>

      <WorkoutRoutine routine={ routine }/>
    </>
  )
}

export default App
