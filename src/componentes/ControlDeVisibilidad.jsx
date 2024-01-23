import React, { useState } from 'react';
import { toast } from 'sonner';

export const ControlDeVisibilidad = ({ setMostrarTareaC, borrarTarea, estaMostrando }) => {
  const [borrarToastVisible, setBorrarToastVisible] = useState(false);
  let borrarToastKey = null; // Variable para almacenar la clave del toast de borrar

  const handleBorrar = () => {
    borrarToastKey = toast('¿Estás seguro de BORRAR todas las tareas realizadas?', {
      position: 'top-center',
      action: {
        label: 'Borrar',
        onClick: () => {
          borrarTarea();
          toast.dismiss(borrarToastKey); // Cierra el toast específico al borrar las tareas
          setBorrarToastVisible(false); // Indica que el toast de borrar ya no está visible
        },
      },
    });
    setBorrarToastVisible(true); // Indica que el toast de borrar está visible
  };

  const handleCancelBorrar = () => {
    if (borrarToastVisible) {
      toast.dismiss(borrarToastKey); // Cierra el toast de borrado al cancelar la operación
      setBorrarToastVisible(false); // Indica que el toast de borrar ya no está visible
      toast('Operación de borrado cancelada', {
        type: 'info',
        position: 'top-center',
      });
    }
  };

  // Agregar una clase condicional al botón "Cancelar Borrado" para cambiar su color
  const cancelBorrarButtonClass = borrarToastVisible ? 'bg-red-500 text-cyan-50 p-3 ml-4 rounded-lg' : 'bg-blue-500 text-cyan-50 p-3 ml-4 rounded-lg';

  return (
    <div className='mt-4 w-1/2 flex justify-end items-center'>
      <input className='w-4 h-4 cursor-pointer' id='checkbox' type="checkbox" checked={estaMostrando} onChange={e => setMostrarTareaC(e.target.checked)} />
      <label className='text-cyan-50 ml-2 cursor-pointer' htmlFor='checkbox'>Mostrar tareas completadas</label>
      <button  className='bg-blue-500 text-cyan-50 p-3 ml-4 rounded-lg' onClick={handleBorrar}> Borrar tareas completadas</button>
      <button
        className={cancelBorrarButtonClass}
        onClick={handleCancelBorrar}
        style={{ marginLeft: '10px' }}
        disabled={!borrarToastVisible}
      >
        Cancelar Borrado
      </button>
    </div>
  );
};

export default ControlDeVisibilidad;