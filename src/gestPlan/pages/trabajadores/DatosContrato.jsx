import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { planesAPI } from '../../../API/planesAPI'
import { SelectGc } from './SelectGc'

export const DatosContrato = (formik) => {

    const { salario } = useSelector(state => state.contrato);
    const [categorias, setCategorias] = useState([])
    console.log(formik)
    const cargaCategorias = async (gc) => {
        try {
            const plan = localStorage.getItem("idPlan");
            const respuesta = await planesAPI.get(`/categorias/${plan}/${gc}`)

        } catch (error) {

        }
    }

    useEffect(() => {
      if (formik.values.gc){


        const plan = localStorage.getItem("idPlan");
            const respuesta = planesAPI.get(`/categorias/${plan}/${formik.values.gc}`).then(({data})=>{
                setCategorias(data.payload);
            })
      }
    
   
    }, [formik.values.gc])
    
    // const selectGC = (props) => {
    //     const {
    //         values: { },
    //         setFieldValue,
    //     } = useFormikContext();
    //     const [field, meta] = useField(props);

    //     React.useEffect(() => {
    //         let isCurrent = true;
    //         // your business logic around when to fetch goes here.
    //         if (gc.trim() !== '') {
    //             cargaCategorias.then(({ data }) => {
    //                 if (!!isCurrent) {
    //                     // prevent setting old values
    //                     setFieldValue(props.name, data.payload);
    //                 }
    //             });
    //         }
    //         return () => {
    //             isCurrent = false;
    //         };
    //     }, [gc, setFieldValue, props.name]);

    //     return (
    //         <>
    //             <FormControl sx={{ minWidth: 120 }}>
    //                 <InputLabel id="labelCategoria">Categoría</InputLabel>
    //                 <Select {...props} {...field}

    //                 >
    //                     <MenuItem key="----" value="----" >----n</MenuItem>

    //                 </Select>
    //             </FormControl>
    //             {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    //         </>
    //     );
    // }

    console.log(salario);
    return (
        <>
            <Grid2  flexDirection={'column'} width={'70%'} display={'flex'} flexGrow={'1'} >
                <Grid2  md={12} width={'100%'} display={'flex'} flexGrow={'1'}>

                    <Card sx={{ width: '100%', marginBottom: '10px'  }} lg={12}>
                        <CardContent sx={{marginTop:'10px'}}>
                            <Typography
                                bgcolor={"primary.light"}
                                color={'white'}
                                pl={2}
                            >Datos del contrato</Typography>
                            <Grid2  >
                                <Grid2 my={1} display={'flex'} justifyContent={'space-around'}>

                                    <FormControl sx={{ minWidth: 60 }}>
                                        <InputLabel id="labelGC">GC</InputLabel>
                                        <Select
                                            labelId='labelGC'
                                            value={formik.values.gc}
                                            name='gc'
                                            id='gc'
                                            onChange={formik.handleChange}
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
                                    </FormControl>
                                   {/* <SelectGc labelId = 'labelCategoria'
                                        name = 'categoria'
                                        id = 'categoria'
                                        variant = 'standard'
                                        size = 'small'
                                        sx = {
                                            {width: '60 px' }}/> */}
                                    <FormControl sx={{ minWidth: 200 }}>
                                        <InputLabel id="labelCategoria">Categoría</InputLabel>
                                        <Select
                                            labelId='labelCategoria'
                                            //label="Sexo"
                                            name='categoria'
                                            id='categoria'
                                            value={formik.values.categoria}
                                            variant='standard'
                                            size='small'
                                            sx={{ width: '60 px' }}
                                        onChange={formik.handleChange}>
                                            
                                            <MenuItem key="----" value="" > </MenuItem>
                                            {categorias.map((categoria)=>(
                                                <MenuItem key={categoria.idCategoria} value={categoria.idCategoria} >{categoria.categoria} </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="labelOcupacion">Ocupación</InputLabel>
                                        <Select
                                            labelId='labelOcupacion'
                                            //label="Sexo"
                                            name='ocupacion'
                                            id='ocupacion'

                                            variant='standard'
                                            size='small'
                                            sx={{ width: '40 px' }}
                                        >
                                            {/* <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                            <MenuItem key="M" value="Mujer" >Mujer</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        name="duracion"
                                        id="duracion"
                                        type="text"
                                        label="Duracion"
                                        variant='standard'
                                        size='small'
                                        sx={{ width: "80px" }}
                                    />
                                    <DesktopDatePicker

                                        label="F. Alta."
                                        timezone="Europe/Madrid"
                                        //views={["day", "month", "year"]}
                                        slotProps={{
                                            textField: { size: "small", variant: "standard" },
                                        }}
                                        sx={{ width: "130px" }}
                                    ></DesktopDatePicker>
                                    <DesktopDatePicker

                                        label="F. Baja."
                                        timezone="Europe/Madrid"
                                        //views={["day", "month", "year"]}
                                        slotProps={{
                                            textField: { size: "small", variant: "standard" },
                                        }}
                                        sx={{ width: "130px" }}
                                    ></DesktopDatePicker>
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="labelTurno">Turno</InputLabel>
                                        <Select
                                            labelId='labelTurno'
                                            //label="Sexo"
                                            name='turno'
                                            id='turno'
                                            value={formik.values.turno}
                                            variant='standard'
                                            size='small'
                                            sx={{ width: '40 px' }}
                                        >
                                            <MenuItem key="M" value="Mañana" >Mañana</MenuItem>
                                            <MenuItem key="T" value="Tarde" >Tarde</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid2>
                                <Grid2 display={'flex'} justifyContent={'space-around'}>
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="labelOrganismo">Organismo</InputLabel>
                                        <Select
                                            labelId='labelOrganismo'
                                            //label="Sexo"
                                            name='organismo'
                                            id='organismo'
                                            values={formik.values.organismo}
                                            variant='standard'
                                            size='small'
                                            sx={{ width: '40 px' }}
                                        >
                                            {/* <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                            <MenuItem key="M" value="Mujer" >Mujer</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ minWidth: 400 }}>
                                        <InputLabel id="labelProyecto">Proyecto</InputLabel>
                                        <Select
                                            labelId='labelProyecto'
                                            //label="Sexo"
                                            name='proyecto'
                                            id='proyecto'
                                            value={formik.values.proyecto}
                                            variant='standard'
                                            size='small'
                                            sx={{ width: '40 px' }}
                                        >
                                            {/* <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                            <MenuItem key="M" value="Mujer" >Mujer</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ minWidth: 200 }}>
                                        <InputLabel id="labelDestino">Destino</InputLabel>
                                        <Select
                                            labelId='labelDestino'
                                            //label="Sexo"
                                            name='destino'
                                            id='destino'
                                            value={formik.values.destino}
                                            variant='standard'
                                            size='small'
                                            sx={{ width: '40 px' }}
                                        >
                                            <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                            <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
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
                            <Button variant='contained'>Registrar</Button>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>

        </>
    )
}
