import { Padding } from '@mui/icons-material'
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useEffect } from 'react'
import { DatosPersonales } from './DatosPersonales'
import { DatosContrato } from './DatosContrato'
import { DatosEconomicos } from './DatosEconomicos'
import { useContratoStore } from '../../../hooks/useContratoStore'
import { Formik, useFormik } from 'formik'


export const AltaTrabajador = () => {



    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido1: "",
            apellido2: "",
            sexo: "--",
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
            ocupacion: "",
            duracion: "",
            fechaInicio: "",
            fechaFinal: "",
            turno: "",
            entidad: "",
            destino: "",
            base: ""
            

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        
    });



    return (
            

            <form onSubmit={formik.handleSubmit}>
                <Grid2 container marginX={"auto"} width={"100%"}>


                    <Grid2 width={'100%'} display={'flex'} flexGrow={'1'} justifyContent={'start'}>
                        <DesktopDatePicker

                            label="F. registro."
                            timezone="Europe/Madrid"
                            //views={["day", "month", "year"]}
                            slotProps={{
                                textField: { size: "small", variant: "standard" },
                            }}
                            sx={{ width: "130px", marginX: '20px' }}
                        ></DesktopDatePicker>
                        <FormControl sx={{ minWidth: 200, marginX: '10px' }}>
                            <InputLabel id="labelEstado">Estado</InputLabel>
                            <Select
                                labelId='labelEstado'
                                //label="Sexo"
                                name='estado'
                                id='estado'

                                variant='standard'
                                size='small'
                                sx={{ width: '40 px' }}
                            >
                                <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid2>
                    <DatosPersonales />
                    <DatosContrato {...formik} />
                    <DatosEconomicos {...formik} />


                </Grid2>
            </form>
            
        
    )

}