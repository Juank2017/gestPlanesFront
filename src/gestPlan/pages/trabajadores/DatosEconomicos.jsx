import { Card, CardContent, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const DatosEconomicos = (formik) => {
    
    const { salario } = useSelector(state => state.contrato);
    useEffect(() => {
      if(formik.values.gc){
        let salarioActual = salario.filter((item)=>item.grupo === formik.values.gc);
        console.log(salarioActual);
        formik.setFieldValue('base',salarioActual.base);
      }
    

    }, [formik.values.gc])
    


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
                                value={formik.values.base}
                                onChange={formik.handleChange}
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="base"
                                id="base"
                                type="text"
                                label="Base"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                            />
                            <TextField
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="prorratas"
                                id="prorratas"
                                type="text"
                                label="Prorratas"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                            />
                            <TextField
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="residencia"
                                id="residencia"
                                type="text"
                                label="Resisdencia"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                            />
                            <TextField
                                InputProps={{ sx: { '& .MuiInputBase-input': { paddingBottom: 0 } }, readOnly: true }}
                                name="total"
                                id="total"
                                type="text"
                                label="Total"
                                variant='standard'
                                size='small'
                                sx={{ width: "100px" }}
                            />
                        </Stack>

                    </Grid2>
                </CardContent>
            </Card>
        </Grid2></>
    )
}
