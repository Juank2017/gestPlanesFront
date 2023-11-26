
import {  FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

import { useEffect, useState } from 'react'
import { DatosPersonales } from './DatosPersonales'
import { DatosContrato } from './DatosContrato'
import { DatosEconomicos } from './DatosEconomicos'

import { Formik } from 'formik'
import { planesAPI } from '../../../API/planesAPI'
import Close from '@mui/icons-material/esm/Close'
import { useUiStore } from '../../../hooks/useUiStore'



export const AltaTrabajador = () => {
    const { isSnackBarOpen,openSnackBar, closeSnackBar, mensajeSnackBar } =
    useUiStore();
    const handleCloseSnack = (reason, event) => {
        console.log(reason);
        console.log(event);
        if (reason === "clickaway") {
          return;
        }
        closeSnackBar();
      };
      const action = (
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnack}
          >
            <Close fontSize="small" />
          </IconButton>
        </>
      );
    const validateDNI = (dni) => {
        var numero, let_, letra;
        var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

        dni = dni.toUpperCase();

        if (expresion_regular_dni.test(dni) === true) {
            numero = dni.substr(0, dni.length - 1);
            numero = numero.replace('X', 0);
            numero = numero.replace('Y', 1);
            numero = numero.replace('Z', 2);
            let_ = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != let_) {
                //alert('Dni erroneo, la letra del NIF no se corresponde');
                return false;
            } else {
                //alert('Dni correcto');
                return true;
            }
        } else {
            //alert('Dni erroneo, formato no válido');
            return false;
        }
    }

    const [estadosCiudadano, setEstadosCiudadano] = useState([]);

    useEffect(() => {
        planesAPI.get("/estadosCiudadano").then(({ data }) => {

            setEstadosCiudadano(data.payload);

        })


    }, [])

    const validate = (values) => {
        const errors = {};

        if (!values.fechaRegistro) {
            errors.fechaRegistro = "Obligatorio";
        }

        if (!values.estado) {
            errors.estado = "Obligatorio";
        }

        if (!values.nombre) {
            errors.nombre = "Obligatorio"
        }

        if (!values.apellido1) {
            errors.apellido1 = "Obligatorio"
        }

        if (!values.sexo) {
            errors.sexo = "Obligatorio"
        }



        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Correo no válido.';
        }

        if (!values.DNI) {
            errors.DNI = 'Obligatorio';
        } else if (!validateDNI(values.DNI)) {
            errors.DNI = 'DNI/NIE incorrecto';
        }

        if (!values.seguridadSocial) {
            errors.seguridadSocial = 'Obligatorio';
        } else if (!/^[0-9]{2}\/[0-9]{8}\/[0-9]{2}$/i.test(values.seguridadSocial)) {
            errors.seguridadSocial = 'Número no válido';
        }

        if (!values.gc) {
            errors.gc = "Obligatorio";
        }
        console.log(errors);
        return errors;
    };




    return (
        <>
            <Formik
                initialValues={{
                    nombre: "",
                    apellido1: "",
                    apellido2: "",
                    sexo: "",
                    DNI: "",
                    seguridadSocial: "",
                    fechaNacimiento: "",
                    ccc: "",
                    estado: "",
                    email: "",
                    telefono: "",
                    fechaRegistro: "",
                    gc: "",
                    categoria: "",
                    ocu: "",
                    duracion: "",
                    fechaInicio: "",
                    fechaFinal: "",
                    turno: "",
                    entidad: "",
                    destino: "",
                    base: ""


                }}
                validateOnChange={false}
                onSubmit={async(values, actions) => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(actions);
                    const idPlan= localStorage.getItem("idPlan");
                    await planesAPI.post(`/crearTrabajador/${idPlan}`,values).then(({data})=>{
                        console.log(data);
                        openSnackBar(data.mensaje);
                        actions.resetForm();
                    }).catch((error)=>{
                        console.log(error);
                        openSnackBar(error);
                    })
                    
                }}
                validate={validate}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <Grid2 container marginX={"auto"} width={"100%"}>


                            <Grid2 width={'100%'} display={'flex'} flexGrow={'1'} justifyContent={'start'}>

                                <FormControl sx={{ minWidth: 200, marginX: '20px' }}>

                                    <TextField
                                        type='date'
                                        value={props.values.fechaRegistro}
                                        format="DD/MM/YYYY"
                                        name="fechaRegistro"
                                        id="fechaRegistro"
                                        onChange={props.handleChange}
                                        label="F. registro."
                                        variant='standard'
                                        size='small'
                                        error={props.errors.fechaRegistro}
                                        helperText={props.errors.fechaRegistro}

                                        InputLabelProps={{ shrink: true }}
                                    />

                                </FormControl>
                                <FormControl sx={{ minWidth: 200, marginX: '10px' }}>
                                    <InputLabel id="labelEstado">Estado</InputLabel>
                                    <Select
                                        labelId='labelEstado'

                                        name='estado'
                                        id='estado'
                                        value={props.values.estado}
                                        variant='standard'
                                        size='small'
                                        sx={{ width: '40 px' }}
                                        onChange={props.handleChange}
                                        error={props.errors.estado}
                                        helperText={props.errors.estado}
                                    >
                                        {estadosCiudadano.map((e) => (

                                            <MenuItem key={e.idEstadoCiudadano} value={e.idEstadoCiudadano} >{e.estado}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{props.errors.estado}</FormHelperText>
                                </FormControl>
                            </Grid2>
                            <DatosPersonales />
                            <DatosContrato />
                            <DatosEconomicos />


                        </Grid2>
                    </form>
                )}
            </Formik>

            <Snackbar
            open={isSnackBarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
            message={mensajeSnackBar}
            action={action}
          />

        </>


    )

}