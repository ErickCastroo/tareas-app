import { useState, useEffect } from 'react';
import { CreadorTareas } from './componentes/CreadorTareas';
import { TablaTareas } from './componentes/TablaTareas';
import {ControlDeVisibilidad} from './componentes/ControlDeVisibilidad'

function App() {
  const [listaTareas, setListaTareas] = useState([]);
  const [mostrarTareaC, setMostrarTareaC] = useState(false)
  

  const alternadorTareas = (tarea) =>{
    setListaTareas(
      listaTareas.map((t) => (t.nombre == tarea.nombre ? {...t, guardada: !t.guardada} : t))
      );
  };

  useEffect (()=>{
    let data = localStorage.getItem('tarea')
    if(data)
    {
      setListaTareas(JSON.parse(data))
    }
  },[ ])
  
    const borrarTarea = () =>{
      setListaTareas(listaTareas.filter(tarea => !tarea.guardada))
      setMostrarTareaC(false)
        }

  useEffect(() => {
    localStorage.setItem('tarea', JSON.stringify(listaTareas))
  },[listaTareas])

  return (
    <>
      <div className='bg-slate-600 min-h-screen h-full w-full flex flex-col items-center justify-start'>
        <h1 className='text-3xl font-bold text-white mt-6'>Organizador de tareas</h1>
        <CreadorTareas 
          listaTareas = {listaTareas} 
          setListaTareas = {setListaTareas}
        />
        <ControlDeVisibilidad 
          setMostrarTareaC = {(checked) => setMostrarTareaC(checked)} 
          borrarTarea = {borrarTarea} 
          estaMostrando ={mostrarTareaC} 
        />
        <TablaTareas 
          titulo = 'Tareas pendientes'
          tareas = {listaTareas} 
          alternadorTareas = {alternadorTareas} 
        />
        {mostrarTareaC ? (
          <TablaTareas 
            tareas = {listaTareas} 
            titulo = 'Tareas realizadas'
            alternadorTareas = {alternadorTareas} 
            mostrarCompletadas = {mostrarTareaC}
          />
        ) : undefined}
      </div>
    </>
  );
}

export default App;