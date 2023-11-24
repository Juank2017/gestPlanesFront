import { Card, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { useFormikContext, validateYupSchema } from 'formik'
import React from 'react'

export const DatosPersonales = () => {



    const { values, setFieldValue, handleChange, errors } = useFormikContext()

    console.log(errors);
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
                            <Grid2 my={2} display={'flex'} justifyContent={'space-around'}>

                                <TextField
                                    name='nombre'
                                    id='nombre'
                                    type='text'
                                    label="Nombre"
                                    variant='standard'
                                    size='small'
                                    value={values.nombre}
                                    onChange={handleChange}
                                    error={errors.nombre}
                                    helperText={errors.nombre}

                                />
                                <TextField
                                    value={values.apellido1}
                                    onChange={handleChange}
                                    name="apellido1"
                                    id="apellido1"
                                    type="text"
                                    label="1ª Apellido"
                                    variant='standard'
                                    size='small' 
                                    error={errors.apellido1}
                                    helperText={errors.apellido1}
                                    />
                                <TextField
                                    value={values.apellido2}
                                    onChange={handleChange}
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

                                        name='sexo'
                                        id='sexo'
                                        value={values.sexo}
                                        variant='standard'
                                        size='small'
                                        sx={{ width: '40 px' }}
                                        onChange={handleChange}
                                        error={errors.sexo}
                                        helperText={errors.sexo}
                                    >

                                        <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                        <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.sexo}</FormHelperText>
                                </FormControl>
                                <TextField
                                    value={values.DNI}
                                    onChange={handleChange}
                                    name="DNI"
                                    id="DNI"
                                    type="text"
                                    label="DNI"
                                    variant='standard'
                                    size='small'
                                    error={errors.DNI}
                                    helperText={errors.DNI}
                                    
                                />
                                <TextField
                                    value={values.seguridadSocial}
                                    onChange={handleChange}
                                    name="seguridadSocial"
                                    id="seguridadSocial"
                                    type="text"
                                    label="Seguridad Social"
                                    variant='standard'
                                    size='small'
                                    error={errors.seguridadSocial}
                                    helperText={errors.seguridadSocial}                                    
                                />
                            </Grid2>
                            <Grid2 display={'flex'} justifyContent={'space-around'}>

                                <FormControl sx={{ marginRight: '5px', minWidth: 100 }}>

                                    <TextField
                                        type='date'
                                        value={values.fechaNacimiento}
                                        format="DD/MM/YYYY"
                                        name="fechaNacimiento"
                                        id="fechaNacimiento"
                                        onChange={handleChange}
                                        label="F. nacimiento."
                                        variant='standard'
                                        size='small'

                                    />
                                </FormControl>
                                <TextField
                                    name="email"
                                    id="email"
                                    type="email"
                                    label="Correo Electrónico"
                                    variant='standard'
                                    size='small'
                                    sx={{ width: "400px" }}
                                    value={values.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    helperText={errors.email}                                    
                                />
                                <TextField
                                    name="telefono"
                                    id="telefono"
                                    type="text"
                                    label="Teléfono"
                                    variant='standard'
                                    size='small'
                                    value={values.telefono}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="ccc"
                                    id="ccc"
                                    type="text"
                                    label="IBAN"
                                    variant='standard'
                                    size='small'
                                    sx={{ width: "400px" }}
                                    value={values.ccc}
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card >
            </Grid2>
        </>
    )
}