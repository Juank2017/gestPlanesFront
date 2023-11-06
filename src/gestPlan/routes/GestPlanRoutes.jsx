import {Navigate,Routes, Route } from 'react-router-dom';
import { DashBoardPage } from '../pages/DashBoardPage';
import { IndexPage } from '../pages/IndexPage';
import { UsuariosPage } from '../pages/usuarios/UsuariosPage';

export const GestPlanRoutes =()=>{
    return(
        <Routes>
                            <Route path="/"  element={ <IndexPage/> } >
                                 <Route path="/dashboard" element={<DashBoardPage/>}/>
                                 <Route path='/usuarios' element={<UsuariosPage/>}/>
                                 
                            </Route>
                            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}