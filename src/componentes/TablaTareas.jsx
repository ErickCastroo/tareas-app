import {TareaRow} from './TareaRow.jsx'
export const TablaTareas = ({tareas, alternadorTareas,titulo, mostrarCompletadas = false}) =>{

  const tabladetareasfilla =(guardadaValue)=>{
    return(
      tareas
      .filter(tarea=> tarea.guardada === guardadaValue)
      .map(tarea => (
        <TareaRow tarea={tarea} key={tarea.nombre} alternadorTareas = {alternadorTareas}/>
      ))
    )
  }

  return(
    <table className='mt-6 w-1/2'>
      <thead className=''>
        <tr>
          <th className="text-3xl font-bold text-white pb-4">{titulo}</th>
        </tr>
      </thead>

      <tbody className='text-white '>
        {
          tabladetareasfilla(mostrarCompletadas)
        }
      </tbody>
    </table>
  
  )
}