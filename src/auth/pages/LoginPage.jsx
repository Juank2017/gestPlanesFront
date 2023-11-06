import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';

// const loginFormFields = {
//   loginUserName:    '',
//   loginPassword: '',
// }

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  // const { loginUserName, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
 
  const formik = useFormik({
    initialValues:{
      userName:"usuario",
      password:"password"
    },
    onSubmit:(values)=>{
      startLogin({ userName: values.userName, password: values.password });
    }
  });

  // const loginSubmit = ( event ) => {
  //     event.preventDefault();
  //     startLogin({ userName: loginUserName, password: loginPassword });
  // }

 
 

  useEffect(() => {
    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }    
  }, [errorMessage])


  return (
    <>
      <Grid2  height={'600px'} alignContent={'center'} container justifyContent={'center'}>
        <Grid2 display={'flex'} justifyContent={'center'}>

          <Card  >
            <CardHeader  title='GestPlan'>
              
            </CardHeader>
            <Grid2 display={'flex'} justifyContent={'center'}>
            <CardMedia
              component={'img'}
              image='/public/img/escudo1.jpg'
              
              sx={{width: '209px', height: '213px'}}
            ></CardMedia>
            </Grid2>

            <CardContent >
              <form onSubmit={formik.handleSubmit}>
              <Grid2   >
                <Stack spacing={2}>

                <TextField
                  label={'Nombre de usuario'}
                  type='text'
                  name="userName"
                  value={ formik.values.userName }
                  fullWidth
                  onChange={ formik.handleChange }/>
                  
                <TextField
                  id="password"
                      fullWidth
                  type="password"
                  name="password"
                  label="Contraseña"
                  value={ formik.values.password }
                  onChange={ formik.handleChange } />
                  <Button
                  type={'submit'}
                  variant={'contained'}
                  
                  >Entrar</Button>
                </Stack>
              </Grid2>
                
              </form>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

    </>
  );
};
