import { Outlet, Route, Routes } from "react-router-dom"
import Home from './routes/Home'
import Dashboard from './Dashboard'
import Login from "./login"

function App() {
  return (
    <>
    <div class="px-8 mt-4">
      <h1 class="text-blue-500 border py-10 text-4xl 
    border-blue-500 bg-white rounded-lg text-center">Workout Warrior App</h1>
    </div>
      

      <Outlet />
    </>
  )
}

export default App
