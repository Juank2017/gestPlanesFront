import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import CheckIcon from "@mui/icons-material/esm/Check";
import NotInterestedIcon from "@mui/icons-material/esm/NotInterested";
import EditIcon from "@mui/icons-material/esm/Edit";
import DeleteIcon from "@mui/icons-material/esm/Delete";

import { useMemo, useState } from "react";
import { useUiStore } from "../../../hooks/useUiStore";


export const FilasTablaUsuarios = ({
  order,
  orderBy,
  page,
  rowsPerPage,
  usuarios,
}) => {
  const { openDialogEditar, openDialogBorrar } = useUiStore();
  const [selected, setSelected] = useState([]);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const visibleRows = useMemo(
    () =>
      stableSort(usuarios, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleDelete = (event)=>{
    console.log(event);
    let salida;
    
    usuarios.forEach(element => {
      // console.log(element);
      if (element.id.toString() === event.target.parentNode.id){
        salida= element;
      }
    });
    //console.log(salida.length);
    if(salida === undefined) return;
    if( typeof(salida) ===  'object' ){
      console.log(event.target.parentNode.id);
      openDialogBorrar( salida);
    }else return;
  }
  const handleEdit = (event) => {
    console.log(event);
    let salida;
    
    usuarios.forEach(element => {
      // console.log(element);
      if (element.id.toString() === event.target.parentNode.id){
        salida= element;
      }
    });
    //console.log(salida.length);
    if(salida === undefined) return;
    if( typeof(salida) ===  'object' ){
      console.log(event.target.parentNode.id);
      openDialogEditar( salida);
    }else return;
  };

  return visibleRows.map((usuario, index) => {
      const isItemSelected = isSelected(usuario.id);
      const labelId = `enhanced-table-checkbox-${index}`;

      return (
         <TableRow
          hover
         // onClick={(event) => handleClick(event, usuario.id)}
         // role="checkbox"
          //aria-checked={isItemSelected}
          tabIndex={-1}
          //selected={isItemSelected}
         // sx={{ cursor: "pointer" }}
          key={usuario.id}
          >
            <TableCell component="th" id={labelId} scope="row" padding="normal">
              {usuario.id}
            </TableCell>
            <TableCell>{usuario.userName}</TableCell>
            <TableCell>
              {usuario.enabled === true? <CheckIcon /> : <NotInterestedIcon />}
            </TableCell>
            <TableCell>{usuario.roles}</TableCell>
            <TableCell>
              <Button   id={usuario.id} onClick={handleEdit} color={"success"}>
              <EditIcon id={usuario.id}/>
              </Button>
              <Button id={usuario.id} onClick={handleDelete} color={"error"}>
                <DeleteIcon id={usuario.id}/>
              </Button>
            </TableCell>
          </TableRow>
 
      );
      }); 
  
  

  
 


};
