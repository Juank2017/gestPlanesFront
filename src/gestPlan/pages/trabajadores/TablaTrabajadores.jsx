
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

export const TablaTrabajadores = () => {


  const columnas = useMemo(
    ()=>{[
      {
        accessorKey: 'fechaRegistro', //access nested data with dot notation
        header: 'Fecha de registro',
        size: 150,
      },
      {
        accessorKey: 'nombre', //access nested data with dot notation
        header: 'Nombre',
        size: 150,
      },
      {
        accessorKey: 'apellido1', //access nested data with dot notation
        header: '1º Apellido',
        size: 150,
      },      {
        accessorKey: 'apellido1', //access nested data with dot notation
        header: '2º Apellido',
        size: 150,
      },
      {
        accessorKey: 'DNI', //access nested data with dot notation
        header: 'DNI',
        size: 150,
      },      {
        accessorKey: 'seguridadSocial', //access nested data with dot notation
        header: 'Seguridad Social',
        size: 150,
      },      
    ]
    }
  )

  return (
    <div>TablaTrabajadores</div>
  )
}
