import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React from 'react'

export const DatosPersonales = () => {
    return (
        <>
            <Grid2 width={'100%'} display={'flex'} flexGrow={'1'} justifyContent={'center'}>

                <Card sx={{ width: '100%', marginBottom: '10px' }} lg={12} >
                    <CardContent>
                        <Typography
                            bgcolor={"primary.light"}
                            color={'white'}
                            pl={2}
                        >Datos personales</Typography>
                        <Grid2  >
                            <Grid2 mb={3} display={'flex'} justifyContent={'space-around'}>

                                <TextField
                                    name='nombre'
                                    id='nombre'
                                    type='text'
                                    label="Nombre"
                                    variant='standard'
                                    size='small'

                                />
                                <TextField
                                    name="apellido1"
                                    id="apellido1"
                                    type="text"
                                    label="1ª Apellido"
                                    variant='standard'
                                    size='small' />
                                <TextField
                                    name="apellido2"
                                    id="apellido2"
                                    type="text"
                                    label="2º Apellido"
                                    variant='standard'
                                    size='small'
                                />
                                <FormControl sx={{ minWidth: 120 }}>
                                    <InputLabel id="labelSexo">Sexo</InputLabel>
                                    <Select
                                        labelId='labelSexo'
                                        //label="Sexo"
                                        name='sexo'
                                        id='sexo'

                                        variant='standard'
                                        size='small'
                                        sx={{ width: '40 px' }}
                                    >
                                        <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                        <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    name="dni"
                                    id="dni"
                                    type="text"
                                    label="DNI"
                                    variant='standard'
                                    size='small'
                                />
                                <TextField
                                    name="seguridadSocial"
                                    id="seguridadSocial"
                                    type="text"
                                    label="Seguridad Social"
                                    variant='standard'
                                    size='small'
                                />
                            </Grid2>
                            <Grid2 display={'flex'} justifyContent={'space-around'}>
                                <DesktopDatePicker

                                    label="F. nacimiento."
                                    timezone="Europe/Madrid"
                                    //views={["day", "month", "year"]}
                                    slotProps={{
                                        textField: { size: "small", variant: "standard" },
                                    }}
                                    sx={{ width: "130px" }}
                                ></DesktopDatePicker>
                                <TextField
                                    name="email"
                                    id="email"
                                    type="email"
                                    label="Correo Electrónico"
                                    variant='standard'
                                    size='small'
                                    sx={{ width: "400px" }}
                                />
                                <TextField
                                    name="telefono"
                                    id="telefono"
                                    type="text"
                                    label="Teléfono"
                                    variant='standard'
                                    size='small'
                                />
                                <TextField
                                    name="ccc"
                                    id="ccc"
                                    type="text"
                                    label="IBAN"
                                    variant='standard'
                                    size='small'
                                    sx={{ width: "400px" }}
                                />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card >
            </Grid2>
        </>
    )
}