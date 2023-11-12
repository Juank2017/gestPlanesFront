import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, MenuItem, Select, Switch, TextField, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useUiStore } from '../../../hooks/useUiStore';
import { useUsersStore } from '../../../hooks/useUsersStore';

export const DialogCrear = () => {

  const { roles } = useSelector((state) => state.users);
  const { isDialogCrearOpen, valueEditar } = useSelector(state => state.ui);
  const [checked, setChecked] = useState(valueEditar.enabled);
  const { cambiaValores, closeDialogCrear } = useUiStore();
  const { existeUsuario } = useUsersStore();
 
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
  const handleCancel = (event) => {
    console.log(event)
    closeDialogCrear();
  };

  const handleOk = (event) => {

    console.log(event);
    existeUsuario(valueEditar);
  };
  return (
    <>
      <Dialog open={isDialogCrearOpen}>
        <DialogTitle>Nuevo usuario</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              name="userName"
              type="Text"
              value={valueEditar?.userName || ""}
              onChange={onChangeValues}
              placeholder='Usuario'
            ></TextField>
            <TextField
              name="password"
              type="password"
              value={valueEditar?.password || ""}
              onChange={onChangeValues}
              inputProps={{
                autoComplete: 'new-password'
              }}
              placeholder='Password'
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
  )
}
