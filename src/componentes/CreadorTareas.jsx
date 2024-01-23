import { React, useState} from 'react'
import { Toaster, toast } from 'sonner';
import '../App.css'

export const CreadorTareas = ({listaTareas, setListaTareas}) => {
  const [nuevatarea, setNuevatarea] = useState('')
  
  
  const agregarTarea = () => {
    CreadordeTarea(nuevatarea)
    setNuevatarea ('')
  }

  function CreadordeTarea(nombreTarea) {
    if (!listaTareas.find(tarea => tarea.nombre === nombreTarea)) {
      setListaTareas([...listaTareas, { nombre: nombreTarea, guardada: false }]);
    } else {
      toast.error('¡Esta tarea ya existe!');
    }
  }
  
  return (
    <>
      <div className='mt-4 w-1/2 flex'>
        <input
          className='placeholder:text-black p-3 border-b-2 rounded-lg w-3/4 '
          type="text"
          placeholder='Agregar nueva tarea' 
          value={nuevatarea}
          onKeyDown={(e) => e.key === 'Enter' ? agregarTarea() : undefined } 
          onChange={(e) => setNuevatarea(e.target.value) }
        />
  
        <div className='w-1/4 pl-2'>
          <button 
            className='bg-blue-500 text-cyan-50 p-3 rounded-lg w-full'
            onClick={agregarTarea} 
          >Agregar tarea</button>
        </div>
      </div>
      <Toaster richColors position="top-right"/>
    </>
  )
  
}