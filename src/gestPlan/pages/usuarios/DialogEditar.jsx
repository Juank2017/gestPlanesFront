import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { useUiStore } from "../../../hooks/useUiStore";

import { useState } from "react";
import { useUsersStore } from "../../../hooks/useUsersStore";

export const DialogEditar = () => {
  const { isDialogEditarOpen, valueEditar } = useSelector((state) => state.ui);
  const { roles } = useSelector((state) => state.users);
  const { cambiaValores, closeDialogEditar } = useUiStore();
  const [checked, setChecked] = useState(valueEditar.enabled);
  const { editUser } = useUsersStore();

  const handleCancel = (event) => {
    console.log(event)
    closeDialogEditar();
  };

  const handleOk = (event) => {
    
    console.log(event);
    editUser(valueEditar);
  };

  const onChangeValues = ({ target }) => {
    console.log(target)
    let nombre = target.name;
    let value = target.value;
    if (target.name === "enabled") {
      setChecked(!checked);
      value = target.checked;
    }
    cambiaValores({ ...valueEditar, [nombre]: value });
  };

  return (
    <>
      <Dialog open={isDialogEditarOpen}>
        <DialogTitle>Editar usuario</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              name="userName"
              type="Text"
              value={valueEditar?.userName || ""}
              onChange={onChangeValues}
            ></TextField>
            <Select
              label="Rol"
              name="roles"
              value={valueEditar?.roles.trim() || ""}
              onChange={onChangeValues}
            >
              {Object.keys(roles) === 0 ? (
                <MenuItem key="NIMGUNO" value="---">
                  ----
                </MenuItem>
              ) : (
                roles.map((rol) => (
                  <MenuItem key={rol.id} value={rol.roleName}>
                    {rol.roleName}
                  </MenuItem>
                ))
              )}
            </Select>
            <FormControlLabel
              required
              control={
                <Switch
                  checked={valueEditar.enabled}
                  name="enabled"
                  onChange={onChangeValues}
                />
              }
              label="Activo"
            />
          </Stack>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
