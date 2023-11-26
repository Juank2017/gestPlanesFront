
import { useEffect } from 'react';
import { useTrabajadoresStore } from '../../../hooks/useTrabajadoresStore'
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

export const TrabajadoresPage = () => {

  const {loadTrabajadores,isLoading,trabajadores,tratrabajadorActual}=useTrabajadoresStore();

   useEffect(() => {
     loadTrabajadores();
        
   }, [])
   
console.log(trabajadores);
  return (
    <div>TrabajadoresPage</div>
  )
}
