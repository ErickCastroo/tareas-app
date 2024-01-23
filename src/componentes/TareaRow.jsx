import React from 'react';
export const TareaRow = ({tarea, alternadorTareas}) =>{
  return(
    <tr className='bg-slate-500'>
      <td className='text-left p-2 flex justify-between'>
        <span className='mr-2 text-lg'>{tarea.nombre}</span>
        <input
          className='w-6 h-6'
          type="checkbox"
          checked= {tarea.guardada}
          onChange={ () => alternadorTareas(tarea)}
        />
      </td>
    </tr>
  )
}