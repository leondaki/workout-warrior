function WorkoutRoutine({ routine }) {
    return(
    <>
        <div class='shadow-md rounded-md mx-auto bg-white'>
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
                        {routine.map((item) => (
                                <tr key={item.id} class="even:bg-gray-200">
                                    <td class="p-2">{item.name}</td>
                                    <td class="p-2">{item.sets}</td>
                                    <td class="p-2">{item.reps}</td>
                                    <td class="p-2">{item.weight}</td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                        
                </table>
            </div>
        </ div>
   
    </>
  )
}

export default WorkoutRoutine