function WorkoutRoutine({ exercises, addRow, onChange, newRowData }) {
    return(
        <div class='shadow-md rounded-md mx-auto bg-white pb-8'>
            <h2 class='text-left p-8 font-bold text-3xl'>Daki's Workout</h2>
            <div class="pb-6 mx-8">
                <table class="w-full border-collapse shadow-md bg-gray-100">
                    <thead>
                        <tr class=" text-white bg-blue-400">
                            <th class="font-thin p-4 text-sm uppercase">Exercise Name</th>
                            <th class="font-thin p-4 text-sm uppercase">Sets</th>
                            <th class="font-thin p-4 text-sm uppercase">Reps</th>
                            <th class="font-thin p-4 text-sm uppercase">Weight</th>
                        </tr>
                    </ thead>
                    <tbody>
                        {exercises.map((exercise) => (
                                <tr key={exercise.id} class="even:bg-gray-200">
                                    <td class="p-2">{exercise.name}</td>
                                    <td class="p-2">{exercise.sets}</td>
                                    <td class="p-2">{exercise.reps}</td>
                                    <td class="p-2">{exercise.weight}</td>
                                </tr>
                                )
                            )
                        }
                        <tr>
                            <td class='bg-gray-400 p-2'>
                                <input onChange={onChange} name="name" value={newRowData.name} placeholder="Enter a name..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input onChange={onChange} name="sets" value={newRowData.sets} placeholder="Enter set number..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input onChange={onChange} name="reps" value={newRowData.reps} placeholder="Enter rep number..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input onChange={onChange} name="weight" value={newRowData.weight} placeholder="Enter weight..."/>
                            </td>
                        </tr>
                    </tbody>
                        
                </table>
            </div>
            <button
            class="border-2 border-green-500 hover:scale-105 p-2 px-4 rounded-lg
            text-white bg-green-500 transition duration-150 ease-in-out"
            onClick={() => addRow()}>Add Exercise</button>
        </ div>
  )
}

export default WorkoutRoutine