import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React from 'react'

export const AltaTrabajador = () => {
    return (
        <>
            <Grid2 container marginX={"auto"} width={"100%"}>
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
                <Grid2  flexDirection={'column'} width={'70%'} display={'flex'} flexGrow={'1'} >
                    <Grid2 md={12} width={'100%'} display={'flex'} flexGrow={'1'}>

                        <Card sx={{ width: '100%', marginBottom: '10px' }} lg={12}>
                            <CardContent>
                                <Typography
                                    bgcolor={"primary.light"}
                                    color={'white'}
                                    pl={2}
                                >Datos del contrato</Typography>
                                <Grid2  >
                                    <Grid2 display={'flex'} justifyContent={'space-around'}>

                                        <FormControl sx={{ minWidth: 60 }}>
                                            <InputLabel id="labelGC">GC</InputLabel>
                                            <Select
                                                labelId='labelGC'

                                                name='gc'
                                                id='gc'

                                                variant='standard'
                                                size='small'
                                                sx={{ width: '30 px' }}
                                            >
                                                <MenuItem key="----" value="----" >--</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <InputLabel id="labelCategoria">Categoría</InputLabel>
                                            <Select
                                                labelId='labelCategoria'
                                                //label="Sexo"
                                                name='categoria'
                                                id='categoria'

                                                variant='standard'
                                                size='small'
                                                sx={{ width: '60 px' }}
                                            >
                                                <MenuItem key="----" value="----" >Hombre</MenuItem>

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
                                                <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                                <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
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

                                                variant='standard'
                                                size='small'
                                                sx={{ width: '40 px' }}
                                            >
                                                <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                                <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ minWidth: 400 }}>
                                            <InputLabel id="labelProyecto">Proyecto</InputLabel>
                                            <Select
                                                labelId='labelProyecto'
                                                //label="Sexo"
                                                name='proyecto'
                                                id='proyecto'

                                                variant='standard'
                                                size='small'
                                                sx={{ width: '40 px' }}
                                            >
                                                <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                                <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ minWidth: 200 }}>
                                            <InputLabel id="labelDestino">Destino</InputLabel>
                                            <Select
                                                labelId='labelDestino'
                                                //label="Sexo"
                                                name='destino'
                                                id='destino'

                                                variant='standard'
                                                size='small'
                                                sx={{ width: '40 px' }}
                                            >
                                                <MenuItem key="H" value="Hombre" >Hombre</MenuItem>
                                                <MenuItem key="M" value="Mujer" >Mujer</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button  size='small'>nuevo destino</Button>

                                    </Grid2>

                                </Grid2>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 md={12} width={'100%'} display={'flex'} flexGrow={'1'} >

                        <Card  sx={{ width: '100%', marginBottom: '10px', display:'flex', justifyContent:'end' }} lg={12}>
                            <CardContent >
                                <Button variant='contained'>Registrar</Button>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
                <Grid2 width={'5%'} display={'flex'} flexGrow={'1'} justifyContent={'center'}>

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
                                        InputProps={{ readOnly: true }}
                                        name="base"
                                        id="base"
                                        type="text"
                                        label="Base"
                                        variant='standard'
                                        size='small'
                                        sx={{ width: "100px" }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        name="prorratas"
                                        id="prorratas"
                                        type="text"
                                        label="Prorratas"
                                        variant='standard'
                                        size='small'
                                        sx={{ width: "100px" }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
                                        name="residencia"
                                        id="residencia"
                                        type="text"
                                        label="Resisdencia"
                                        variant='standard'
                                        size='small'
                                        sx={{ width: "100px" }}
                                    />
                                    <TextField
                                        InputProps={{ readOnly: true }}
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
                </Grid2>
                <Grid2 display={'flex'} justifyContent={'space-around'}>

                </Grid2>
            </Grid2>

        </>
    )

}