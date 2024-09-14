function WorkoutRoutine({ exercises, addRow, onChange, newRowData, isEditing, toggleEditMode, deleteRow}) {
    return(
        <div class='shadow-md rounded-md mx-auto bg-white pb-8'>
            <h2 class='text-left p-8 font-bold text-3xl'>Daki's Workout</h2>
            <div class="pb-6 mx-8">
                <table class="w-full border-collapse shadow-md bg-gray-100">
                    <thead>
                        <tr class=" text-white bg-blue-400 tracking-wider">
                            <th class="font-thin p-4 text-sm uppercase w-1/4">Exercise Name</th>
                            <th class="font-thin p-4 text-sm uppercase w-1/4">Sets</th>
                            <th class="font-thin p-4 text-sm uppercase w-1/4">Reps</th>
                            <th class="font-thin p-4 text-sm uppercase w-1/4">Weight</th>
                        </tr>
                    </ thead>
                    <tbody>
                        {exercises.map((exercise) => (
                                <tr key={exercise.id} class="even:bg-gray-200">
                                    <td class="p-2 text-left">{exercise.name}</td>
                                    <td class="p-2">{exercise.sets}</td>
                                    <td class="p-2">{exercise.reps}</td>
                                    <td class="p-2 text-left">{exercise.weight}</td>
                                    {isEditing && <td class="p-2 text-left bg-white">
                                        <button 
                                        class="border border-red-600 text-red-600 px-2 rounded-md
                                        hover:bg-red-600 transition-all hover:text-white duration-300 ease-in-out"
                                        onClick={() => deleteRow(exercise.id)}>X</button></td>}
                                </tr>
                                )
                            )
                        }
                        {isEditing && <tr>
                            <td class='bg-gray-400 p-2'>
                                <input 
                                class="rounded-md text-blue-400 p-1" 
                                onChange={onChange} name="name" value={newRowData.name} placeholder="Enter a name..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input 
                                class="rounded-md text-blue-400 p-1" 
                                onChange={onChange} name="sets" value={newRowData.sets} placeholder="Enter set number..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input 
                                class="rounded-md text-blue-400 p-1" 
                                onChange={onChange} name="reps" value={newRowData.reps} placeholder="Enter rep number..."/>
                            </td>
                            <td class='bg-gray-400 p-2'>
                                <input 
                                class="rounded-md text-blue-400 p-1" 
                                onChange={onChange} name="weight" value={newRowData.weight} placeholder="Enter weight..."/>
                            </td>
                        </tr>}
                    </tbody>
                        
                </table>
            </div>

            {!isEditing && <button
            class="border-2 border-blue-400 bg-blue-400 text-white p-2 px-4
            hover:bg-white transition-all hover:text-blue-400 duration-300 ease-in-out"
            onClick={() => toggleEditMode()}>Edit </button>}

            {isEditing && <button
            class="border-2 border-red-600 text-red-600 p-2 px-4
            hover:bg-red-600 transition-all hover:text-white duration-300 ease-in-out"
            onClick={() => toggleEditMode()}>Cancel</button>}

            {isEditing && <button
            class="p-2 px-4 mx-4 border-2 border-green-500 hover:border-green-400 
            text-white bg-green-500 hover:bg-green-400 transition-all duration-300 ease-in-out"
            onClick={() => addRow()}>Add Exercise</button>}

        </ div>
  )
}

export default WorkoutRoutine