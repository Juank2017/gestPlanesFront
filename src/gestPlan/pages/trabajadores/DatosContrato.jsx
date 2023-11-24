import { Button, Card, CardContent, FormControl, FormHelperText, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { planesAPI } from '../../../API/planesAPI'
import { SelectGc } from './SelectGc'
import { useFormikContext } from 'formik'
import { useContratoStore } from '../../../hooks/useContratoStore'

export const DatosContrato = () => {

    const { values, setFieldValue, handleChange, handleSubmit, errors } = useFormikContext();
    // const { salario } = useSelector(state => state.contrato);
    const [categorias, setCategorias] = useState([])
    const [ocupaciones, setOcupaciones] = useState([]);
    const [organismos, setOrganismos] = useState([]);
    const [destinos, setDestinos] = useState([])
    const [salario, setSalario] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const plan = localStorage.getItem("idPlan");
        const respuesta = planesAPI.get(`/organismo/${plan}`).then(({ data }) => {
            setOrganismos(data.payload);

        })
        const respuesta1 = planesAPI.get(`/salario/${plan}`).then(({ data }) => {
            setSalario(data.payload);
            console.log(values);
        })
        setIsLoading(false);
    }, [])

    console.log(organismos);
    console.log(values);
    useEffect(() => {
        if (values.gc) {

            let salarioActual = salario.filter((item) => item.grupo === values.gc);
            console.log(salarioActual);
            console.log(salarioActual.base);
            setFieldValue('base', salarioActual[0].base);

            setFieldValue('prorratas', salarioActual[0].prorrata);

            setFieldValue('residencia', salarioActual[0].residencia);
            setFieldValue('total', salarioActual[0].total)
            const plan = localStorage.getItem("idPlan");
            const respuesta = planesAPI.get(`/categorias/${plan}/${values.gc}`).then(({ data }) => {
                setCategorias(data.payload);
                console.log(values);
            })
        }


    }, [values.gc])

    useEffect(() => {
        if (values.categoria) {


            const plan = localStorage.getItem("idPlan");
            const respuesta = planesAPI.get(`/ocupaciones/${values.categoria}`).then(({ data }) => {
                setOcupaciones(data.payload);
                console.log(ocupaciones);
                console.log(values);
            })
            console.log(values);
        }


    }, [values.categoria])

    useEffect(() => {
        if (values.entidad) {


            const plan = localStorage.getItem("idPlan");
            const respuesta = planesAPI.get(`/destinos/${values.entidad}`).then(({ data }) => {
                setDestinos(data.payload);
                console.log(destinos);
                console.log(values);
            })
            console.log(values);
        }


    }, [values.entidad])


    return (
        <>
            {(isLoading) ?
                (<><LinearProgress /></>)
                : (
                    <>
                        <Grid2 flexDirection={'column'} width={'70%'} display={'flex'} flexGrow={'1'} >
                            <Grid2 md={12} width={'100%'} display={'flex'} flexGrow={'1'}>

                                <Card sx={{ width: '100%', marginBottom: '10px' }} lg={12}>
                                    <CardContent sx={{ marginTop: '10px' }}>
                                        <Typography
                                            bgcolor={"primary.light"}
                                            color={'white'}
                                            pl={2}
                                        >Datos del contrato</Typography>
                                        <Grid2  >
                                            <Grid2 my={2} display={'flex'} justifyContent={'flex-start'}>

                                                <FormControl sx={{ marginRight: '5px', minWidth: 45 }}>
                                                    <InputLabel id="labelGC">GC</InputLabel>
                                                    <Select
                                                        labelId='labelGC'
                                                        value={values.gc}
                                                        name='gc'
                                                        id='gc'
                                                        onChange={handleChange}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '30 px' }}
                                                    >
                                                        {Object.keys(salario) === 0 ?
                                                            (
                                                                <MenuItem key="---" value="---" >prueba</MenuItem>
                                                            ) :


                                                            salario.map((sal) => (

                                                                <MenuItem key={sal.grupo} value={sal.grupo} >{sal.grupo}</MenuItem>
                                                            ))

                                                        }


                                                    </Select>
                                                    <FormHelperText>{errors.gc}</FormHelperText>
                                                </FormControl>

                                                <FormControl sx={{ marginRight: '5px', minWidth: 200 }}>
                                                    <InputLabel id="labelCategoria">Categoría</InputLabel>
                                                    <Select
                                                        labelId='labelCategoria'

                                                        name='categoria'
                                                        id='categoria'
                                                        value={values.categoria}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '60 px' }}
                                                        onChange={handleChange}>

                                                        <MenuItem key="----" value="" > </MenuItem>
                                                        {categorias.map((categoria) => (
                                                            <MenuItem key={categoria.idCategoria} value={categoria.idCategoria} >{categoria.categoria} </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                <FormControl sx={{ marginRight: '5px', minWidth: 400 }}>
                                                    <InputLabel id="labelOcupacion">Ocupación</InputLabel>
                                                    <Select
                                                        labelId='labelOcupacion'

                                                        name='ocu'
                                                        id='ocu'
                                                        value={values.ocu}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '40 px' }}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem key="----" value="" > </MenuItem>
                                                        {ocupaciones.map((o) => (
                                                            <MenuItem key={o.idOcupacion} value={o.idOcupacion} >{o.ocupacion} </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                <TextField
                                                    name="duracion"
                                                    id="duracion"
                                                    type="text"
                                                    label="Duracion"
                                                    variant='standard'
                                                    size='small'
                                                    sx={{ marginRight: '5px', width: "70px" }}
                                                    value={values.duracion}
                                                    onChange={handleChange}
                                                />
                                                <FormControl sx={{ marginRight: '5px', minWidth: 100 }}>

                                                    <TextField
                                                        type='date'
                                                        value={values.fechaInicio}
                                                        format="DD/MM/YYYY"
                                                        name="fechaInicio"
                                                        id="fechaInicio"
                                                        onChange={handleChange}
                                                        label="F. Alta."
                                                        variant='standard'
                                                        size='small'

                                                    />
                                                </FormControl>


                                                <TextField
                                                    type='date'
                                                    value={values.fechaFinal}
                                                    format="DD/MM/YYYY"
                                                    name="fechaFinal"
                                                    id="fechaFinal"
                                                    onChange={handleChange}
                                                    label="F. Baja."
                                                    variant='standard'
                                                    size='small'
                                                    sx={{ marginRight: '5px', minWidth: 100 }}
                                                />

                                                <FormControl sx={{ marginRight: '5px', minWidth: 80 }}>
                                                    <InputLabel id="labelTurno">Turno</InputLabel>
                                                    <Select
                                                        labelId='labelTurno'
                                                        onChange={handleChange}
                                                        name='turno'
                                                        id='turno'
                                                        value={values.turno}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '40 px' }}
                                                    >
                                                        <MenuItem key="M" value="Mañana" >Mañana</MenuItem>
                                                        <MenuItem key="T" value="Tarde" >Tarde</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid2>
                                            <Grid2 marginTop={2} display={'flex'} justifyContent={'flex-start'}>
                                                <FormControl sx={{ marginRight: '20px', minWidth: 800 }}>
                                                    <InputLabel id="labelEntidad">Organismo</InputLabel>
                                                    <Select
                                                        labelId='labelEntidad'
                                                        //label="Sexo"
                                                        name='entidad'
                                                        id='entidad'
                                                        values={values.entidad}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '40 px' }}
                                                        onChange={handleChange}
                                                    >

                                                        <MenuItem key="--" value="--" > </MenuItem>
                                                        {organismos.map((o) => (
                                                            <MenuItem key={o.idOrganismo} value={o.idOrganismo} >{o.organismo} </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>

                                                <FormControl sx={{ minWidth: 275 }}>
                                                    <InputLabel id="labelDestino">Destino</InputLabel>
                                                    <Select
                                                        labelId='labelDestino'
                                                        onChange={handleChange}
                                                        name='destino'
                                                        id='destino'
                                                        value={values.destino}
                                                        variant='standard'
                                                        size='small'
                                                        sx={{ width: '40 px' }}
                                                    >
                                                        {destinos.map((d) => (
                                                            <MenuItem key={d.idDestino} value={d.idDestino} >{d.destino} </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                <Button size='small'>nuevo destino</Button>

                                            </Grid2>

                                        </Grid2>
                                    </CardContent>
                                </Card>
                            </Grid2>
                            <Grid2 md={12} width={'100%'} display={'flex'} flexGrow={'1'} >

                                <Card sx={{ width: '100%', marginBottom: '10px', display: 'flex', justifyContent: 'end' }} lg={12}>
                                    <CardContent >
                                        <Button onClick={handleSubmit} variant='contained'>Registrar</Button>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        </Grid2>
                    </>
                )}
        </>


    )
}
