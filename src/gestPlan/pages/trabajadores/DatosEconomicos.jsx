import { Card, CardContent, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import { useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const DatosEconomicos = () => {

    const { values, setFieldValue,handleChange } = useFormikContext();
    const { salario } = useSelector(state => state.contrato);
    // useEffect(() => {
    //     if (values.gc) {
    //         let salarioActual = salario.filter((item) => item.grupo === values.gc);
    //         console.log(salarioActual);
    //         console.log(salarioActual.base);
    //         setFieldValue('base', salarioActual[0].base);
            
    //         setFieldValue('prorratas', salarioActual[0].prorrata);
    //         setTouched('prorratas');
    //         setFieldValue('residencia', salarioActual[0].residencia);
    //         setFieldValue('total', salarioActual[0].total)
    //     }


    // }, [values.gc])



    return (
        <>                <Grid2 width={'1%'} display={'flex'} flexGrow={'1'} justifyContent={'center'}>

            <Card sx={{ width: '100%', marginBottom: '10px' }} lg={12}>
                <CardContent>
                    <Typography
                        bgcolor={"primary.dark"}
                        color={'white'}
                        pl={2}
                    >Datos económicos</Typography>
                    <Grid2  >
                        <Stack>
                            <TextField
                                value={values.base}
                                onChange={handleChange}
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="base"
                                id="base"
                                type="text"
                                label="Base"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                                InputLabelProps={{shrink: true}}
                            />
                            <TextField
                                value={values.prorratas}
                                onChange={handleChange}
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="prorratas"
                                id="prorratas"
                                type="text"
                                label="Prorratas"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                                InputLabelProps={{shrink: true}}
                            />
                            <TextField
                                value={values.residencia}
                                onChange={handleChange}
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="residencia"
                                id="residencia"
                                type="text"
                                label="Resisdencia"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                                InputLabelProps={{shrink: true}}
                            />
                            <TextField
                                value={values.total}
                                onChange={handleChange}
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="total"
                                id="total"
                                type="text"
                                label="Total"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                                InputLabelProps={{shrink: true}}
                            />
                        </Stack>

                    </Grid2>
                </CardContent>
            </Card>
        </Grid2></>
    )
}
